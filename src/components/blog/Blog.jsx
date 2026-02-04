import { useInView } from "../../hooks/useView";
import { useTheme } from "../../hooks/useTheme";
import {blogPosts} from '../../data/blogPosts'
import { useNavigate } from "react-router-dom";
import { BlogPostHeader } from "./BlogPostHeader";

export function Blog() {
  const { t } = useTheme();
  const [ref, vis] = useInView();
  const navigation = useNavigate();


  return (
    <section 
        ref={ref} 
        id="blog" 
        style={{ padding: "110px 24px", background: t.bgElevated, transition: "background 0.35s" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: t.codeComment }}>
                {"// blog.posts.sort((a,b) => b.date - a.date)"}
            </span>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1,
                  marginTop: 6, fontFamily: "'Syne', sans-serif", 
                  animation: vis ? "fadeUp 0.6s both" : "none" }}>
                    Blog
            </h2>
            <p style={{ color: t.textAccent, fontSize: 14, marginTop: 8, fontFamily: "'Syne', sans-serif" }}>
                Deep dives on DeFi internals and security.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 30 }}>
                {blogPosts.map((post, pi) => {
                    return (
                      <div key={post.slug} 
                        style={{
                          background: t.bgCard, border: `1px solid ${t.border}`, 
                          borderRadius: 14, overflow: "hidden",
                          animation: vis ? `fadeUp 0.55s ${0.1 * pi}s cubic-bezier(.22,1,.36,1) both` : "none",
                          transition: "border-color 0.25s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderHover; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; }}>

                        <BlogPostHeader
                            post={post}
                            handleNavigate={() => navigation(`/blog/${post.slug}`)}/>                    
                      </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
}