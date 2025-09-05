// CompanyManagement.tsx
import React, { useState, ChangeEvent } from "react";
import { Building2, Mail, Users, Settings as SettingsIcon } from "lucide-react";

// Import components
import CompanyCards from "../components/companies/CompanyCard.tsx";
import EmailSettings from "../components/companies/EmailSettings.tsx";
import UserManagement from "../components/companies/UserManagement.tsx";
import Settings from "../components/companies/Settings.tsx";

// Import types
import {
  CompanyData,
  EmailSettings as EmailSettingsType,
  Candidate,
  Section,
} from "../components/companies/types.ts";

const CompanyManagement = () => {
  const [activeSection, setActiveSection] = useState<string>("profile");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("All");
  const [page, setPage] = useState<number>(1);
  const rowsPerPage = 5;

  // Sample data for demonstration
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: "TechCorp Solutions", // Added sample data
    industry: "Technology",
    size: "51-200",
    website: "https://www.techcorp.com",
    phone: "+1 (555) 123-4567",
    email: "contact@techcorp.com",
    description:
      "Leading technology solutions provider specializing in cloud infrastructure, AI-powered analytics, and enterprise software development. We help businesses transform digitally with cutting-edge solutions.",
    address: "123 Innovation Drive",
    city: "San Francisco",
    country: "US",
    logo: null,
    linkedin: "https://www.linkedin.com",
  });

  const [emailSettings, setEmailSettings] = useState<EmailSettingsType>({
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
    { id: "settings", label: "Settings", icon: SettingsIcon },
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
        setCompanyData((prev) => ({
          ...prev,
          logo: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <CompanyCards 
            companyData={companyData}
            handleInputChange={handleInputChange}
            handleLogoUpload={handleLogoUpload}
          />
        );
      case "email":
        return (
          <EmailSettings
            emailSettings={emailSettings}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleInputChange={handleInputChange}
          />
        );
      case "candidates":
        return (
          <UserManagement
            candidates={candidates}
            setCandidates={setCandidates}
            filter={filter}
            setFilter={setFilter}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
          />
        );
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

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
        <div className="flex-1 px-4">{renderActiveSection()}</div>
      </div>
    </div>
  );
};

export default CompanyManagement;
