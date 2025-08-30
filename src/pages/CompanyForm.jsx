// src/pages/companies/CompanyForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/common/Input";
import Button from "../components/common/Button";


const CompanyForm = ({ mode = "add" }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mode === "edit" && id) {
      // Replace with API call
      const fetchCompany = async () => {
        const res = await fetch(`/api/companies/${id}`);
        const data = await res.json();
        setForm(data);
      };
      fetchCompany();
    }
  }, [mode, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.companyName) newErrors.companyName = "Company name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email address";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
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
  };

  return (
    <div className="p-6  mx-auto bg-white rounded-2xl shadow">
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
            rows="2"
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
            rows="3"
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
