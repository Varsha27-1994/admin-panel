import { ChangeEvent } from "react";

export interface CompanyData {
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
  linkedin: string;
}

export interface EmailSettings {
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

export interface Candidate {
  id: number;
  name: string;
  email: string;
  position: string;
  status: "Active" | "Pending";
  joinDate: string;
}

export interface Section {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

export interface InputFieldProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface CompanyProfileProps {
  companyData: CompanyData;
  handleInputChange: (
    section: string,
    field: string,
    value: string | boolean
  ) => void;
  handleLogoUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface EmailSettingsProps {
  emailSettings: EmailSettings;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  handleInputChange: (
    section: string,
    field: string,
    value: string | boolean
  ) => void;
}

export interface UserManagementProps {
  candidates: Candidate[];
  setCandidates: (candidates: Candidate[]) => void;
  filter: string;
  setFilter: (filter: string) => void;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
}

export interface SettingsProps {
  // Add any settings-specific props here
}
