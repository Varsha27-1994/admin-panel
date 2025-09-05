import React from "react";
import { NotificationProvider } from "./context/NotificationContext.tsx";
import AppRoutes from "./routes.tsx";
import { ThemeProvider } from "./hooks/ThemeContext.tsx";

const App: React.FC = () => (
  <ThemeProvider>
    <NotificationProvider>
      <AppRoutes />
    </NotificationProvider>
  </ThemeProvider>
);

export default App;
