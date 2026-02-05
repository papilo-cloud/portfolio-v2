import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";
import { NavLinks } from "./NavLinks";
import { Hamburger } from "./Hamburger";
import { MobileMenuOverlay } from "./MobileMenuOverlay";
import { MobileThemeToggle } from "./MobileThemeToggle";

export function Nav() {
  const { t, mode, setMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const links = ["About", "Skills", "Projects", "Blog", "Contact"];
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  }

  const handleModeToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <>
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            padding: "14px 0",
            background: scrolled ? (mode === "dark" ? "rgba(13,14,18,0.85)" : "rgba(244,242,238,0.85)") : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? `1px solid ${t.border}` : "1px solid transparent",
            transition: "all 0.3s",}}>
            
            <div style={{
                maxWidth: 1100,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px"}}>

                <a href="/" 
                    style={{ 
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 15,
                        fontWeight: 600,
                        color: t.accent,
                        textDecoration: "none",
                    }}>
                    Abdul<span style={{ color: t.textMuted }}>/</span>
                    <span style={{ color: t.codeFn }}>dev</span>
                </a>
                <NavLinks links={links} isMobile={isMobile}>
                    <ThemeToggle onClick={handleModeToggle} />
                </NavLinks>
                <Hamburger onClick={() => setMenuOpen(!menuOpen)} mobileOpen={menuOpen} isMobile={isMobile} />
            </div>
        </nav>
        {/* Mobile Menu */}
        {menuOpen && (
            <MobileMenuOverlay links={links} mobileOpen={menuOpen} handleLinkClick={handleLinkClick} isMobile={isMobile}>
                <MobileThemeToggle onClick={handleModeToggle} />
            </MobileMenuOverlay>
        )}
    </>
  );
}