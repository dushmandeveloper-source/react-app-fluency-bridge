import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { PAGES, CONTACTS } from "../data/constants";
import { PhoneIcon } from "./icons";

/* Nav is split into two visual groups separated by a thin divider:
   [Home · About Us]  |  [English Coaching · NZ Academic Bridge] */
const PRIMARY_IDS = ["home", "team"];
const SERVICE_IDS = ["english", "consultancy"];

export default function Navbar({ current, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Slide down on first load
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -72, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function linkClass(id) {
    const base = "px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap";
    return current === id
      ? `${base} bg-lime text-navy shadow-[0_0_10px_rgba(140,198,63,0.5)]`
      : `${base} text-white/80 hover:text-white hover:bg-white/10`;
  }

  const primaryPages = PAGES.filter((p) => PRIMARY_IDS.includes(p.id));
  const servicePages = PAGES.filter((p) => SERVICE_IDS.includes(p.id));
  const allNavPages = PAGES.filter((p) => p.id !== "contact");

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 px-4 md:px-8 lg:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
          : "bg-navy/70 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className="relative flex items-center flex-shrink-0 focus:outline-none"
          aria-label="Home"
        >
          <span
            className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white animate-pulse"
            style={{ boxShadow: "0 0 8px 2px rgba(255,255,255,0.9), 0 0 16px 4px rgba(255,255,255,0.5)" }}
            aria-hidden="true"
          />
          <img
            src="/logo1.png"
            alt="Fluency Bridge"
            style={{ height: 56, width: "auto", display: "block" }}
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/10">
          {primaryPages.map((p) => (
            <button key={p.id} onClick={() => navigate(p.id)} className={linkClass(p.id)}>
              {p.label}
            </button>
          ))}

          <span
            className="mx-1 h-4 w-px rounded-full bg-lime"
            style={{ boxShadow: "0 0 6px rgba(140,198,63,0.55), 0 0 12px rgba(140,198,63,0.25)" }}
            aria-hidden="true"
          />

          {servicePages.map((p) => (
            <button key={p.id} onClick={() => navigate(p.id)} className={linkClass(p.id)}>
              {p.label}
            </button>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={CONTACTS.tel}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-lime text-sm font-bold text-lime hover:bg-lime hover:text-navy shadow-[0_0_10px_rgba(140,198,63,0.2)] transition-all"
          >
            <PhoneIcon className="w-4 h-4" /> {CONTACTS.phone}
          </a>
          <button
            onClick={() => navigate("contact")}
            className="hidden lg:inline-flex items-center gap-1.5 bg-lime hover:bg-[#7ab135] text-navy text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(140,198,63,0.3)] hover:shadow-[0_0_25px_rgba(140,198,63,0.6)]"
          >
            Contact Us
          </button>

          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute w-full left-0 bg-navy/98 backdrop-blur-md border-t border-white/10 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {allNavPages.map((p) => (
              <button
                key={p.id}
                onClick={() => { navigate(p.id); setMenuOpen(false); }}
                className={`flex items-center w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  current === p.id
                    ? "bg-lime text-navy"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {SERVICE_IDS.includes(p.id) && (
                  <span className="mr-2 w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
                )}
                {p.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <a
                href={CONTACTS.tel}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold text-lime border border-lime/40"
              >
                <PhoneIcon className="w-4 h-4" /> {CONTACTS.phone}
              </a>
              <button
                onClick={() => { navigate("contact"); setMenuOpen(false); }}
                className="w-full bg-lime hover:bg-[#7ab135] text-navy text-sm font-bold px-4 py-3 rounded-xl transition-colors"
              >
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
