import React, { FC, memo, useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/ThemeContext.tsx";

interface NavItem {
  id: string;
  label: string;
}

interface UserNavItem {
  name: string;
  href: string;
}

interface HeaderProps {}

const Header: FC<HeaderProps> = memo(() => {
   const { colors } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSettingsSubmenuOpen, setIsSettingsSubmenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock user name - replace with actual user data
  const userName = "Admin User";

  const navItems = [
    { id: "companies", label: "Profile" },
    // { id: "users", label: "User & Role Management" },
    { id: "subscriptions", label: "Subscription Plans" },
    { id: "reports", label: "Reporting" },
    // { id: "settings", label: "System Settings" },
    // { id: "email", label: "Email Configuration" },
  ];

  const userNavigation: UserNavItem[] = [
    { name: "Your Profile", href: "/profile" },
    // { name: "Settings", href: "" },
    { name: "Sign out", href: "/login" },
  ];

  const settingsSubmenu = [
    { name: "General Settings", href: "/themesettings" },
  ];

  const getPathFromId = (id: string) => `/${id}`;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
        setIsSettingsSubmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsSettingsSubmenuOpen(false); // Close settings submenu when opening/closing profile dropdown
  };

  const handleNavItemClick = (href: string, itemName: string) => {
    if (itemName === "Settings") {
      setIsSettingsSubmenuOpen(!isSettingsSubmenuOpen);
    } else if (href) {
      navigate(href);
      setIsProfileDropdownOpen(false);
      setIsSettingsSubmenuOpen(false);
    }
  };

  const handleSettingsSubmenuClick = (href: string) => {
    navigate(href);
    setIsProfileDropdownOpen(false);
    setIsSettingsSubmenuOpen(false);
  };

  return (
    <header className=" text-white shadow-sm relative">
      <div
        className="max-w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
        style={{ backgroundColor: colors.primary }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1
            onClick={() => navigate("/")}
            className=" text-sm font-medium text-white cursor-pointer whitespace-nowrap"
          >
            Voire AI
          </h1>

          {/* Desktop Nav - matching MainLayout style */}
          <div className="hidden md:flex md:space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === getPathFromId(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(getPathFromId(item.id))}
                  className={`${
                    isActive
                      ? "relative bg-gray-100 text-[#0F2546]"
                      : "text-white hover:text-gray-200"
                  }  rounded-t-3xl   text-sm font-medium mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 sm:py-6 lg:py-8 h-full`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleProfileClick}
              className="flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F2F4A]"
            >
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  userName
                )}`}
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
                <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                  Hello, {userName}
                </div>
                {userNavigation.map((link: UserNavItem) => (
                  <div key={link.name}>
                    <button
                      onClick={() => handleNavItemClick(link.href, link.name)}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 ${
                        link.name === "Settings"
                          ? "flex items-center justify-between"
                          : ""
                      }`}
                    >
                      {link.name}
                      {link.name === "Settings" && (
                        <span className="text-gray-400">
                          {isSettingsSubmenuOpen ? "▲" : "▼"}
                        </span>
                      )}
                    </button>

                    {/* Settings Submenu - Now opens downward */}
                    {link.name === "Settings" && isSettingsSubmenuOpen && (
                      <div className="bg-gray-50 border-t border-gray-200">
                        {settingsSubmenu.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() =>
                              handleSettingsSubmenuClick(subItem.href)
                            }
                            className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white inline-flex items-center justify-center rounded-md p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - matching MainLayout mobile style */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navItems.map((item) => {
              const isActive = location.pathname === getPathFromId(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(getPathFromId(item.id));
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    isActive
                      ? "bg-white text-[#0F2546]"
                      : "text-white hover:bg-white/10"
                  } block rounded-md px-3 py-2 text-base font-medium w-full text-left`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
});

export default Header;
