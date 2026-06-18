import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageHome from "./pages/PageHome";
import PageEnglish from "./pages/PageEnglish";
import PageConsultancy from "./pages/PageConsultancy";
import PageTeam from "./pages/PageTeam";
import PageContact from "./pages/PageContact";

export default function App() {
  const [page, setPage] = useState("home");
  const mainRef = useRef(null);
  const cursorRef = useRef(null);
  const trailerRef = useRef(null);

  // Custom glow cursor — small dot tracks the mouse directly, a soft blurred
  // trailer eases toward it for a "magnetic" feel.
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailerX = mouseX;
    let trailerY = mouseY;
    let frameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const render = () => {
      trailerX += (mouseX - trailerX) * 0.15;
      trailerY += (mouseY - trailerY) * 0.15;
      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate3d(${trailerX}px, ${trailerY}px, 0) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const pageTitles = {
    home:        "Fluency Bridge Global Limited | English Coaching & NZ Education",
    english:     "English Coaching | Fluency Bridge Global Limited",
    consultancy: "NZ Academic Bridge | University Placement Consultancy",
    team:        "About Us | Fluency Bridge Global Limited",
    contact:     "Contact Us | Fluency Bridge Global Limited",
  };

  useEffect(() => {
    document.title = pageTitles[page] || pageTitles.home;
  }, [page]);

  // Page transition — fade + slight rise on every page change
  useEffect(() => {
    if (!mainRef.current) return;
    anime({
      targets: mainRef.current,
      opacity: [0, 1],
      translateY: [28, 0],
      duration: 750,
      easing: "easeOutQuart",
    });
  }, [page]);

  // Navigation re-enabled to all pages (was temporarily Home-only).
  const NAVIGATION_LOCKED = false;

  function navigate(id) {
    if (NAVIGATION_LOCKED && id !== "home") return;
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const pages = {
    home: <PageHome navigate={navigate} />,
    english: <PageEnglish navigate={navigate} />,
    consultancy: <PageConsultancy navigate={navigate} />,
    team: <PageTeam />,
    contact: <PageContact />,
  };

  return (
    <div className="custom-cursor-active min-h-screen flex flex-col bg-slate-50 text-slate-700" style={{ fontFamily: "Inter, sans-serif" }}>
      <div ref={cursorRef} className="custom-cursor-dot fixed top-0 left-0 w-3 h-3 bg-lime rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#8cc63f] animate-cursor-blink" />
      <div ref={trailerRef} className="custom-cursor-trailer fixed top-0 left-0 w-12 h-12 bg-lime/30 rounded-full pointer-events-none z-[9998] blur-[4px]" />

      <Navbar current={page} navigate={navigate} />
      <main ref={mainRef} className={`flex-grow ${page === "home" ? "" : "pt-20"}`}>{pages[page]}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
