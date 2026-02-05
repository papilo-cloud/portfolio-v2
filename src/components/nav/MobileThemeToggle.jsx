import { useTheme } from '../../hooks/useTheme';

export function MobileThemeToggle({onClick}) {
  const { t, mode } = useTheme();
  return (
    <button 
        onClick={onClick}
        style={{
            background: t.bgCard,
            border: `1px solid ${t.border}`,
            borderRadius: 24,
            padding: "12px 32px",
            cursor: "pointer",
            fontSize: 14,
            fontFamily: "'IBM Plex Mono', monospace",
            color: t.text,
            display: "flex",
            alignItems: "center",
            gap: 10,
            transition: "all 0.2s",
        }}>
        <span style={{ fontSize: 18 }}>{mode === "dark" ? "🌙" : "☀️"}</span>
        <span>Switch to {mode === "dark" ? "Light" : "Dark"}</span>
    </button>
  )
}
