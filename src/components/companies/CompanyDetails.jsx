import React from "react";

const CompanyDetails = ({ company, onClose }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mt-6 p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-[#1f2f4a]">
          {company.name} - Profile
        </h3>
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <p><span className="font-semibold">Industry:</span> {company.industry}</p>
          <p><span className="font-semibold">Employees:</span> {company.employees}</p>
          <p><span className="font-semibold">Email:</span> {company.email}</p>
        </div>
        <div>
          <p><span className="font-semibold">Custom Branding:</span> Logo upload, Email templates</p>
          <p><span className="font-semibold">Email Settings:</span> SMTP, Notifications</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
