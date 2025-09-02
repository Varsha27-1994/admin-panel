import React, { useState } from "react";
import { CheckCircle2, ArrowLeft, CreditCard, User } from "lucide-react";

interface Plan {
  name: string;
  price: number;
  unit: string;
  extra?: string;
  features: string[];
  description: string;
  includes: string[];
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  billingAddress: string;
}

const SubscriptionPlans: React.FC = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [currentStep, setCurrentStep] = useState<"plans" | "details" | "purchase">("plans");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
  });

  const plans: Plan[] = [
    {
      name: "Startup Plan",
      price: billing === "monthly" ? 49 : 49 * 12 * 0.8,
      unit: "/month",
      features: ["Basic Job Posting", "Email Support"],
      description: "For small startups and growing teams",
      includes: [
        "Up to 5 job postings/month",
        "Basic filtering",
        "Standard support",
      ],
    },
    {
      name: "Pro Plan",
      price: billing === "monthly" ? 99 : 99 * 12 * 0.8,
      unit: "/month",
      features: ["Advanced Analytics", "Custom Branding", "Priority Support"],
      description: "For businesses with regular hiring needs",
      includes: [
        "Unlimited postings",
        "Candidate matching",
        "Priority support",
      ],
    },
    {
      name: "Per User Plan",
      price: billing === "monthly" ? 19.99 : 19.99 * 12 * 0.8,
      unit: "/user",
      extra: "+ 2.99% CTC",
      features: ["Collaborative Hiring", "AI Matching"],
      description: "Scalable solution that grows with your team",
      includes: [
        "Per-user pricing",
        "AI-powered matching",
        "Collaboration tools",
      ],
    },
  ];

  const handleStartTrial = (plan: Plan) => {
    setSelectedPlan(plan);
    setCurrentStep("details");
  };

  const handleBack = () => {
    setCurrentStep(currentStep === "purchase" ? "details" : "plans");
    if (currentStep === "details") setSelectedPlan(null);
  };

  const handleFormChange = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handlePurchase = () => {
    alert("✅ Purchase completed successfully!");
    setCurrentStep("plans");
    setSelectedPlan(null);
  };

  /** ---- STEP: DETAILS ---- */
  if (currentStep === "details" && selectedPlan) {
    return (
      <div className="h-[90vh] flex flex-col bg-gray-50">
        <div className="p-3 bg-white border-b flex items-center shadow-sm">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border overflow-hidden flex flex-col">
            {/* Plan header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <h2 className="text-lg font-semibold">{selectedPlan.name}</h2>
              <p className="text-sm opacity-90">{selectedPlan.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-2xl font-bold">
                  ${selectedPlan.price.toFixed(2)}
                </span>
                <span className="text-xs">
                  {selectedPlan.unit} {selectedPlan.extra && selectedPlan.extra}
                </span>
              </div>
            </div>
            {/* Body */}
            <div className="p-5 flex-1 space-y-3">
              <h3 className="text-sm font-semibold">What’s included</h3>
              <div className="space-y-2">
                {selectedPlan.includes.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-gray-700 text-sm"
                  >
                    <CheckCircle2 className="text-green-500 w-4 h-4 mt-0.5" />{" "}
                    {f}
                  </div>
                ))}
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
                <strong>Free Trial:</strong> 14 days • No card required • Cancel
                anytime
              </div>
            </div>
            <button
              onClick={() => setCurrentStep("purchase")}
              className="m-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  /** ---- STEP: PURCHASE ---- */
  if (currentStep === "purchase" && selectedPlan) {
    return (
      <div className="h-[90vh] flex flex-col bg-gray-50">
        <div className="p-3 bg-white border-b flex items-center shadow-sm">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b">
              <h2 className="text-base font-semibold">Complete Purchase</h2>
              <p className="text-xs text-gray-600">
                {selectedPlan.name} – ${selectedPlan.price.toFixed(2)}{" "}
                {selectedPlan.unit}
              </p>
            </div>
            {/* Body */}
            <div className="flex-1 p-4 space-y-4 text-sm overflow-hidden">
              <div>
                <h3 className="font-medium flex items-center gap-1 mb-2">
                  <User className="w-4 h-4" /> Personal Info
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className="p-2 border rounded-lg text-xs"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleFormChange("firstName", e.target.value)
                    }
                  />
                  <input
                    className="p-2 border rounded-lg text-xs"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleFormChange("lastName", e.target.value)
                    }
                  />
                  <input
                    className="p-2 border rounded-lg text-xs col-span-2"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleFormChange("email", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium flex items-center gap-1 mb-2">
                  <CreditCard className="w-4 h-4" /> Payment Info
                </h3>
                <input
                  className="p-2 border rounded-lg text-xs w-full mb-2"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    handleFormChange("cardNumber", e.target.value)
                  }
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className="p-2 border rounded-lg text-xs"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) =>
                      handleFormChange("expiryDate", e.target.value)
                    }
                  />
                  <input
                    className="p-2 border rounded-lg text-xs"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={(e) => handleFormChange("cvv", e.target.value)}
                  />
                </div>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg text-xs">
                <div className="flex justify-between">
                  <span>{selectedPlan.name}</span>
                  <span className="font-semibold">
                    ${selectedPlan.price.toFixed(2)}
                  </span>
                </div>
                {billing === "annual" && (
                  <p className="text-green-600 mt-1">
                    ✓ 20% annual discount applied
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={handlePurchase}
              className="m-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    );
  }

  /** ---- STEP: PLANS ---- */
  return (
    <div className="h-[87vh] flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Choose Your Plan
        </h2>
        {/* <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg">
          New Plan
        </button> */}
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-3">
          <span
            className={`cursor-pointer text-lg ${
              billing === "monthly"
                ? "font-semibold text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </span>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={billing === "annual"}
              onChange={() =>
                setBilling(billing === "monthly" ? "annual" : "monthly")
              }
              className="sr-only peer"
            />
            <div className="w-8 h-4 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full shadow peer-checked:translate-x-4 transition"></div>
          </label>
          <span
            className={`cursor-pointer text-lg ${
              billing === "annual"
                ? "font-semibold text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setBilling("annual")}
          >
            Annual
          </span>
          {billing === "annual" && (
            <span className="text-lg text-green-600 font-medium">Save 20%</span>
          )}
        </div>

        {/* Plans */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white max-h-[350px] rounded-xl border shadow-md hover:shadow-lg transition flex flex-col"
            >
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold">
                    ${plan.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {plan.unit}
                    {plan.extra && ` ${plan.extra}`}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 space-y-2">
                {plan.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-gray-700"
                  >
                    <CheckCircle2 className="text-green-500 w-4 h-4 mt-0.5" />{" "}
                    {f}
                  </div>
                ))}
              </div>
              <div className="p-4 pt-0">
                <button
                  onClick={() => handleStartTrial(plan)}
                  className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg"
                >
                  Start Trial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;