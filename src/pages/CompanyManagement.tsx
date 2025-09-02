import React, { useState, ChangeEvent } from "react";
import {
  Building2,
  Mail,
  Users,
  Settings,
  Camera,
  Eye,
  EyeOff,
  Save,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Define types
interface CompanyData {
  name: string;
  industry: string;
  size: string;
  website: string;
  phone: string;
  email: string;
  description: string;
  address: string;
  city: string;
  country: string;
  logo: string | null;
}

interface EmailSettings {
  smtpHost: string;
  smtpPort: string;
  smtpUsername: string;
  smtpPassword: string;
  senderEmail: string;
  senderName: string;
  enableSSL: boolean;
  emailSubject?: string;
  emailBody?: string;
}

interface Candidate {
  id: number;
  name: string;
  email: string;
  position: string;
  status: "Active" | "Pending";
  joinDate: string;
}

interface Section {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface InputFieldProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CompanyManagement = () => {
  const [activeSection, setActiveSection] = useState<string>("profile");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("All");
  const [page, setPage] = useState<number>(1);
  const rowsPerPage = 5;

  const [companyData, setCompanyData] = useState<CompanyData>({
    name: "",
    industry: "",
    size: "",
    website: "",
    phone: "",
    email: "",
    description: "",
    address: "",
    city: "",
    country: "",
    logo: null,
  });

  const [emailSettings, setEmailSettings] = useState<EmailSettings>({
    smtpHost: "",
    smtpPort: "587",
    smtpUsername: "",
    smtpPassword: "",
    senderEmail: "",
    senderName: "",
    enableSSL: true,
  });

  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@email.com",
      position: "Frontend Developer",
      status: "Active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@email.com",
      position: "UX Designer",
      status: "Pending",
      joinDate: "2024-02-10",
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@email.com",
      position: "Backend Developer",
      status: "Active",
      joinDate: "2024-01-20",
    },
  ]);

  const sections: Section[] = [
    { id: "profile", label: "Company Profile", icon: Building2 },
    { id: "email", label: "Email & SMTP", icon: Mail },
    { id: "candidates", label: "User Management", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleInputChange = (
    section: string,
    field: string,
    value: string | boolean
  ) => {
    if (section === "company") {
      setCompanyData((prev) => ({ ...prev, [field]: value }));
    } else if (section === "email") {
      setEmailSettings((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyData((prev) => ({ ...prev, logo: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderCompanyProfile = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-900">
          Company Profile
        </h3>
        <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700">
          <Save className="w-4 h-4" />
          Save
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Logo Upload */}
        <div className="lg:col-span-1">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Company Logo
          </label>
          <div className="relative">
            <div className="w-36 h-36 border border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-50">
              {companyData.logo ? (
                <img
                  src={companyData.logo}
                  alt="Logo"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="text-center">
                  <Camera className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-500">Upload</p>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              Company Name *
            </label>
            <input
              type="text"
              value={companyData.name}
              onChange={(e) =>
                handleInputChange("company", "name", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter company name"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              Industry *
            </label>
            <select
              value={companyData.industry}
              onChange={(e) =>
                handleInputChange("company", "industry", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              Company Size
            </label>
            <select
              value={companyData.size}
              onChange={(e) =>
                handleInputChange("company", "size", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              Website
            </label>
            <input
              type="url"
              value={companyData.website}
              onChange={(e) =>
                handleInputChange("company", "website", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://www.company.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={companyData.phone}
              onChange={(e) =>
                handleInputChange("company", "phone", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              Email Address *
            </label>
            <input
              type="email"
              value={companyData.email}
              onChange={(e) =>
                handleInputChange("company", "email", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="contact@company.com"
            />
          </div>
        </div>
      </div>

      {/* Address Row */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-0.5">
            Address
          </label>
            <input
              type="text"
              value={companyData.address}
              onChange={(e) =>
                handleInputChange("company", "address", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="Street address"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              City
            </label>
            <input
              type="text"
              value={companyData.city}
              onChange={(e) =>
                handleInputChange("company", "city", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="City"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              Country
            </label>
            <select
              value={companyData.country}
              onChange={(e) =>
                handleInputChange("company", "country", e.target.value)
              }
              className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mt-3 flex-1">
          <label className="block text-xs font-medium text-gray-700 mb-0.5">
            Company Description
          </label>
          <textarea
            rows={8}
            value={companyData.description}
            onChange={(e) =>
              handleInputChange("company", "description", e.target.value)
            }
            className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Tell us about your company..."
          />
        </div>
      </div>
    );

  const renderEmailSettings = () => (
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
        <div className="grid grid-cols-1 gap-3">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Hello [User], welcome to our platform. We're excited to have you on board!"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Reusable input field component
  const InputField: React.FC<InputFieldProps> = ({ label, type = "text", ...props }) => (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );

  const renderUserManagement = () => {
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

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          General Settings
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Email Notifications
              </h4>
              <p className="text-sm text-gray-500">
                Receive notifications for new applications
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Auto-Reply to Candidates
              </h4>
              <p className="text-sm text-gray-500">
                Send automatic confirmation emails
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Data & Privacy
        </h3>

        <div className="space-y-4">
          <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Export Company Data
                </h4>
                <p className="text-sm text-gray-500">
                  Download all your company data
                </p>
              </div>
              <span className="text-blue-600">Download</span>
            </div>
          </button>

          <button className="w-full text-left p-4 border border-red-200 rounded-lg hover:bg-red-50">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-red-900">
                  Delete Company Account
                </h4>
                <p className="text-sm text-red-600">
                  Permanently delete your account and data
                </p>
              </div>
              <span className="text-red-600">Delete</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-[85vh] bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 bg-white shadow-sm min-h-[85vh] rounded-lg sticky top-0">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Company Settings
            </h2>
          </div>

          <nav className="px-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left mb-1 transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-100 text-[#1f2f4a] border-r-2 border-[#1f2f4a]"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4">
          {activeSection === "profile" && renderCompanyProfile()}
          {activeSection === "email" && renderEmailSettings()}
          {activeSection === "candidates" && renderUserManagement()}
          {activeSection === "settings" && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default CompanyManagement;