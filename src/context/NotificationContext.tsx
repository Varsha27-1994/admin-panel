import React, { createContext, useState, ReactNode } from "react";

interface Notification {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  timestamp?: Date;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  clearNotifications: () => void;
  removeNotification: (id: string) => void;
}

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notificationData: Omit<Notification, 'id' | 'timestamp'>): void => {
    const newNotification: Notification = {
      ...notificationData,
      id: crypto.randomUUID(),
      timestamp: new Date()
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const clearNotifications = (): void => setNotifications([]);

  const removeNotification = (id: string): void => {
    setNotifications((prev) => prev.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider 
      value={{ 
        notifications, 
        addNotification, 
        clearNotifications, 
        removeNotification 
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook for using the context
const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
};

export { NotificationContext, NotificationProvider, useNotification };