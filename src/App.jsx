import { GlobalStyles } from "./components/GlobalStyles";
import { Nav } from "./components/nav/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Blog } from "./components/blog/Blog";
import { Contact } from "./components/contact/Contacts";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeProvider";
import { Routes, Route } from 'react-router-dom';
import BlogPost from "./components/blog/BlogPost";


export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </ThemeProvider>
  );
}