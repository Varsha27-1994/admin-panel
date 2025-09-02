import React, { FC, memo, MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: FC<ButtonProps> = memo(
  ({
    children = "Default button",
    onClick = () => {},
    variant = "primary",
    className = "",
  }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium focus:outline-none";
    const variantStyles: Record<string, string> = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    };

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {typeof children === "string" ? children : children}
      </button>
    );
  }
);

export default Button;
