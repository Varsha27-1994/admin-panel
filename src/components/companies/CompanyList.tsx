// src/pages/companies/CompanyList.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { Eye, Edit, Trash2 } from "lucide-react";

interface Company {
  id: number;
  companyName: string;
  email: string;
  industry: string;
  employees: number;
  logoUrl: string;
}

const CompanyList: React.FC = () => {
  const navigate = useNavigate();

  const companies: Company[] = [
    {
      id: 1,
      companyName: "ABC Corp",
      email: "abc@gmail.com",
      industry: "Software",
      employees: 120,
      logoUrl: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      companyName: "XYZ Ltd",
      email: "xyz@gmail.com",
      industry: "Finance",
      employees: 80,
      logoUrl: "https://via.placeholder.com/80",
    },
  ]; // Replace with API

  const handleDelete = (id: number): void => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      console.log("Delete company", id);
      // API call
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1f2f4a]">Companies</h2>
        <Button variant="primary" onClick={() => navigate("/companies/add")}>
          + Add Company
        </Button>
      </div>

      <div className="overflow-hidden border rounded-lg shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-700 text-sm">
              <th className="p-3 border">Logo</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Industry</th>
              <th className="p-3 border">Employees</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c: Company) => (
              <tr
                key={c.id}
                className="hover:bg-gray-50 transition border-b last:border-none"
              >
                <td className="p-3 border">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={c.logoUrl}
                      alt={c.companyName}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td className="p-3 border font-medium text-[#1f2f4a]">
                  {c.companyName}
                </td>
                <td className="p-3 border text-gray-600">{c.email}</td>
                <td className="p-3 border text-gray-600">{c.industry}</td>
                <td className="p-3 border text-gray-600">{c.employees}</td>
                <td className="p-3 border text-center">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => navigate(`/companies/view/${c.id}`)}
                      className="p-2 rounded-lg hover:bg-gray-100 text-blue-600"
                      title="View"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigate(`/companies/edit/${c.id}`)}
                      className="p-2 rounded-lg hover:bg-gray-100 text-green-600"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="p-2 rounded-lg hover:bg-gray-100 text-red-600"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;
