import React from "react";

const CompanyFilters = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between mb-4">
      <input
        type="text"
        placeholder="Search company..."
        className="border rounded px-3 py-2 w-1/3"
      />
      <select className="border rounded px-3 py-2">
        <option value="all">All Industries</option>
        <option value="IT">IT Services</option>
        <option value="Marketing">Marketing</option>
        <option value="Construction">Construction</option>
      </select>
    </div>
  );
};

export default CompanyFilters;
