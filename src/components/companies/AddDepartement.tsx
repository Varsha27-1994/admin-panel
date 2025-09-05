// AddDepartment.tsx
import React, { useState } from "react";
import { Plus, Edit, Trash2, Building } from "lucide-react";

interface Department {
  id: number;
  name: string;
}

const AddDepartment = () => {
  const [departments, setDepartments] = useState<Department[]>([
    { id: 1, name: "Engineering" },
    { id: 2, name: "Human Resources" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
    { id: 5, name: "Finance" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(
    null
  );
  const [departmentName, setDepartmentName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!departmentName.trim()) return;

    if (editingDepartment) {
      // Update existing department
      setDepartments((prev) =>
        prev.map((dept) =>
          dept.id === editingDepartment.id
            ? { ...dept, name: departmentName.trim() }
            : dept
        )
      );
      setEditingDepartment(null);
    } else {
      // Add new department
      const newDepartment: Department = {
        id: Math.max(...departments.map((d) => d.id), 0) + 1,
        name: departmentName.trim(),
      };
      setDepartments((prev) => [...prev, newDepartment]);
    }

    // Reset form
    setDepartmentName("");
    setShowAddForm(false);
  };

  const handleEdit = (department: Department) => {
    setEditingDepartment(department);
    setDepartmentName(department.name);
    setShowAddForm(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      setDepartments((prev) => prev.filter((dept) => dept.id !== id));
    }
  };

  const resetForm = () => {
    setDepartmentName("");
    setEditingDepartment(null);
    setShowAddForm(false);
  };

  const openAddForm = () => {
    setShowAddForm(true);
    setEditingDepartment(null);
    setDepartmentName("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Departments
              </h3>
              <p className="text-gray-600 mt-1">
                Manage your company departments
              </p>
            </div>
            <button
              onClick={openAddForm}
              className="bg-[#1f2f4a] text-white px-4 py-2 rounded-lg hover:bg-[#2a3f5a] transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Department
            </button>
          </div>
        </div>

        {/* Add/Edit Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {editingDepartment ? "Edit Department" : "Add New Department"}
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter department name"
                    autoFocus
                  />
                </div>

                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1f2f4a] text-white rounded-lg hover:bg-[#2a3f5a] transition-colors"
                  >
                    {editingDepartment ? "Update" : "Add"} Department
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Departments List */}
        <div className="p-6">
          {departments.length === 0 ? (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No departments found
              </h3>
              <p className="text-gray-600 mb-4">
                Get started by adding your first department
              </p>
              <button
                onClick={openAddForm}
                className="bg-[#1f2f4a] text-white px-4 py-2 rounded-lg hover:bg-[#2a3f5a] transition-colors"
              >
                Add Department
              </button>
            </div>
          ) : (
            <div className="grid gap-3">
              {departments.map((department) => (
                <div
                  key={department.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-900 font-medium">
                      {department.name}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(department)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit department"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(department.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete department"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Stats */}
        {departments.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="text-center text-sm text-gray-600">
              Total Departments:{" "}
              <span className="font-medium text-gray-900">
                {departments.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddDepartment;
