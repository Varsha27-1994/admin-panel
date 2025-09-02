import React, { FC, memo, ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = memo(({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}
    >
      {children}
    </div>
  );
});

export default Card;
