import React from "react";
import { NotificationProvider } from "./context/NotificationContext.tsx";
import AppRoutes from "./routes.tsx";

const App: React.FC = () => (
  <NotificationProvider>
    <AppRoutes />
  </NotificationProvider>
);

export default App;
