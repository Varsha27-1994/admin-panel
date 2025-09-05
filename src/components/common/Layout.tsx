import React, { FC, memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import { useTheme } from "../../hooks/ThemeContext.tsx";

interface LayoutProps {}

const Layout: FC<LayoutProps> = memo(() => {
   const { colors } = useTheme();
  return (
    <div className="min-h-screen ">
     
        <Header />
     

      <main
        className="px-6 py-2  "
        style={{ backgroundColor: colors.secondary }}
      >
        <Outlet />
      </main>
    </div>
  );
});

export default Layout;
