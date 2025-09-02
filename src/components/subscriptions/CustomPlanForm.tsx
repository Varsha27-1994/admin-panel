import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

interface FormData {
  companyName: string;
  users: number;
  roles: string;
  jobPosts: number;
  licenseStart: string;
  licenseEnd: string;
}

const CustomPlanForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    companyName: "",
    users: 1,
    roles: "",
    jobPosts: 0,
    licenseStart: "",
    licenseEnd: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const key = name as keyof FormData;
      return {
        ...prev,
        [key]: key === "users" || key === "jobPosts" ? Number(value) : value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Custom Plan Assigned:", form);
    // TODO: API Call
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Assign Custom Plan to Company
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <Input
          label="Company Name"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          className="col-span-2"
        />
        <Input
          label="No. of Users"
          type="number"
          name="users"
          value={form.users}
          onChange={handleChange}
        />
        <Input
          label="Role Access"
          name="roles"
          value={form.roles}
          placeholder="e.g. HR, Admin"
          onChange={handleChange}
        />
        <Input
          label="Job Posts Limit"
          type="number"
          name="jobPosts"
          value={form.jobPosts}
          onChange={handleChange}
        />
        <Input
          label="License Start Date"
          type="date"
          name="licenseStart"
          value={form.licenseStart}
          onChange={handleChange}
        />
        <Input
          label="License End Date"
          type="date"
          name="licenseEnd"
          value={form.licenseEnd}
          onChange={handleChange}
        />
        <div className="col-span-2 flex justify-end">
          <Button type="submit" variant="primary">
            Assign Plan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomPlanForm;
