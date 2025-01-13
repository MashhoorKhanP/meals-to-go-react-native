import React, { createContext, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext({
    theme: "light" as "light" | "dark", // Default theme
    toggleTheme: () => {}, // Default function
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState(systemTheme || "light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
