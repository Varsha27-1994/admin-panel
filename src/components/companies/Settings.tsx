// Settings.tsx
import React, { useState } from "react";
import { Palette, Building, ChevronRight } from "lucide-react";


import ThemeSettings from "../Theme/ThemeSettings.tsx";
import AddDepartment from "./AddDepartement.tsx";

interface SettingsOption {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const Settings = () => {
  const [activeSubSection, setActiveSubSection] = useState<string | null>(null);

  const settingsOptions: SettingsOption[] = [
    {
      id: "theme",
      label: "Theme Settings",
      description: "Customize the appearance and theme of your application",
      icon: Palette,
    },
    {
      id: "department",
      label: "Add Department",
      description: "Manage and organize your company departments",
      icon: Building,
    },
  ];

  const renderActiveSubSection = () => {
    switch (activeSubSection) {
      case "theme":
        // Replace this with your actual ThemeSettings component
        return (
          <div className="bg-white rounded-lg shadow-sm ">
            <div className="border-b border-gray-200 ">
              <button
                onClick={() => setActiveSubSection(null)}
                className="text-blue-600 hover:text-blue-800 mb-1 flex items-center gap-1 text-sm"
              >
                ← Back to Settings
              </button>
              <h3 className="text-2xl font-semibold text-gray-900">
                   <ThemeSettings/>
              </h3>
             
            </div>
          </div>
        );
      case "department":
        return (
          <div>
            <div className="mb-4">
              <button
                onClick={() => setActiveSubSection(null)}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
              >
                ← Back to Settings
              </button>
            </div>
            <AddDepartment />
          </div>
        );
      default:
        return null;
    }
  };

  // If a sub-section is active, render it
  if (activeSubSection) {
    return (
      <div className="max-w-6xl mx-auto p-6">{renderActiveSubSection()}</div>
    );
  }

  // Main settings menu
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <h3 className="text-2xl font-semibold text-gray-900">Settings</h3>
          <p className="text-gray-600 mt-1">
            Manage your application settings and preferences
          </p>
        </div>

        {/* Settings Options */}
        <div className="p-6">
          <div className="grid gap-4">
            {settingsOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setActiveSubSection(option.id)}
                  className="w-full text-left border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                        <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-900">
                          {option.label}
                        </h4>
                        <p className="text-gray-600 mt-1">
                          {option.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Settings Info */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Click on any setting above to configure your preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
