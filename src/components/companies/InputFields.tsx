import React from "react";
import { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  ...props
}) => (
  <div>
    <label className="block text-xs font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
  </div>
);

export default InputField;
