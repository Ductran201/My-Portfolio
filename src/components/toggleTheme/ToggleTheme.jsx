import React from "react";
import "./toggleTheme.css";
import { useEffect } from "react";
import { useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // useEffect(() => {}, [theme]);
  return (
    <>
      <button
        className={`theme-btn ${theme === "dark" ? "activeTheme" : ""}`}
        onClick={handleTheme}
      >
        <span>
          <TipsAndUpdatesIcon />
        </span>
        <span>
          <DarkModeIcon />
        </span>
      </button>
    </>
  );
}
