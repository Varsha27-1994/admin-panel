import React, { FC, memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Building2,
  Users,
  CreditCard,
  FileText,
  Settings,
  Mail,
  LucideIcon,
} from "lucide-react";

interface NavigationItem {
  id: string;
  path: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {}

const navigationItems = [
  { id: "dashboard", path: "/dashboard", icon: Home, label: "Dashboard" },
  {
    id: "companies",
    path: "/companies",
    icon: Building2,
    label: "Company Management",
  },
  { id: "users", path: "/users", icon: Users, label: "User & Role Management" },
  {
    id: "subscriptions",
    path: "/subscriptions",
    icon: CreditCard,
    label: "Subscription Plans",
  },
  { id: "reports", path: "/reports", icon: FileText, label: "Reporting" },
  {
    id: "settings",
    path: "/settings",
    icon: Settings,
    label: "System Settings",
  },
  { id: "email", path: "/email", icon: Mail, label: "Email Configuration" },
];

const Sidebar: FC<SidebarProps> = memo(() => {
  const location = useLocation();

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-blue-400">voireci</h1>
        <p className="text-sm text-slate-400">Admin Panel</p>
      </div>

      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
});

export default Sidebar;
