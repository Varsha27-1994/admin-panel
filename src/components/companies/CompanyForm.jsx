// src/pages/companies/CompanyForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
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

const CompanyForm = ({ mode = "add" }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
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

  const [errors, setErrors] = useState({});

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
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

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key]) formData.append(key, form[key]);
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
            rows="2"
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
