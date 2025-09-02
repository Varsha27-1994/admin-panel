// src/pages/companies/CompanyForm.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/common/Input.tsx";
import Button from "../components/common/Button.tsx";

// Define the company form data structure
interface CompanyFormData {
  companyName: string;
  logoUrl: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  industry: string;
  employees: string;
}

// Define validation errors structure
interface FormErrors {
  companyName?: string;
  email?: string;
  [key: string]: string | undefined;
}

// Component props interface
interface CompanyFormProps {
  mode?: "add" | "edit";
}

const CompanyForm: React.FC<CompanyFormProps> = ({ mode = "add" }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [form, setForm] = useState<CompanyFormData>({
    companyName: "",
    logoUrl: "",
    website: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    industry: "",
    employees: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (mode === "edit" && id) {
      // Replace with API call
      const fetchCompany = async (): Promise<void> => {
        try {
          const res = await fetch(`/api/companies/${id}`);
          const data: CompanyFormData = await res.json();
          setForm(data);
        } catch (error) {
          console.error("Failed to fetch company:", error);
        }
      };
      fetchCompany();
    }
  }, [mode, id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.companyName) newErrors.companyName = "Company name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email address";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (mode === "add") {
        await fetch("/api/companies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch(`/api/companies/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      navigate("/companies");
    } catch (error) {
      console.error("Failed to save company:", error);
    }
  };

  return (
    <div className="p-6 mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">
        {mode === "add" ? "Add New Company" : "Edit Company"}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <Input
          label="Company Name"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          error={errors.companyName}
          className="col-span-2"
          required
        />

        <Input
          label="Logo URL"
          name="logoUrl"
          value={form.logoUrl}
          onChange={handleChange}
        />

        <Input
          label="Website"
          name="website"
          type="url"
          value={form.website}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <Input
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <Input
          label="Industry"
          name="industry"
          value={form.industry}
          onChange={handleChange}
        />

        <Input
          label="Employees"
          name="employees"
          type="number"
          value={form.employees}
          onChange={handleChange}
        />

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Company Address"
            className="input-field w-full border p-2 rounded"
            rows={2}
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Company Description"
            className="input-field w-full border p-2 rounded"
            rows={3}
          />
        </div>

        <div className="col-span-2 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={() => navigate("/companies")}
            type="button"
          >
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {mode === "add" ? "Add Company" : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;