export const API_BASE_URL: string = "https://api.voireai.com";

export const ROLES: readonly string[] = ["SuperAdmin", "Admin", "Recruiter", "HiringManager", "Interviewer"];

// Alternatively, you can create a union type for better type safety:
export type UserRole = "SuperAdmin" | "Admin" | "Recruiter" | "HiringManager" | "Interviewer";

// And use it like this:
export const ROLES_TYPED: readonly UserRole[] = ["SuperAdmin", "Admin", "Recruiter", "HiringManager", "Interviewer"];