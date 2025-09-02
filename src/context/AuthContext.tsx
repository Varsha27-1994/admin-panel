import React, { createContext, useState, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

// 👇 Correct createContext syntax
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // 👇 Correct useState syntax
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User): void => setUser(userData);
  const logout = (): void => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
  export type { AuthContextType, User };
