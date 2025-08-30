import React from "react";

const SystemSettings = () => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Job Categories</label>
      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Technology, Healthcare..." />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Departments</label>
      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Engineering, Marketing..." />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Locations</label>
      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="New York, London..." />
    </div>
  </div>
);

export default SystemSettings;