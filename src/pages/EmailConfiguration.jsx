import React from "react";
import Layout from "../components/common/Layout";
import EmailTemplates from "../components/email/EmailTemplates";

const EmailConfiguration = () => (
  <>
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Email Configuration</h2>
      <EmailTemplates />
    </div>
  </>
);

export default EmailConfiguration;