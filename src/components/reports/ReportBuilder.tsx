import React from "react";
import { Calendar, BarChart3 } from "lucide-react";

const ReportBuilder: React.FC = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <h3 className="text-lg font-semibold mb-4">Report Configuration</h3>
    <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Select Company</option>
        <option>TechCorp Inc.</option>
      </select>
      <div className="flex items-center space-x-2">
        <Calendar className="h-5 w-5 text-gray-400" />
        <input
          type="date"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Calendar className="h-5 w-5 text-gray-400" />
        <input
          type="date"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
      <BarChart3 className="h-16 w-16 text-gray-400" />
      <p className="ml-4 text-gray-500">Custom report visualization</p>
    </div>
  </div>
);

export default ReportBuilder;
