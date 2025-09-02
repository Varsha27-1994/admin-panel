import React, { FC, memo, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../common/Input";
import Button from "../common/Button";
import {
  Building2,
  Globe,
  Mail,
  Phone,
  Users,
  Briefcase,
  Image as ImageIcon,
  MapPin,
  FileText,
} from "lucide-react";

interface CompanyFormData {
  companyName: string;
  logoUrl: string;
  logoFile: File | null;
  website: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  industry: string;
  employees: string;
}

interface FormErrors {
  companyName?: string;
  email?: string;
  [key: string]: string | undefined;
}

interface CompanyFormProps {
  mode?: "add" | "edit";
}

const CompanyForm: FC<CompanyFormProps> = memo(
  ({ mode = "add" }) => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [form, setForm] = useState<CompanyFormData>({
      companyName: "",
      logoUrl: "",
      logoFile: null,
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
        const fetchCompany = async () => {
          const res = await fetch(`/api/companies/${id}`);
          const data = await res.json();
          setForm((prev) => ({ ...prev, ...data }));
        };
        fetchCompany();
      }
    }, [mode, id]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const files = (e.target as HTMLInputElement).files;
      
      if (files) {
        const file = files[0];
        setForm((prev) => ({
          ...prev,
          logoFile: file,
          logoUrl: URL.createObjectURL(file), // preview
        }));
      } else {
        setForm((prev) => ({ ...prev, [name]: value }));
      }
    };

    const validate = () => {
      const newErrors: FormErrors = {};
      if (!form.companyName) newErrors.companyName = "Company name is required";
      if (!form.email) newErrors.email = "Email is required";
      if (form.email && !/\S+@\S+\.\S+/.test(form.email))
        newErrors.email = "Invalid email address";
      return newErrors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        const value = form[key as keyof CompanyFormData];
        if (value) formData.append(key, value instanceof File ? value : String(value));
      });

      if (mode === "add") {
        await fetch("/api/companies", {
          method: "POST",
          body: formData,
        });
      } else {
        await fetch(`/api/companies/${id}`, {
          method: "PUT",
          body: formData,
        });
      }
      navigate("/companies");
    };

    return (
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-[#1f2f4a]">
          {mode === "add" ? "Add New Company" : "Edit Company"}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <Input
            label="Company Name"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            error={errors.companyName}
            icon={Building2}
            className="col-span-2"
            required
          />

          {/* Logo Upload */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-[#1f2f4a] mb-1">
              Company Logo
            </label>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 border rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                {form.logoUrl ? (
                  <img
                    src={form.logoUrl}
                    alt="Logo Preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <ImageIcon className="text-gray-400 w-8 h-8" />
                )}
              </div>
              <input
                type="file"
                name="logoFile"
                accept="image/*"
                onChange={handleChange}
                className="text-sm"
              />
            </div>
          </div>

          <Input
            label="Website"
            name="website"
            type="url"
            value={form.website}
            onChange={handleChange}
            icon={Globe}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            icon={Mail}
            required
          />

          <Input
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            icon={Phone}
          />

          <Input
            label="Industry"
            name="industry"
            value={form.industry}
            onChange={handleChange}
            icon={Briefcase}
          />

          <Input
            label="Employees"
            name="employees"
            type="number"
            value={form.employees}
            onChange={handleChange}
            icon={Users}
          />

          {/* Address */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-[#1f2f4a] mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Company Address"
              className="w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-[#1f2f4a] focus:border-[#1f2f4a] transition"
              rows={2}
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-[#1f2f4a] mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Company Description"
              className="w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-[#1f2f4a] focus:border-[#1f2f4a] transition"
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
  }
);

export default CompanyForm;