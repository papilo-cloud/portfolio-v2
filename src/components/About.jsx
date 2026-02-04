import { useTheme } from "../hooks/useTheme";
import { useInView } from "../hooks/useView";
import { AboutMeInfo } from "./AboutMeInfo";
import Stats from "./Stats";

export function About() {
  const [ref] = useInView();


  return (
    <section
        ref={ref}
        id="about"
        style={{ padding: "110px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap" }}>
            <AboutMeInfo />
            <Stats />
      </div>
    </section>
  );
}