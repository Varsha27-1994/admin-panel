// components/companies/CompanyCards.tsx
import React, { useState } from "react";
import {
  Edit,
  MapPin,
  Globe,
  Phone,
  Mail,
  Users,
  Building,
} from "lucide-react";
import CompanyProfile from "./CompanyProfiles.tsx";
import { CompanyData } from "./types";

interface CompanyCardsProps {
  companyData: CompanyData;
  handleInputChange: (
    section: string,
    field: string,
    value: string | boolean
  ) => void;
  handleLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CompanyCards: React.FC<CompanyCardsProps> = ({
  companyData,
  handleInputChange,
  handleLogoUpload,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const getCountryName = (code: string) => {
    const countries = {
      US: "United States",
      CA: "Canada",
      UK: "United Kingdom",
      IN: "India",
      AU: "Australia",
    };
    return countries[code as keyof typeof countries] || code;
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  // If no company data exists, show empty state
  if (!companyData.name && !companyData.email) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="text-center">
          <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No Company Profile
          </h3>
          <p className="text-gray-500 mb-4">
            Create your company profile to get started
          </p>
          <button
            onClick={handleEdit}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Company Profile
          </button>
        </div>

        {isEditing && (
          <CompanyProfile
            companyData={companyData}
            handleInputChange={handleInputChange}
            handleLogoUpload={handleLogoUpload}
            onClose={handleClose}
          />
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Company Card */}
      <div className="max-w-2xl">
        {/* Header with logo and edit button */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              {companyData.logo ? (
                <img
                  src={companyData.logo}
                  alt="Company Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Building className="w-10 h-10 text-gray-400" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {companyData.name || "Company Name"}
              </h2>
              <p className="text-lg text-gray-600">{companyData.industry}</p>
              {companyData.size && (
                <p className="text-sm text-gray-500">
                  {companyData.size} employees
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleEdit}
            className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Edit company profile"
          >
            <Edit className="w-5 h-5" />
          </button>
        </div>

        {/* Company Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              {companyData.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Email</p>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>
              )}

              {companyData.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Phone</p>
                    <p className="text-gray-600">{companyData.phone}</p>
                  </div>
                </div>
              )}

              {companyData.website && (
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Website</p>
                    <a
                      href={companyData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {companyData.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                </div>
              )}

              {companyData.linkedin && (
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Linkedin</p>
                    <a
                      href={companyData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {companyData.linkedin.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Location Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Location
            </h3>
            {companyData.address || companyData.city || companyData.country ? (
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Address</p>
                  <div className="text-gray-600">
                    {companyData.address && <p>{companyData.address}</p>}
                    {(companyData.city || companyData.country) && (
                      <p>
                        {[companyData.city, getCountryName(companyData.country)]
                          .filter(Boolean)
                          .join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 italic">No location information</p>
            )}
          </div>

        
        </div>

        {/* Description */}
        {companyData.description && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              About Company
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                {companyData.description}
              </p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <CompanyProfile
          companyData={companyData}
          handleInputChange={handleInputChange}
          handleLogoUpload={handleLogoUpload}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default CompanyCards;
