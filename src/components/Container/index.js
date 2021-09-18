import React from "react";
import { Link } from "react-router-dom";

import { useTheme, themes } from "../../context/Theme";

import { ThemeContainer } from "./styles";

export default function Container({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeContainer
      style={{ background: theme.colors.background, color: theme.colors.text }}
    >
      {children}

      <h1>Title</h1>

      <button
        onClick={() => setTheme(theme.name === "dark" ? themes[1] : themes[0])}
      >
        Switch Theme
      </button>

      <Link to="/portfolio">Portfolio</Link>
    </ThemeContainer>
  );
}
