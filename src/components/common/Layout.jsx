import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar/Header visible everywhere */}
      <Header />
      <main className="px-6 py-2 mx-6">
        <Outlet /> {/* Renders child route content */}
      </main>
    </div>
  );
};

export default Layout;
