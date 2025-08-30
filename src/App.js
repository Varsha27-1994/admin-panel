// import React from "react";
// import { AuthProvider } from "./context/AuthContext";
// import { NotificationProvider } from "./context/NotificationContext";
// import AppRoutes from "./routes";

// const App = () => (
//   <AuthProvider>
//     <NotificationProvider>
//       <AppRoutes />
//     </NotificationProvider>
//   </AuthProvider>
// );

// export default App;
import React from "react";
import { NotificationProvider } from "./context/NotificationContext";
import AppRoutes from "./routes";

const App = () => (
  <NotificationProvider>
    <AppRoutes />
  </NotificationProvider>
);

export default App;