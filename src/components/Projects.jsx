import { useTheme } from "../hooks/useTheme";
import { useInView } from "../hooks/useView";
import { projects } from "../data/projects";
// import '../styles/section'

export function Projects() {
  const { t } = useTheme();
  const [ref, vis] = useInView();

  return (
    <section
      ref={ref}
      id="projects"
      style={{ padding: "110px 24px", maxWidth: 920, margin: "0 auto" }}>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: t.codeComment }}>
        {"// projects.filter(p => p.shipped)"}
      </span>
      <h2 style={{ 
        fontSize: 36, fontWeight: 800, letterSpacing: -1, 
        marginTop: 6, fontFamily: "'Syne', sans-serif", 
        animation: vis ? "fadeUp 0.6s both" : "none" }}>
          Projects
      </h2>
      <div style={{ display: "flex", flexDirection: "column",
        gap: 18, marginTop: 30 }}>
        {projects.map((p, i) => (
          <div 
            key={p.title} 
            style={{
              background: t.bgCard, border: `1px solid ${p.highlight ? t.accent : t.border}`,
              borderRadius: 14, padding: "26px 28px", position: "relative", overflow: "hidden",
              animation: vis ? `fadeUp 0.55s ${0.1 * i}s cubic-bezier(.22,1,.36,1) both` : "none",
              transition: "border-color 0.25s, transform 0.2s, box-shadow 0.25s",
            }}
            onMouseEnter={e =>
              { 
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 6px 30px ${t.accentGlow}`;
              }}
            onMouseLeave={e =>
              {
                e.currentTarget.style.borderColor = p.highlight ? t.accent : t.border;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
            {p.highlight && (
              <span style={{
                position: "absolute", top: 16, right: 18, fontSize: 10, 
                ontFamily: "'IBM Plex Mono', monospace",
                color: t.amber, background: `rgba(245,158,11,0.12)`, 
                border: `1px solid rgba(245,158,11,0.3)`,
                borderRadius: 5, padding: "3px 9px",
              }}>★ featured</span>
            )}
            <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>{p.title}</h3>
            <p style={{ color: t.textAccent, fontSize: 14, lineHeight: 1.7, marginTop: 8, maxWidth: 600 }}>{p.desc}</p>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", padding: "3px 10px", borderRadius: 5,
                  background: t.bgCode, border: `1px solid ${t.border}`, color: t.textAccent,
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}