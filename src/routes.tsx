import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout.tsx";

// Pages
import Dashboard from "./pages/Dashboard.tsx";
import CompanyManagement from "./pages/CompanyManagement.tsx";
import SubscriptionPlans from "./pages/SubscriptionPlans.tsx";
import Reports from "./pages/Reports.tsx";
import SystemSettings from "./pages/SystemSettings.tsx";
import EmailConfiguration from "./pages/EmailConfiguration.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";
import CompanyForm from "./pages/CompanyForm.tsx";
import ThemeSettings from "./components/Theme/ThemeSettings.tsx";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<CompanyManagement />} />
        <Route path="/companies/add" element={<CompanyForm />} />
        {/* <Route path="/users" element={<UserManagement />} /> */}
        <Route path="/subscriptions" element={<SubscriptionPlans />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<SystemSettings />} />
        <Route path="/email" element={<EmailConfiguration />} />
        <Route path="/themesettings" element={<ThemeSettings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
