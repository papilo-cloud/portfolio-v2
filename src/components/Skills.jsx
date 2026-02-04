import { skills } from "../data/skills";
import { useTheme } from "../hooks/useTheme";
import { useInView } from "../hooks/useView";

export function Skills() {
  const { t } = useTheme();
  const [ref, vis] = useInView();
  const cats = [...new Set(skills.map(s => s.cat))];
  return (
    <section
        ref={ref} 
        id="skills" 
        style={{ padding: "100px 24px", background: t.bgElevated, transition: "background 0.35s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: t.codeComment }}>
                {"// skills.map(s => <Badge />)"}
            </span>
            <h2 style={{ 
                    fontSize: 36, 
                    fontWeight: 800, 
                    letterSpacing: -1, 
                    marginTop: 6, 
                    fontFamily: "'Syne', sans-serif", 
                    animation: vis ? "fadeUp 0.6s both" : "none" 
                }}>
                Tech Stack
            </h2>

            {cats.map((cat, ci) => (
                <div key={cat} style={{ marginTop: 34 }}>
                    <div 
                        style={{ 
                            fontSize: 11, color: t.codeComment, 
                            fontFamily: "'IBM Plex Mono', monospace", 
                            marginBottom: 10, textTransform: "uppercase", 
                            letterSpacing: 1.2 
                        }}>
                        <span style={{ color: t.codeKeyword }}>const </span> 
                        {cat.toLowerCase().replace(/\s/g, "")} = [ 
                    </div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        {skills.filter(s => s.cat === cat).map((s, i) => (
                            <div 
                                key={s.name} 
                                style={{
                                    background: t.bgCard, border: `1px solid ${t.border}`,
                                    borderRadius: 10, padding: "14px 20px", display: "flex",
                                    alignItems: "center", gap: 10, 
                                    animation: vis ? `fadeUp 0.5s ${0.06 * (ci * 3 + i)}s cubic-bezier(.22,1,.36,1) both` : "none",
                                    transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                                }}
                                onMouseEnter={e => 
                                    {   
                                        e.currentTarget.style.borderColor = t.accent; 
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = `0 4px 20px ${t.accentGlow}`; 
                                    }
                                }
                                onMouseLeave={e => 
                                    {
                                        e.currentTarget.style.borderColor = t.border;
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none"; 
                                    }
                                }>
                            <span style={{ fontSize: 18, color: t.accent }}>{s.icon}</span>
                            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, fontWeight: 500 }}>
                                {s.name}
                            </span>
                    </div>
                ))}
                </div>
                <div style={{
                        fontSize: 11, color: t.codeComment,
                        fontFamily: "'IBM Plex Mono', monospace", 
                        marginTop: 8 
                        }}>
                    ];
                </div>
            </div>
            ))}
        </div>
    </section>
  );
}