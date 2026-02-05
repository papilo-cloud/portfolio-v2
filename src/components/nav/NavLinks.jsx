import { useTheme } from '../../hooks/useTheme';

export function NavLinks({children, links, isMobile}) {
  const { t } = useTheme();

  return (
    <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", gap: 28}}>
        {links.map((l) => (
            <a  key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                    fontSize: 13,
                    color: t.textAccent,
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: 0.3,
                    transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = t.accent}
                onMouseLeave={e => e.target.style.color = t.textAccent}>
                {l}
            </a>
        ))}
        {children}
    </div>
  )
}
