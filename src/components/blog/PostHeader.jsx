import { useTheme } from '../../hooks/useTheme';

export function PostHeader({post}) {
    const { t } = useTheme();
    
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 11, color: t.codeComment, fontFamily: "'IBM Plex Mono', monospace" }}>
                {post.date}
            </span>
            <span style={{ fontSize: 11, color: t.textMuted }}>·</span>
            <span style={{ fontSize: 11, color: t.codeFn, fontFamily: "'IBM Plex Mono', monospace" }}>
                {post.readTime}
            </span>
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, 
            letterSpacing: -1.5, fontFamily: "'Syne', sans-serif", 
            marginBottom: 12 }}>
            {post.title}
        </h1>
        <p style={{ fontSize: 17, color: t.textAccent, fontFamily: "'Syne', sans-serif" }}>
            {post.subtitle}
        </p>

        <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <span key={tag} 
                style={{
                    fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", padding: "4px 12px", borderRadius: 6,
                    background: tag === "Security" ? `rgba(239,68,68,0.1)` : tag === "DeFi" || tag === "Uniswap" ? `rgba(129,140,248,0.1)` : `rgba(52,211,153,0.1)`,
                    color: tag === "Security" ? t.red : tag === "DeFi" || tag === "Uniswap" ? t.accent : t.green,
                    border: `1px solid ${tag === "Security" ? "rgba(239,68,68,0.25)" : tag === "DeFi" || tag === "Uniswap" ? "rgba(129,140,248,0.25)" : "rgba(52,211,153,0.25)"}`,
                }}>
                {tag}
            </span>
          ))}
        </div>
    </div>
  )
}
