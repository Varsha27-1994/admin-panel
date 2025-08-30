// src/components/subscriptions/PlanCards.jsx
import React from "react";
import { CheckCircle2 } from "lucide-react";

const PlanCards = ({ plans, billing }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {plans.map((plan, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md border p-6 hover:shadow-lg transition"
      >
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
          <div className="mt-2 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-900">
              {plan.price === 0 ? "Free" : `$${plan.price.toFixed(2)}`}
            </span>
            {plan.extra && (
              <span className="ml-1 text-sm text-gray-500">{plan.extra}</span>
            )}
            {plan.name !== "Startup" && (
              <span className="text-gray-500 ml-1">
                /{billing === "monthly" ? "month" : "year"}
              </span>
            )}
          </div>
        </div>
        <div className="space-y-2 mb-6">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <CheckCircle2 className="text-green-500 w-4 h-4" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        <button className="w-full py-2 px-4 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700">
          {plan.name === "Startup" ? "Start Free Trial" : "Select Plan"}
        </button>
      </div>
    ))}
  </div>
);

export default PlanCards;
