import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";
import { NavLinks } from "./NavLinks";

export function Nav() {
  const { t, mode, setMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);


  return (
    <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "14px 0",
        background: scrolled ? (mode === "dark" ? "rgba(13,14,18,0.85)" : "rgba(244,242,238,0.85)") : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${t.border}` : "1px solid transparent",
        transition: "all 0.3s",
    }}>
        <div style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px"
        }}>
            <span style={{ 
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 15,
                fontWeight: 600,
                color: t.accent
            }}>
                Abdul<span style={{ color: t.textMuted }}>/</span>
                <span style={{ color: t.codeFn }}>dev</span>
            </span>
            <NavLinks>
                <ThemeToggle onClick={() => setMode(mode === "dark" ? "light" : "dark")} />
            </NavLinks>
        </div>
    </nav>
  );
}