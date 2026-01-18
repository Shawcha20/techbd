"use client";

import { useEffect } from "react";

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", media.matches);
    };

    applyTheme(); 
    media.addEventListener("change", applyTheme);

    return () => media.removeEventListener("change", applyTheme);
  }, []);

  return children;
}
