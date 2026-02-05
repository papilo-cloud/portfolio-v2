import { useTheme } from "../hooks/useTheme";

export function Footer() {
  const { t } = useTheme();

  const socials = ["GitHub", "Twitter", "LinkedIn"];
  const socialLink = ["https://github.com/papilo-cloud", "https://x.com/Abdulra75754192", "https://www.linkedin.com/in/abdulrahman-badamasi-a6aab6232"]

  return (
    <footer style={{ borderTop: `1px solid ${t.border}`, padding: "28px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 14, flexWrap: "wrap" }}>
            {socials.map((link, idx) => (
                <span 
                    key={link} 
                    style={{ 
                        fontSize: 13, color: t.textMuted,
                        fontFamily: "'IBM Plex Mono', monospace", 
                        cursor: "pointer", transition: "color 0.2s" 
                    }}
                    onMouseEnter={e => e.target.style.color = t.accent} 
                    onMouseLeave={e => e.target.style.color = t.textMuted}>
                    
                    <a href={socialLink[idx]} target="_">{link}</a>
                </span>
            ))}
        </div>
        <p style={{ fontSize: 11, color: t.textMuted, fontFamily: "'IBM Plex Mono', monospace" }}>
            © 2025 Abdul — Built with React. Secured with intent 💖.
        </p>
    </footer>
  );
}