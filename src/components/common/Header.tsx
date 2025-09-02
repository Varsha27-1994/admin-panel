import React, { FC, memo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
}

interface HeaderProps {}

const Header: FC<HeaderProps> = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "companies", label: "Profile" },
    // { id: "users", label: "User & Role Management" },
    { id: "subscriptions", label: "Subscription Plans" },
    { id: "reports", label: "Reporting" },
    // { id: "settings", label: "System Settings" },
    // { id: "email", label: "Email Configuration" },
  ];

  const getPathFromId = (id) => `/${id}`;

  return (
    <header className="bg-[#1f2f4a] text-white shadow-sm relative">
      <div className="max-w-full flex items-center justify-between px-2 md:px-4 h-[50px]">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-lg md:text-lg font-bold text-white cursor-pointer whitespace-nowrap"
        >
          Voire AI
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden pl-3 w-full md:flex items-center ">
          {navItems.map((item) => {
            const isActive = location.pathname === getPathFromId(item.id);
            return (
              <button
                key={item.id}
                onClick={() => navigate(getPathFromId(item.id))}
                className={`min-w-[100px] min-h-[45px]  px-2 py-1 text-xs lg:text-sm font-medium rounded-t-md leading-tight whitespace-normal break-words text-center ${
                  isActive
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-300 hover:text-white pt-2"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Profile Circle */}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            AB
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1f2f4a] shadow-lg">
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const isActive = location.pathname === getPathFromId(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(getPathFromId(item.id));
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 border-b border-slate-700 text-left leading-tight whitespace-normal break-words ${
                    isActive
                      ? "bg-white text-slate-800 font-semibold"
                      : "text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
});

export default Header;
