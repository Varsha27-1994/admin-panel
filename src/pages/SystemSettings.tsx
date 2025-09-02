import React from "react";
import Layout from "../components/common/Layout.tsx";
import SystemSettings from "../components/settings/SystemSettings.tsx";

const SystemSettingsPage: React.FC = () => (
  <>
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">System Settings</h2>
      <SystemSettings />
    </div>
  </>
);

export default SystemSettingsPage;
