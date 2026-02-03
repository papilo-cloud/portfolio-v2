import { useCallback, useState } from "react";


export function useInView(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useCallback((node) => {
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(node);
  }, [threshold]);
  return [ref, visible];
}