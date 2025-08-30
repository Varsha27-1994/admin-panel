// src/components/common/Input.jsx
import React from "react";
import { cn } from "../../utils/helpers";

const Input = ({ label, error, icon: Icon, className, ...props }) => {
  return (
    <div className="space-y-1 w-full">
      {label && (
        <label className="block text-sm font-medium text-[#1f2f4a]">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        )}
        <input
          className={cn(
            "w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1f2f4a] focus:border-[#1f2f4a] transition",
            Icon && "pl-10",
            error && "border-red-300 focus:ring-red-500",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
