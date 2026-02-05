import { useInView } from '../hooks/useView';
import { useTheme } from '../hooks/useTheme';

export default function Stats() {
    const [ref, vis] = useInView();
    const {t} = useTheme();
    
    const stats = [
        { val: "3+", label: "Years Building" },
        { val: "20+", label: "Contracts Written" },
        { val: "6", label: "Audits Completed" },
    ];

  return (
    <div style={{ flex: "0 0 auto", display: "flex", gap: 16, 
        animation: vis ? "fadeUp 0.6s 0.15s cubic-bezier(.22,1,.36,1) both" : "none" }}>
        {stats.map((s) => (
            <div key={s.label} 
                style={{
                    background: t.bgCard,
                    border: `1px solid ${t.border}`,
                    borderRadius: 14,
                    padding: "24px 22px",
                    width: 130,
                    textAlign: "center",
                    transition: "border-color 0.2s, transform 0.2s",
                }} 
                onMouseEnter={e => 
                    { e.currentTarget.style.borderColor = t.accent; 
                        e.currentTarget.style.transform = "translateY(-3px)"; 
                }}
                onMouseLeave={e => 
                    { e.currentTarget.style.borderColor = t.border; 
                    e.currentTarget.style.transform = "translateY(0)"; 
                }}>
                <div style={{ 
                    fontSize: 32, 
                    fontWeight: 800, 
                    color: t.accent, 
                    fontFamily: "'Syne', sans-serif" 
                    }}>
                    {s.val}
                </div>
                <div style={{ 
                    fontSize: 11,
                    color: t.textMuted,
                    fontFamily: "'IBM Plex Mono', monospace",
                    marginTop: 4 }}>
                    {s.label}
                </div>
            </div>
        ))}
    </div>
  )
}
