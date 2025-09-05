import React from "react";
import { Plus, Eye, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { UserManagementProps } from "./types";

const UserManagement: React.FC<UserManagementProps> = ({
  candidates,
  setCandidates,
  filter,
  setFilter,
  page,
  setPage,
  rowsPerPage,
}) => {
  const filteredCandidates =
    filter === "All"
      ? candidates
      : candidates.filter((c) => c.status === filter);

  const paginatedCandidates = filteredCandidates.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const totalPages = Math.ceil(filteredCandidates.length / rowsPerPage);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            User Management
          </h3>
          <p className="text-xs text-gray-600">
            Manage candidates and team members
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-xs">
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-3">
        {["All", "Active", "Pending"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 text-xs rounded-md border ${
              filter === f
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-xs text-gray-600">
              <th className="text-left py-2 px-3">Name</th>
              <th className="text-left py-2 px-3">Email</th>
              <th className="text-left py-2 px-3">Position</th>
              <th className="text-left py-2 px-3">Status</th>
              <th className="text-left py-2 px-3">Join Date</th>
              <th className="text-left py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCandidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
              >
                {/* Name */}
                <td className="py-2 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900 text-sm">
                      {candidate.name}
                    </span>
                  </div>
                </td>

                {/* Email */}
                <td className="py-2 px-3 text-gray-600 text-xs">
                  {candidate.email}
                </td>

                {/* Position */}
                <td className="py-2 px-3 text-gray-600 text-xs">
                  {candidate.position}
                </td>

                {/* Status */}
                <td className="py-2 px-3">
                  <span
                    className={`inline-flex px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                      candidate.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {candidate.status}
                  </span>
                </td>

                {/* Join Date */}
                <td className="py-2 px-3 text-gray-600 text-xs">
                  {candidate.joinDate}
                </td>

                {/* Actions */}
                <td className="py-2 px-3">
                  <div className="flex items-center gap-2">
                    <button className="text-blue-600 hover:text-blue-700 text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" /> View
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 text-xs">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-3 text-xs text-gray-600">
        <span>
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="p-1 border rounded disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="p-1 border rounded disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
