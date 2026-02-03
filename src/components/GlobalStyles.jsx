import { useTheme } from "../hooks/useTheme";

// Cursor blink animation via keyframes injected once
export function GlobalStyles() {
  const { t } = useTheme();
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
      @keyframes fadeIn { from{opacity:0} to{opacity:1} }
      @keyframes glow { 0%,100%{box-shadow:0 0 12px ${t.accentGlow}} 50%{box-shadow:0 0 28px ${t.accentGlow}} }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { font-family: 'Syne', sans-serif; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: ${t.bg}; }
      ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 3px; }
      a { color: inherit; text-decoration: none; }
    `}</style>
  );
}