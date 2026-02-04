import { useTheme } from '../../hooks/useTheme';

export function CodeBlock({sec}) {
    const { t } = useTheme();
    
  return (
    <div style={{ padding: "16px 20px", background: t.bgCode, borderBottom: `1px solid ${t.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399" }} />
        </div>
        <pre style={{
                fontSize: 13, lineHeight: 1.75, color: t.textAccent, fontFamily: "'IBM Plex Mono', monospace",
                whiteSpace: "pre-wrap", wordBreak: "break-all", margin: 0
        }}>
            {sec.code.split("\n").map((line, li) => {
                if (line.trimStart().startsWith("//")) return
                    <span key={li} style={{ color: t.codeComment }}>{line}{"\n"}</span>;
                    return <span key={li}>{line}{"\n"}</span>;
            })}
        </pre>
    </div>
  )
}
