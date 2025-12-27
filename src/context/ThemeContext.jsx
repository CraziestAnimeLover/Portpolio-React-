import React, { createContext, useContext, useState } from "react";

const gradients = [
  "bg-gradient-to-r from-gray-800 to-gray-900",
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  "bg-gradient-to-r from-emerald-500 to-teal-600",
  "bg-gradient-to-r from-orange-500 to-rose-500",
  "bg-gradient-to-r from-sky-500 to-indigo-600",
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentGradient, setCurrentGradient] = useState(gradients[0]);

  return (
    <ThemeContext.Provider
      value={{ currentGradient, setCurrentGradient, gradients }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
