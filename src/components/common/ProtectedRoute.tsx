import React, { FC, memo, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = memo(({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
});

export default ProtectedRoute;
