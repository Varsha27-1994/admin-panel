import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium focus:outline-none";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;