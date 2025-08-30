import React from "react";
import Layout from "../components/common/Layout";
import SystemSettings from "../components/settings/SystemSettings";

const SystemSettingsPage = () => (
  <>
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">System Settings</h2>
      <SystemSettings />
    </div>
  </>
);

export default SystemSettingsPage;