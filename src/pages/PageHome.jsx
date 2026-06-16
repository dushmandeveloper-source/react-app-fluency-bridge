import { useEffect, useRef } from "react";
import gsap from "gsap";
import Reveal from "../components/Reveal";
import {
  BuildingIcon,
  MicIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ChatIcon,
  EyeIcon,
  FlagIcon,
} from "../components/icons";

const VALUES = [
  {
    num: "/01",
    Icon: BuildingIcon,
    title: "Industry-Led",
    body: "Built and run by working professionals — not career marketers. Guidance grounded in lived experience across international industries.",
  },
  {
    num: "/02",
    Icon: MicIcon,
    title: "Natural Method",
    body: "Fluency through real communication — rhythm, intonation, and connected speech, not rigid grammar rules or textbook theory.",
  },
  {
    num: "/03",
    Icon: AcademicCapIcon,
    title: "Zero-Fee Placement",
    body: "All international student recruitment and university placement is delivered completely free of charge to the student.",
  },
  {
    num: "/04",
    Icon: ShieldCheckIcon,
    title: "Compliant by Design",
    body: "Fully aligned with NZ pastoral-care frameworks, the London Code, and INZ/Education NZ compliance standards.",
  },
];

const ROADMAP = [
  {
    when: "In progress",
    title: "NZQA Institute Registration",
    body: "Transitioning into a fully registered New Zealand Qualifications Authority institute.",
    color: "teal",
  },
  {
    when: "In development",
    title: "Mobile Speech Ecosystem",
    body: "An app with proprietary speech-evaluation metrics, shadowing, and real-time pacing calibration.",
    color: "blue",
  },
  {
    when: "Upcoming",
    title: "The F-BEST Examination",
    body: "The Fluency Bridge English Skills Test — a future equivalent to IELTS or PTE, mapped to CEFR and seeking NZQA recognition.",
    color: "slate",
  },
];

export default function PageHome({ navigate }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".hero-badge",
          { opacity: 0, x: 55 },
          { opacity: 1, x: 0, duration: 0.7, ease: "back.out(1.4)" })
        .fromTo(".hero-word",
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 0.65, stagger: 0.1, ease: "back.out(1.5)" },
          "-=0.45")
        .fromTo(".hero-sub",
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.6, ease: "back.out(1.3)" },
          "-=0.35")
        .fromTo(".hero-btns",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.55, ease: "back.out(1.2)" },
          "-=0.3")
        .fromTo(".hero-stats",
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.1)" },
          "-=0.25")
        .fromTo(".hero-img",
          { opacity: 0, x: 40, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
          "-=0.8");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative text-white py-28 lg:py-36 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 15% 50%, rgba(20,83,45,0.55) 0%, transparent 35%), radial-gradient(circle at 85% 30%, rgba(22,163,74,0.30) 0%, transparent 30%), #0f172a",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="hero-badge inline-block py-1 px-3 rounded-full bg-green-900/50 border border-green-700 text-green-200 text-sm font-semibold mb-6 tracking-wide">
                New Zealand Based Global Enterprise
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 overflow-hidden">
                <span className="hero-word inline-block">Architecting</span>{" "}
                <span className="hero-word inline-block text-green-400">Global</span>{" "}
                <span className="hero-word inline-block text-green-400">Futures.</span>
              </h1>
              <p className="hero-sub text-xl text-slate-300 mb-8 font-light leading-relaxed max-w-2xl">
                Premium English Coaching and Ethical New Zealand Education Consultancy — engineered by industry professionals who have walked the path themselves.
              </p>
              <div className="hero-btns flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => navigate("english")}
                  className="bg-green-700 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)]"
                >
                  Explore Coaching
                </button>
                <button
                  onClick={() => navigate("consultancy")}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-all"
                >
                  NZ Consultancy
                </button>
              </div>
              <dl className="hero-stats flex flex-wrap gap-8 text-sm">
                {[
                  ["Placement fee", "Zero, to students"],
                  ["Method", "Natural English"],
                  ["Based in", "New Zealand"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono uppercase tracking-widest text-slate-500 text-xs mb-0.5">{k}</dt>
                    <dd className="font-semibold text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hidden lg:block">
              <div className="hero-img img-float">
                <img
                  src="/banner.jpg"
                  alt="University campus"
                  className="max-w-sm mx-auto rounded-2xl shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
                  style={{ aspectRatio: "4/5", width: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Mandate */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-3">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                One parent infrastructure. Two specialised crossings.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Fluency Bridge Global Limited is a New Zealand-based, service-oriented enterprise that bridges regional potential and global success through two distinct, professionally operated branches.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Reveal>
              <button
                onClick={() => navigate("english")}
                className="w-full text-left bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 mb-6 border border-slate-200 group-hover:bg-slate-700 group-hover:text-white transition-colors duration-300">
                  <ChatIcon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Fluency Bridge</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  High-performance English communication coaching for professionals and international students, built on the Natural English Method. Stop learning about English. Start executing it.
                </p>
                <span className="text-green-700 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore the coaching program →
                </span>
              </button>
            </Reveal>

            <Reveal delay={100}>
              <button
                onClick={() => navigate("consultancy")}
                className="w-full text-left bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 mb-6 border border-slate-200 group-hover:bg-slate-700 group-hover:text-white transition-colors duration-300">
                  <AcademicCapIcon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">NZ Academic Bridge</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Zero-cost, fully compliant university placement, career coaching and relocation strategy for international students — engineered end-to-end by professionals who made the move themselves.
                </p>
                <span className="text-green-900 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore the consultancy →
                </span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Four Values — floating cards */}
      <section className="py-12 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-3">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What We Stand For</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.num} delay={i * 80}>
                <div className={`card-float-${i} bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
                      <v.Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900">{v.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="img-float">
                <img
                  src="/banner.jpg"
                  alt="University campus"
                  className="w-full rounded-2xl"
                  style={{ aspectRatio: "5/4", objectFit: "cover", display: "block", boxShadow: "0 8px 32px rgba(22,163,74,0.2), 0 2px 8px rgba(0,0,0,0.1)" }}
                />
              </div>
            </Reveal>
            <div className="space-y-6">
              <Reveal delay={100}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-green-800 border border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <EyeIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    To establish a world-class global ecosystem that seamlessly integrates high-impact English coaching, transformational career coaching, and ethically compliant education consultancy — empowering individuals worldwide to confidently claim their place in the international market.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-green-500 border border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <FlagIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    To democratise authentic language fluency through the Natural English Method while delivering transparent, zero-fee university placement through NZ Academic Bridge — with an expert team that upholds student rights above all else, in strict alignment with New Zealand's rigorous compliance frameworks.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap — floating cards */}
      <section
        className="py-24 text-white"
        style={{ background: "radial-gradient(ellipse at top left, rgba(20,83,45,0.45) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(22,163,74,0.2) 0%, transparent 50%), #0f172a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-green-400 mb-3">Strategic Roadmap</p>
              <h2 className="text-3xl font-bold mb-4">Scaling deliberately, and on the record.</h2>
              <p className="text-slate-400">Where Fluency Bridge Global is headed next.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {ROADMAP.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className={`card-float-${i} bg-white/5 rounded-2xl p-7 border border-white/10 h-full`}>
                  <span
                    className={`inline-block text-xs font-mono font-semibold uppercase tracking-widest mb-4 px-2 py-1 rounded ${
                      r.color === "teal"
                        ? "bg-green-900/50 text-green-400"
                        : r.color === "blue"
                        ? "bg-green-800/50 text-green-300"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {r.when}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
