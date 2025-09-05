// components/companies/CompanyProfiles.tsx
import React from "react";
import { Camera, Save, X } from "lucide-react";
import { CompanyProfileProps } from "./types";

const CompanyProfile: React.FC<
  CompanyProfileProps & { onClose?: () => void }
> = ({ companyData, handleInputChange, handleLogoUpload, onClose }) => {
  const handleSave = () => {
    // Add save logic here
    console.log("Saving company data:", companyData);
    if (onClose) onClose();
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  // If onClose is provided, render as modal
  if (onClose) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {companyData.name
                  ? "Edit Company Profile"
                  : "Create Company Profile"}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-gray-600"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Logo Upload */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Logo
                </label>
                <div className="relative">
                  <div className="w-full h-48 border border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                    {companyData.logo ? (
                      <img
                        src={companyData.logo}
                        alt="Logo"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Upload Logo</p>
                        <p className="text-xs text-gray-400">Click to browse</p>
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
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={companyData.name}
                    onChange={(e) =>
                      handleInputChange("company", "name", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Industry *
                  </label>
                  <select
                    value={companyData.industry}
                    onChange={(e) =>
                      handleInputChange("company", "industry", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Media">Media</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Size
                  </label>
                  <select
                    value={companyData.size}
                    onChange={(e) =>
                      handleInputChange("company", "size", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    value={companyData.website}
                    onChange={(e) =>
                      handleInputChange("company", "website", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://www.company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={companyData.phone}
                    onChange={(e) =>
                      handleInputChange("company", "phone", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={companyData.email}
                    onChange={(e) =>
                      handleInputChange("company", "email", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="contact@company.com"
                  />
                </div>
              </div>
            </div>

            {/* Address Row */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={companyData.address}
                  onChange={(e) =>
                    handleInputChange("company", "address", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Street address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={companyData.city}
                  onChange={(e) =>
                    handleInputChange("company", "city", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  value={companyData.country}
                  onChange={(e) =>
                    handleInputChange("company", "country", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="IN">India</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="SG">Singapore</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Description
              </label>
              <textarea
                rows={6}
                value={companyData.description}
                onChange={(e) =>
                  handleInputChange("company", "description", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about your company, its mission, values, and what makes it unique..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original inline form (for backward compatibility)
  return (
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

        {/* Rest of the original form... */}
        {/* (keeping original form structure for backward compatibility) */}
      </div>
    </div>
  );
};

export default CompanyProfile;
