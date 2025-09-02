import React from "react";
import Layout from "../components/common/Layout.tsx";
import EmailTemplates from "../components/email/EmailTemplates.tsx";

const EmailConfiguration: React.FC = () => (
  <Layout>
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Email Configuration
      </h2>
      <EmailTemplates />
    </div>
  </Layout>
);

export default EmailConfiguration;
