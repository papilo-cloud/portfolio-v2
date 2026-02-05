import { useTheme } from '../../hooks/useTheme';

export function MobileMenuOverlay({links, mobileOpen, handleLinkClick, children, isMobile}) {
    const { t, mode } = useTheme();
  return (
    <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: mode === "dark" ? "rgba(13,14,18,0.97)" : "rgba(244,242,238,0.97)",
        backdropFilter: "blur(12px)",
        zIndex: 99,
        display: mobileOpen && isMobile ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: "80px 24px 24px",
      }}>
        {/* Mobile Links */}
        {links.map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={handleLinkClick}
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: t.text,
              fontFamily: "'Syne', sans-serif",
              textDecoration: "none",
              transition: "color 0.2s, transform 0.2s",
              animation: mobileOpen ? `fadeIn 0.4s ${i * 0.08}s cubic-bezier(.22,1,.36,1) both` : "none",
            }}
            onMouseEnter={e => {
              e.target.style.color = t.accent;
              e.target.style.transform = "translateX(8px)";
            }}
            onMouseLeave={e => {
              e.target.style.color = t.text;
              e.target.style.transform = "translateX(0)";
            }}
          >
            {l}
          </a>
        ))}

        {/* Mobile Theme Toggle */}
        <div style={{ 
          marginTop: 24,
          animation: mobileOpen ? `fadeIn 0.4s ${links.length * 0.08}s cubic-bezier(.22,1,.36,1) both` : "none",
        }}>
            {children}
        </div>
      </div>
  )
}
