import { useState, useEffect } from "react";
import { PAGES } from "../data/constants";

/* Nav is split into two visual groups separated by a thin divider:
   [Home · About Us]  |  [English Coaching · NZ Academic Bridge]  [Contact Us] */
const PRIMARY_IDS  = ["home", "team"];
const SERVICE_IDS  = ["english", "consultancy"];

export default function Navbar({ current, navigate }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function linkClass(id) {
    const base = "text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap";
    return current === id
      ? `${base} bg-green-700 text-white shadow-[0_0_14px_rgba(22,163,74,0.55)]`
      : `${base} text-slate-500 hover:text-slate-900 hover:bg-slate-100`;
  }

  const primaryPages  = PAGES.filter((p) => PRIMARY_IDS.includes(p.id));
  const servicePages  = PAGES.filter((p) => SERVICE_IDS.includes(p.id));
  const allNavPages   = PAGES.filter((p) => p.id !== "contact");

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        background: "rgba(255,255,255,0.90)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(226,232,240,0.8)" : "1px solid rgba(255,255,255,0.2)",
      }}
    >
      {/* Accent gradient line — appears on scroll */}
      <div
        className="h-[2px] w-full transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, #14532d 0%, #16a34a 100%)",
          opacity: scrolled ? 1 : 0,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[72px] items-center gap-6">

          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-3 flex-shrink-0 focus:outline-none"
            aria-label="Home"
          >
            <img
              src="/logo1.png"
              alt="Fluency Bridge"
              style={{ height: 68, width: "auto", display: "block", flexShrink: 0 }}
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Group 1: Home · About Us */}
            {primaryPages.map((p) => (
              <button key={p.id} onClick={() => navigate(p.id)} className={linkClass(p.id)}>
                {p.label}
              </button>
            ))}

            {/* Thin vertical divider */}
            <span className="mx-2 h-4 w-px bg-slate-200 rounded-full" aria-hidden="true" />

            {/* Group 2: English Coaching · NZ Academic Bridge */}
            {servicePages.map((p) => (
              <button key={p.id} onClick={() => navigate(p.id)} className={linkClass(p.id)}>
                {p.label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("contact")}
              className="hidden md:inline-flex items-center gap-1.5 bg-green-800 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-px"
            >
              Contact Us
              <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button
              className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {allNavPages.map((p) => (
              <button
                key={p.id}
                onClick={() => { navigate(p.id); setMenuOpen(false); }}
                className={`flex items-center w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  current === p.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {SERVICE_IDS.includes(p.id) && (
                  <span className="mr-2 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                )}
                {p.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => { navigate("contact"); setMenuOpen(false); }}
                className="w-full bg-green-800 hover:bg-green-700 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
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
