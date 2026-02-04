import { useTheme } from '../../hooks/useTheme';

export function ContactConfirmed({handleResend}) {

    const { t } = useTheme();
    
  return (
    <div style={{
            marginTop: 30, background: `rgba(52,211,153,0.08)`, border: `1px solid rgba(52,211,153,0.3)`,
            borderRadius: 12, padding: "28px 24px", textAlign: "center",
        }}>
        <div style={{ fontSize: 28 }}>✉️</div>
        <p style={{ color: t.codeFn, fontWeight: 700, marginTop: 8, fontFamily: "'Syne', sans-serif" }}>
            Message sent!
        </p>
        <p style={{ color: t.textMuted, fontSize: 13, marginTop: 4, fontFamily: "'IBM Plex Mono', monospace" }}>
            I'll get back to you shortly.
        </p>
        <button 
            onClick={handleResend} 
            style={{
                marginTop: 14, background: "none", border: `1px solid ${t.border}`,
                borderRadius: 6, padding: "6px 16px", color: t.textAccent,
                cursor: "pointer", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace",
            }}>
            Send another
        </button>
    </div>
  )
}
