import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/common/Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import CompanyManagement from "./pages/CompanyManagement";
import UserManagement from "./pages/UserManagement";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import Reports from "./pages/Reports";
import SystemSettings from "./pages/SystemSettings";
import EmailConfiguration from "./pages/EmailConfiguration";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CompanyForm from "./pages/CompanyForm";

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<CompanyManagement />} />
        <Route path="/companies/add" element={<CompanyForm />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/subscriptions" element={<SubscriptionPlans />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<SystemSettings />} />
        <Route path="/email" element={<EmailConfiguration />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
