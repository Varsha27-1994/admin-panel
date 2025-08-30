import React, { createContext, useState } from "react";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => setNotifications((prev) => [...prev, message]);
  const clearNotifications = () => setNotifications([]);

  return <NotificationContext.Provider value={{ notifications, addNotification, clearNotifications }}>{children}</NotificationContext.Provider>;
};

export { NotificationContext, NotificationProvider };