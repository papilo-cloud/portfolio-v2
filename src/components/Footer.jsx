import { useTheme } from "../hooks/useTheme";

export function Footer() {
  const { t } = useTheme();

  const socials = ["GitHub", "Twitter", "LinkedIn"];

  return (
    <footer style={{ borderTop: `1px solid ${t.border}`, padding: "28px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 14, flexWrap: "wrap" }}>
            {socials.map(link => (
                <span 
                    key={link} 
                    style={{ 
                        fontSize: 13, color: t.textMuted,
                        fontFamily: "'IBM Plex Mono', monospace", 
                        cursor: "pointer", transition: "color 0.2s" 
                    }}
                    onMouseEnter={e => e.target.style.color = t.accent} 
                    onMouseLeave={e => e.target.style.color = t.textMuted}>
                    {link}
                </span>
            ))}
        </div>
        <p style={{ fontSize: 11, color: t.textMuted, fontFamily: "'IBM Plex Mono', monospace" }}>
            © 2025 Abdul — Built with React. Secured with intent 💖.
        </p>
    </footer>
  );
}