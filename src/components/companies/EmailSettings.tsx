import React, { useState } from "react";
import {
  Save,
  Eye,
  EyeOff,
  Edit3,
  Mail,
  Server,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Types
interface EmailSettingsType {
  smtpHost: string;
  smtpPort: string;
  smtpUsername: string;
  smtpPassword: string;
  senderEmail: string;
  senderName: string;
  enableSSL: boolean;
  emailSubject: string;
  emailBody: string;
}

interface EmailSettingsProps {
  emailSettings: EmailSettingsType;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  handleInputChange: (section: string, field: string, value: any) => void;
}

// InputField Component
const InputField: React.FC<{
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}> = ({ label, type = "text", value, onChange, placeholder }) => (
  <div>
    <label className="block text-xs font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
      placeholder={placeholder}
    />
  </div>
);

// Email Settings Edit Component (your existing component)
const EmailSettings: React.FC<EmailSettingsProps> = ({
  emailSettings,
  showPassword,
  setShowPassword,
  handleInputChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Email & SMTP Configuration
          </h3>
          <p className="text-xs text-gray-600">
            Configure your email settings for sending notifications
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-xs">
          <Save className="w-4 h-4" />
          Save
        </button>
      </div>

      {/* SMTP Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-black">
        <InputField
          label="SMTP Host *"
          value={emailSettings.smtpHost}
          onChange={(e) =>
            handleInputChange("email", "smtpHost", e.target.value)
          }
          placeholder="smtp.gmail.com"
        />
        <InputField
          label="SMTP Port *"
          type="number"
          value={emailSettings.smtpPort}
          onChange={(e) =>
            handleInputChange("email", "smtpPort", e.target.value)
          }
          placeholder="587"
        />
        <InputField
          label="SMTP Username *"
          value={emailSettings.smtpUsername}
          onChange={(e) =>
            handleInputChange("email", "smtpUsername", e.target.value)
          }
          placeholder="your-email@gmail.com"
        />

        {/* Password with toggle */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            SMTP Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={emailSettings.smtpPassword}
              onChange={(e) =>
                handleInputChange("email", "smtpPassword", e.target.value)
              }
              className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Your app password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <InputField
          label="Sender Email *"
          type="email"
          value={emailSettings.senderEmail}
          onChange={(e) =>
            handleInputChange("email", "senderEmail", e.target.value)
          }
          placeholder="noreply@company.com"
        />
        <InputField
          label="Sender Name"
          value={emailSettings.senderName}
          onChange={(e) =>
            handleInputChange("email", "senderName", e.target.value)
          }
          placeholder="Company HR"
        />
      </div>

      {/* Enable SSL */}
      <div className="mt-3">
        <label className="flex items-center text-xs text-gray-700">
          <input
            type="checkbox"
            checked={emailSettings.enableSSL}
            onChange={(e) =>
              handleInputChange("email", "enableSSL", e.target.checked)
            }
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="ml-2">Enable SSL/TLS encryption</span>
        </label>
      </div>

      {/* Email Format Section */}
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">
          Email Format (Demo Body)
        </h4>
        <div className="grid grid-cols-1 gap-3 text-black">
          <InputField
            label="Email Subject *"
            value={emailSettings.emailSubject || ""}
            onChange={(e) =>
              handleInputChange("email", "emailSubject", e.target.value)
            }
            placeholder="Welcome to our platform!"
          />
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email Body *
            </label>
            <textarea
              rows={3}
              value={emailSettings.emailBody || ""}
              onChange={(e) =>
                handleInputChange("email", "emailBody", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm "
              placeholder="Hello [User], welcome to our platform. We're excited to have you on board!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Email Cards Overview Component
const EmailCardsOverview: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailSettings, setEmailSettings] = useState<EmailSettingsType>({
    smtpHost: "smtp.gmail.com",
    smtpPort: "587",
    smtpUsername: "admin@company.com",
    smtpPassword: "app_password_123",
    senderEmail: "noreply@company.com",
    senderName: "Company HR",
    enableSSL: true,
    emailSubject: "Welcome to our platform!",
    emailBody:
      "Hello [User], welcome to our platform. We're excited to have you on board!",
  });

  const handleInputChange = (section: string, field: string, value: any) => {
    setEmailSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleBack = () => {
    setEditMode(false);
  };

  if (editMode) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <button
              onClick={handleBack}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Back to Overview
            </button>
          </div>
          <EmailSettings
            emailSettings={emailSettings}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    );
  }

  const isSmtpConfigured =
    emailSettings.smtpHost &&
    emailSettings.smtpPort &&
    emailSettings.smtpUsername &&
    emailSettings.smtpPassword;
  const isEmailTemplateConfigured =
    emailSettings.emailSubject && emailSettings.emailBody;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Email Configuration
          </h2>
          <p className="text-gray-600 mt-1">
            Manage your SMTP settings and email templates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SMTP Configuration Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Server className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      SMTP Configuration
                    </h3>
                    <p className="text-sm text-gray-500">
                      Server settings for email delivery
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {isSmtpConfigured ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                  )}
                  <button
                    onClick={handleEdit}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500">
                      SMTP Host
                    </label>
                    <p className="text-sm text-gray-900 mt-1">
                      {emailSettings.smtpHost || "Not configured"}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500">
                      Port
                    </label>
                    <p className="text-sm text-gray-900 mt-1">
                      {emailSettings.smtpPort || "Not configured"}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500">
                    Username
                  </label>
                  <p className="text-sm text-gray-900 mt-1">
                    {emailSettings.smtpUsername || "Not configured"}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500">
                    Password
                  </label>
                  <p className="text-sm text-gray-900 mt-1">
                    {emailSettings.smtpPassword
                      ? "••••••••••••"
                      : "Not configured"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500">
                      Sender Email
                    </label>
                    <p className="text-sm text-gray-900 mt-1">
                      {emailSettings.senderEmail || "Not configured"}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500">
                      SSL/TLS
                    </label>
                    <p className="text-sm text-gray-900 mt-1">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          emailSettings.enableSSL
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {emailSettings.enableSSL ? "Enabled" : "Disabled"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-medium ${
                      isSmtpConfigured ? "text-green-600" : "text-amber-600"
                    }`}
                  >
                    {isSmtpConfigured
                      ? "Configured"
                      : "Incomplete Configuration"}
                  </span>
                  <button
                    onClick={handleEdit}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Edit Settings
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Email Template Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email Template
                    </h3>
                    <p className="text-sm text-gray-500">
                      Default email content and format
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {isEmailTemplateConfigured ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                  )}
                  <button
                    onClick={handleEdit}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-500">
                    Subject Line
                  </label>
                  <p className="text-sm text-gray-900 mt-1 font-medium">
                    {emailSettings.emailSubject || "Not configured"}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500">
                    Email Body Preview
                  </label>
                  <div className="mt-1 p-3 bg-gray-50 rounded-md border">
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {emailSettings.emailBody || "No email body configured"}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500">
                    Sender Information
                  </label>
                  <p className="text-sm text-gray-900 mt-1">
                    {emailSettings.senderName || "Company"} &lt;
                    {emailSettings.senderEmail || "Not configured"}&gt;
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-medium ${
                      isEmailTemplateConfigured
                        ? "text-green-600"
                        : "text-amber-600"
                    }`}
                  >
                    {isEmailTemplateConfigured
                      ? "Template Ready"
                      : "Template Incomplete"}
                  </span>
                  <button
                    onClick={handleEdit}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Edit Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCardsOverview;
