import { createContext, useState } from "react";

export const ThemeContext = createContext();

const themes = {
  dark: {
    bg: "#0d0e12",
    bgElevated: "#111318",
    bgCard: "#161822",
    bgCode: "#0a0c11",
    border: "#1e2130",
    borderHover: "#2e3248",
    text: "#e2e4e9",
    textMuted: "#6b7088",
    textAccent: "#a8aab8",
    accent: "#818cf8",       // indigo
    accentGlow: "rgba(129,140,248,0.18)",
    green: "#34d399",
    amber: "#f59e0b",
    red: "#ef4444",
    codeComment: "#5a5f73",
    codeString: "#a78bfa",
    codeKeyword: "#818cf8",
    codeFn: "#34d399",
  },
  light: {
    bg: "#f4f2ee",
    bgElevated: "#faf9f6",
    bgCard: "#ffffff",
    bgCode: "#f0eff0",
    border: "#dddad4",
    borderHover: "#c8c4bc",
    text: "#1a1b1e",
    textMuted: "#7a7a80",
    textAccent: "#4a4a52",
    accent: "#4f46e5",
    accentGlow: "rgba(79,70,229,0.12)",
    green: "#059669",
    amber: "#d97706",
    red: "#dc2626",
    codeComment: "#7a7a80",
    codeString: "#7c3aed",
    codeKeyword: "#4f46e5",
    codeFn: "#059669",
  },
};

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const t = themes[mode];
  return (
    <ThemeContext.Provider value={{ t, mode, setMode }}>
      <div style={
        {
            background: t.bg,
            color: t.text,
            minHeight: "100vh",
            transition: "background 0.35s, color 0.35s" 
        }
      }>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}