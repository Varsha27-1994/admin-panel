import React, { useState, useEffect } from "react";
import { Search, Filter, Edit, Download, X } from "lucide-react";

interface ReportData {
  id: number;
  name: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  lastLogin: string;
  performance: string;
}

interface Filters {
  status: string[];
  department: string[];
  dateRange: string;
  performance: string[];
}

const Reports: React.FC = () => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    status: [],
    department: [],
    dateRange: "",
    performance: [],
  });

  // Sample data
  const initialReportData: ReportData[] = [
    {
      id: 1,
      name: "John Davidson",
      role: "Sales Manager",
      department: "Sales",
      status: "Active",
      lastLogin: "2024-08-29",
      performance: "95%",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "Marketing Specialist",
      department: "Marketing",
      status: "Active",
      lastLogin: "2024-08-28",
      performance: "87%",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Manager",
      department: "Engineering",
      status: "Inactive",
      lastLogin: "2024-08-25",
      performance: "92%",
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "UX Designer",
      department: "Engineering",
      status: "Active",
      lastLogin: "2024-08-29",
      performance: "98%",
    },
    {
      id: 5,
      name: "David Brown",
      role: "Software Engineer",
      department: "Engineering",
      status: "Active",
      lastLogin: "2024-08-29",
      performance: "94%",
    },
    {
      id: 6,
      name: "Lisa Garcia",
      role: "Business Analyst",
      department: "Sales",
      status: "Active",
      lastLogin: "2024-08-28",
      performance: "89%",
    },
    {
      id: 7,
      name: "Tom Anderson",
      role: "Quality Assurance",
      department: "Engineering",
      status: "Inactive",
      lastLogin: "2024-08-20",
      performance: "91%",
    },
    {
      id: 8,
      name: "Jennifer Lee",
      role: "HR Specialist",
      department: "HR",
      status: "Active",
      lastLogin: "2024-08-29",
      performance: "96%",
    },
  ];

  const [filteredData, setFilteredData] = useState<ReportData[]>(initialReportData);

  useEffect(() => {
    let result = initialReportData;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.role.toLowerCase().includes(query) ||
          item.department.toLowerCase().includes(query)
      );
    }

    if (selectedFilters.status.length > 0) {
      result = result.filter((item) =>
        selectedFilters.status.includes(item.status)
      );
    }

    if (selectedFilters.department.length > 0) {
      result = result.filter((item) =>
        selectedFilters.department.includes(item.department)
      );
    }

    if (selectedFilters.dateRange) {
      const today = new Date();
      const filterDate = new Date();

      switch (selectedFilters.dateRange) {
        case "7d":
          filterDate.setDate(today.getDate() - 7);
          break;
        case "30d":
          filterDate.setDate(today.getDate() - 30);
          break;
        case "90d":
          filterDate.setDate(today.getDate() - 90);
          break;
        default:
          break;
      }

      result = result.filter((item) => {
        const itemDate = new Date(item.lastLogin);
        return itemDate >= filterDate;
      });
    }

    if (selectedFilters.performance.length > 0) {
      result = result.filter((item) => {
        const perfValue = parseInt(item.performance);
        return selectedFilters.performance.some((filter) => {
          if (filter === "high") return perfValue >= 90;
          if (filter === "medium") return perfValue >= 75 && perfValue < 90;
          if (filter === "low") return perfValue < 75;
          return false;
        });
      });
    }

    setFilteredData(result);
  }, [searchQuery, selectedFilters]);

  const toggleFilter = (type: keyof Filters, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      status: [],
      department: [],
      dateRange: "",
      performance: [],
    });
    setSearchQuery("");
  };

  const handleDateRangeChange = (value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      dateRange: value,
    }));
  };

  return (
    <div className="h-[87vh] bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="h-[10vh] bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Custom Reporting
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowEditModal(true)}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Edit size={14} />
            Edit Report
          </button>
          <button className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
            <Download size={14} />
            Export Data
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (30%) */}
        <div
          className={`${
            sidebarOpen ? "basis-[20%]" : "basis-0"
          } transition-all duration-300 overflow-hidden bg-white border-r border-gray-200 flex-shrink-0`}
        >
          <div className="p-4 h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-800">
                Report Details
              </h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 hover:bg-gray-100 rounded"
              >
                <X size={18} />
              </button>
            </div>

            {/* Filters */}
            <div className="space-y-4">
              {/* Status */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Status
                </label>
                <div className="space-y-1">
                  {["Active", "Inactive"].map((status) => (
                    <label key={status} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.status.includes(status)}
                        onChange={() => toggleFilter("status", status)}
                        className="w-3 h-3 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-xs text-gray-700">
                        {status}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date Range */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Date Range
                </label>
                <select
                  value={selectedFilters.dateRange}
                  onChange={(e) => handleDateRangeChange(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded-md text-xs focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Time</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </div>

              {/* Department */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Department
                </label>
                <div className="space-y-1">
                  {["Sales", "Marketing", "Engineering", "HR"].map((dept) => (
                    <label key={dept} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.department.includes(dept)}
                        onChange={() => toggleFilter("department", dept)}
                        className="w-3 h-3 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-xs text-gray-700">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Performance */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Performance
                </label>
                <div className="space-y-1">
                  {["High (90%+)", "Medium (75-89%)", "Low (<75%)"].map(
                    (perf, index) => {
                      const values = ["high", "medium", "low"];
                      return (
                        <label key={perf} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.performance.includes(
                              values[index]
                            )}
                            onChange={() =>
                              toggleFilter("performance", values[index])
                            }
                            className="w-3 h-3 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-xs text-gray-700">
                            {perf}
                          </span>
                        </label>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Clear */}
              <button
                onClick={clearFilters}
                className="w-full bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300 transition-colors text-xs"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Main Content (70%) */}
        <div className="flex-1 basis-[70%] flex flex-col">
          {/* Search Bar */}
          <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-1 hover:bg-gray-100 rounded-md"
              >
                <Filter size={18} />
              </button>
            )}
            <div className="flex-1 relative max-w-md">
              <Search
                size={18}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div className="text-xs text-gray-600">
              Showing {filteredData.length} results
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-hidden">
            <div className="h-[70vh] bg-white border border-gray-200 overflow-y-auto">
              <table className="w-full table-fixed">
                {/* Header */}
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]">
                      Name
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]">
                      Role
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                      Department
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                      Status
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                      Last Login
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                      Performance
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-gray-200">
                  {filteredData.slice(0, 10).map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-3 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-700">
                        {item.role}
                      </td>
                      <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-700">
                        {item.department}
                      </td>
                      <td className="px-3 py-1 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                            item.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-700">
                        {item.lastLogin}
                      </td>
                      <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-700">
                        {item.performance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Floating button */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-30"
        >
          <Filter size={20} />
        </button>
      )}
    </div>
  );
};

export default Reports;