import { useTheme } from "../../hooks/useTheme";

export function Hamburger({onClick, mobileOpen, isMobile}) {
    const { t } = useTheme();

  return (
    <button
        onClick={onClick}
        style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            flexDirection: "column",
            gap: 5,
            zIndex: 101,
            display: isMobile ? "flex" : "none"
        }}
        aria-label="Toggle menu">
        <span style={{
            width: 24,
            height: 2,
            background: t.text,
            borderRadius: 2,
            transition: "all 0.3s",
            transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "rotate(0)",
        }} />
        <span style={{
            width: 24,
            height: 2,
            background: t.text,
            borderRadius: 2,
            transition: "all 0.3s",
            opacity: mobileOpen ? 0 : 1,
        }} />
        <span style={{
            width: 24,
            height: 2,
            background: t.text,
            borderRadius: 2,
            transition: "all 0.3s",
            transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "rotate(0)",
        }} />
    </button>
  )
}
