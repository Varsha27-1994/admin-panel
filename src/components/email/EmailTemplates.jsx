import React from "react";

const EmailTemplates = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Welcome Email</option>
        <option>Interview Invitation</option>
      </select>
      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Welcome to {{company_name}}" />
    </div>
    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="6" placeholder="Dear {{candidate_name}}..." />
  </div>
);

export default EmailTemplates;