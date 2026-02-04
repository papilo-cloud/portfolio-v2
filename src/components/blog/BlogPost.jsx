import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import { useTheme } from '../../hooks/useTheme';
import { PostHeader } from './PostHeader';
import { PostSection } from './PostSection';

export default function BlogPost() {
  const { slug } = useParams();
  const { t } = useTheme();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
        return <div style={{ padding: 100, textAlign: 'center', color: t.text }}>Post not found</div>;
  }

  return (
    <div style={{ background: t.bg, minHeight: '100vh', color: t.text, paddingTop: 80 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '20px 24px' }}>
            <Link to="/#blog" 
                style={{ 
                    display: 'inline-flex', alignItems: 'center', gap: 8, 
                    fontSize: 13, color: t.textMuted, fontFamily: "'IBM Plex Mono', monospace",
                    transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = t.accent}
                onMouseLeave={e => e.currentTarget.style.color = t.textMuted}>
                ← Back to blog
            </Link>
        </div>
        <PostHeader post={post} />
        <PostSection post={post} />
    </div>
  );
}