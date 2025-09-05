// src/contexts/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface ThemeColors {
  primary: string;
  secondary: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  updateColors: (newColors: Partial<ThemeColors>) => void;
  resetToDefault: () => void;
}

const defaultColors: ThemeColors = {
  primary: "#1F2F4A", // Default nav color
  secondary: "#F3F4F6", // Default main content color (gray-100)
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colors, setColors] = useState<ThemeColors>(defaultColors);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      try {
        const parsedTheme = JSON.parse(savedTheme);
        setColors({ ...defaultColors, ...parsedTheme });
      } catch (error) {
        console.error("Error parsing saved theme:", error);
      }
    }
  }, []);

  // Save theme to localStorage whenever colors change
  useEffect(() => {
    localStorage.setItem("app-theme", JSON.stringify(colors));
  }, [colors]);

  const updateColors = (newColors: Partial<ThemeColors>) => {
    setColors((prev) => ({ ...prev, ...newColors }));
  };

  const resetToDefault = () => {
    setColors(defaultColors);
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColors, resetToDefault }}>
      {children}
    </ThemeContext.Provider>
  );
};
