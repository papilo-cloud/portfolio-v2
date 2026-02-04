import { useTheme } from "../hooks/useTheme";
import { useInView } from "../hooks/useView";

export function Hero() {
  const { t } = useTheme();
  const [ref, vis] = useInView(0.1);

  return (
    <section
        ref={ref}
        id="hero"
        style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center", 
            justifyContent: "center", 
            padding: "120px 24px 80px", 
            position: "relative", 
            overflow: "hidden" 
            }}>
        {/* Ambient blobs */}
        <div style={{ 
            position: "absolute",
            width: 520, 
            height: 520, 
            borderRadius: "50%", 
            background: `radial-gradient(circle, ${t.accentGlow} 0%, transparent 70%)`, 
            top: "10%", 
            left: "-10%", 
            pointerEvents: "none", 
            filter: "blur(40px)" }}/>
        <div style={{ 
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: "50%", 
            background: `radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)`,
            bottom: "5%",
            right: "-8%",
            pointerEvents: "none",
            filter: "blur(40px)"
            }}/>
        <div style={{ maxWidth: 780, textAlign: "left", position: "relative", zIndex: 1 }}>
            {/* Terminal label */}
            <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7, 
                background: t.bgCode, 
                border: `1px solid ${t.border}`,
                borderRadius: 8, 
                padding: "6px 14px", 
                marginBottom: 28, 
                fontFamily: "'IBM Plex Mono', monospace", 
                fontSize: 12,
                }}>
                <span style={{ color: "#ef4444", fontSize: 8 }}>●</span>
                <span style={{ color: "#f59e0b", fontSize: 8 }}>●</span>
                <span style={{ color: "#34d399", fontSize: 8 }}>●</span>
                <span style={{ color: t.codeComment, marginLeft: 6 }}>{"// Abdul's portfolio — initializing..."}</span>
                <span style={{ color: t.accent, animation: "blink 1.1s step-end infinite" }}>█</span>
        </div>

        <h1 style={{
            fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: -2,
            animation: vis ? "fadeUp 0.7s cubic-bezier(.22,1,.36,1) both" : "none",
            fontFamily: "'Syne', sans-serif",}}>
            <span style={{ color: t.text }}>Building </span>
            <span style={{ color: t.accent }}>secure</span>
            <span style={{ color: t.text }}> Web3</span><br />
            <span style={{ color: t.text }}>infrastructure.</span>
        </h1>

        <p style={{
            marginTop: 24, fontSize: 17, lineHeight: 1.7, color: t.textAccent, maxWidth: 560,
            animation: vis ? "fadeUp 0.7s 0.12s cubic-bezier(.22,1,.36,1) both" : "none",
            fontFamily: "'Syne', sans-serif",
        }}>
            Web3 security engineer with 3 years in frontend and a deep 
            focus on DeFi protocol safety. I audit smart contracts, build 
            developer tools, and write about the internals.
        </p>

        <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap", 
            animation: vis ? "fadeUp 0.7s 0.24s cubic-bezier(.22,1,.36,1) both" : "none" }}>
            <a href="#projects" style={{
                display: "inline-block", padding: "11px 28px", 
                borderRadius: 8, background: t.accent, 
                color: "#fff", fontFamily: "'IBM Plex Mono', monospace", 
                fontSize: 13, fontWeight: 600, 
                transition: "opacity 0.2s, transform 0.15s",
            }} 
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.88";
                    e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; 
                    e.currentTarget.style.transform = "translateY(0)"; 
                }}>
                View Work →
            </a>
            <a href="#blog" style={{
                display: "inline-block", padding: "11px 28px", 
                borderRadius: 8, border: `1px solid ${t.border}`, 
                color: t.text, fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 13, fontWeight: 500, background: t.bgCard,
                transition: "border-color 0.2s, transform 0.15s",
            }} 
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; 
                    e.currentTarget.style.transform = "translateY(-1px)"; 
                }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; 
                    e.currentTarget.style.transform = "translateY(0)"; 
                }}>
                Read Blog
            </a>
        </div>
      </div>
    </section>
  );
}