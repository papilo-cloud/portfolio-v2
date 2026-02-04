import { useTheme } from '../../hooks/useTheme';

export function BlogPostHeader({post, handleNavigate}) {
    const { t } = useTheme();
    
  return (
    <div style={{ padding: "22px 24px", cursor: "pointer", 
        display: "flex", justifyContent: "space-between", 
        alignItems: "flex-start", gap: 16 }}
        onClick={handleNavigate}>
        <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, color: t.codeComment, fontFamily: "'IBM Plex Mono', monospace" }}>
                    {post.date}
                </span>
                <span style={{ fontSize: 11, color: t.textMuted, fontFamily: "'IBM Plex Mono', monospace" }}>·</span>
                <span style={{ fontSize: 11, color: t.codeFn, fontFamily: "'IBM Plex Mono', monospace" }}>
                    {post.readTime}
                </span>
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 700, fontFamily: "'Syne', sans-serif", marginTop: 6 }}>
                {post.title}
            </h3>
            <p style={{ fontSize: 13, color: t.textAccent, marginTop: 4 }}>
                {post.subtitle}
            </p>
            <div style={{ display: "flex", gap: 7, marginTop: 10, flexWrap: "wrap" }}>
                {post.tags.map(tag => (
                    <span key={tag} style={{
                        fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: "2px 9px", borderRadius: 4,
                        background: tag === "Security" ? `rgba(239,68,68,0.1)` : tag === "DeFi" || tag === "Uniswap" ? `rgba(129,140,248,0.1)` : `rgba(52,211,153,0.1)`,
                        color: tag === "Security" ? t.red : tag === "DeFi" || tag === "Uniswap" ? t.accent : t.green,
                        border: `1px solid ${tag === "Security" ? "rgba(239,68,68,0.25)" : tag === "DeFi" || tag === "Uniswap" ? "rgba(129,140,248,0.25)" : "rgba(52,211,153,0.25)"}`,
                    }}>{tag}</span>
                ))}
            </div>
        </div>
        {/* Chevron */}
    </div>
  )
}
