/*
 * Home page — navy/lime redesign changelog:
 * - Hero rebuilt with anime.js letter-pop title, word-stagger subtitle, and a
 *   scale-pop + blink stats row (Zero / Natural / New Zealand).
 * - Services section kept ("One parent infrastructure..."); "Our Services"
 *   label badge removed above the heading per request.
 * - Vision & Mission, What We Stand For, and Strategic Roadmap sections are
 *   temporarily hidden behind SHOW_ADDITIONAL_SECTIONS (set true to restore).
 * - Site-wide navigation lock (App.jsx NAVIGATION_LOCKED) has been turned
 *   back off, so all nav/footer/CTA links work normally again.
 */
import { useEffect, useRef } from "react";
import { loadAnime } from "../lib/loadAnime";
import FloatingShape from "../components/FloatingShape";
import Badge from "../components/Badge";
import {
  BuildingIcon,
  MicIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ChatIcon,
  EyeIcon,
  FlagIcon,
  MapPinIcon,
} from "../components/icons";

const VALUES = [
  {
    Icon: BuildingIcon,
    title: "Industry-Led",
    body: "Built and run by working professionals — not career marketers. Guidance grounded in lived experience across international industries.",
  },
  {
    Icon: MicIcon,
    title: "Natural Method",
    body: "Fluency through real communication — rhythm, intonation, and connected speech, not rigid grammar rules or textbook theory.",
  },
  {
    Icon: AcademicCapIcon,
    title: "Zero-Fee Placement",
    body: "All international student recruitment and university placement is delivered completely free of charge to the student.",
  },
  {
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
    state: "active",
  },
  {
    when: "In development",
    title: "Mobile Speech Ecosystem",
    body: "An app with proprietary speech-evaluation metrics, shadowing, and real-time pacing calibration.",
    state: "next",
  },
  {
    when: "Upcoming",
    title: "The F-BEST Examination",
    body: "The Fluency Bridge English Skills Test — a future equivalent to IELTS or PTE, mapped to CEFR and seeking NZQA recognition.",
    state: "future",
  },
];

// --- Animated hero headline (anime.js letter-by-letter entrance, looping) ---
function AnimatedHeroText() {
  useEffect(() => {
    let anim;
    let cancelled = false;

    loadAnime().then((anime) => {
      if (cancelled || !anime) return;
      anim = anime
        .timeline({ loop: true })
        .add({
          targets: ".ml9 .letter",
          scale: [0, 1],
          duration: 2200,
          elasticity: 500,
          delay: (el, i) => 90 * (i + 1),
        })
        .add({
          targets: ".ml9",
          opacity: 0,
          duration: 1200,
          easing: "easeOutExpo",
          delay: 1800,
        })
        .add({
          targets: ".ml9 .letter",
          scale: 0,
          duration: 1,
        })
        .add({
          targets: ".ml9",
          opacity: 1,
          duration: 1,
        });
    });

    return () => {
      cancelled = true;
      if (anim) anim.pause();
    };
  }, []);

  const text1 = "Architecting";
  const text2 = "Global Futures.";

  const renderLetters = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="letter inline-block" style={{ transform: "scale(0)" }}>
        {char === " " ? " " : char}
      </span>
    ));

  return (
    <h1 className="ml9 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 relative z-10 min-h-[140px] md:min-h-[180px]">
      <span className="text-wrapper relative inline-block overflow-hidden">
        <span className="letters flex flex-wrap text-white">{renderLetters(text1)}</span>
        <span className="letters flex flex-wrap font-serif italic font-normal text-lime mt-2">{renderLetters(text2)}</span>
      </span>
    </h1>
  );
}

// --- Subtitle: word-by-word rise-and-fade reveal (distinct from the letter-pop title) ---
function AnimatedSubtitle({ text, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    let anim;
    let cancelled = false;

    loadAnime().then((anime) => {
      if (cancelled || !anime || !ref.current) return;
      anim = anime({
        targets: ref.current.querySelectorAll(".word"),
        translateY: [16, 0],
        opacity: [0, 1],
        duration: 700,
        easing: "easeOutQuad",
        delay: anime.stagger(40),
      });
    });

    return () => {
      cancelled = true;
      if (anim) anim.pause();
    };
  }, []);

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="word inline-block">
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

// --- Stats row: staggered scale-in pop (distinct from both text effects above) ---
function AnimatedStats({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    let anim;
    let cancelled = false;

    loadAnime().then((anime) => {
      if (cancelled || !anime || !ref.current) return;
      anim = anime({
        targets: ref.current.querySelectorAll(".stat-item"),
        scale: [0.6, 1],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutBack",
        delay: anime.stagger(150),
      });
    });

    return () => {
      cancelled = true;
      if (anim) anim.pause();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      <div className="stat-item">
        <div className="text-3xl font-extrabold text-lime mb-1 animate-pulse">Zero</div>
        <div className="text-sm font-bold text-white/60">Placement Fee</div>
      </div>
      <div className="hidden md:block h-12 w-px bg-white/10" />
      <div className="stat-item">
        <div className="text-3xl font-extrabold text-lime mb-1 animate-text-pulse-scale">Natural</div>
        <div className="text-sm font-bold text-white/60">English Method</div>
      </div>
      <div className="hidden md:block h-12 w-px bg-white/10" />
      <div className="stat-item flex items-center gap-3">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full animate-pulse-ring" />
          <div className="relative w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-lime border border-white/10">
            <MapPinIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="text-sm font-bold text-white/80">
          Based in<br /><span className="text-lime animate-cursor-blink">New Zealand</span>
        </div>
      </div>
    </div>
  );
}

// Temporary: hide Vision & Mission, Values, and Roadmap sections while those are reworked.
// Flip back to true to restore them.
const SHOW_ADDITIONAL_SECTIONS = false;

export default function PageHome({ navigate }) {
  return (
    <div className="bg-navy overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 lg:px-12 min-h-screen flex items-center">
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-navy-mid/80 blur-[120px] pointer-events-none" />

        <FloatingShape type="ring" className="w-16 h-16 opacity-20 top-32 left-[10%] animate-float-slow" />
        <FloatingShape type="dot" className="w-4 h-4 opacity-40 top-1/2 left-[5%] animate-float-fast" style={{ animationDelay: "1s" }} />
        <FloatingShape type="plus" className="opacity-30 bottom-32 right-[50%] animate-float-slow" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10">
          <div className="max-w-xl relative z-20">
            <div className="absolute -top-12 -left-12 w-20 h-20 rounded-full border-4 border-navy-deep overflow-hidden shadow-2xl animate-float-slow hidden md:block z-20">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Professional" className="w-full h-full object-cover" />
            </div>

            <div className="opacity-0 animate-fade-in-up">
              <Badge text="New Zealand Based Global Enterprise" className="mb-6 bg-navy-mid border-navy-border text-white" />
            </div>

            <div className="opacity-0 animate-fade-in-up delay-100">
              <AnimatedHeroText />
            </div>

            <AnimatedSubtitle
              text="Premium English Coaching and Ethical New Zealand Education Consultancy driven by industry professionals."
              className="opacity-0 animate-fade-in-up delay-200 text-lg text-white/80 mb-10 leading-relaxed pr-8 font-medium"
            />

            <div className="opacity-0 animate-fade-in-up delay-300 flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => navigate("english")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-lime hover:bg-[#7ab135] text-navy shadow-[0_0_15px_rgba(140,198,63,0.3)] hover:shadow-[0_0_25px_rgba(140,198,63,0.6)] hover:-translate-y-0.5 transition-all"
              >
                Fluency Bridge
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </button>
              <button
                onClick={() => navigate("consultancy")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold border-2 border-lime text-lime hover:bg-lime hover:text-navy shadow-lg hover:shadow-[0_0_20px_rgba(140,198,63,0.4)] transition-all"
              >
                NZ Academic Bridge
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </button>
            </div>

            <AnimatedStats className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-8" />
          </div>

          {/* Right images */}
          <div className="relative h-[500px] md:h-[600px] w-full lg:ml-auto max-w-[500px] opacity-0 animate-fade-in-up delay-300">
            <FloatingShape type="dot" className="w-24 h-24 opacity-10 top-10 right-[-20px] animate-pulse" />

            <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 animate-float-slow">
              <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000&auto=format&fit=crop" alt="New Zealand cityscape" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-10 left-0 w-64 h-48 rounded-2xl overflow-hidden border-4 border-navy shadow-2xl animate-float-fast" style={{ animationDelay: "1s" }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Professionals meeting" className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-40 -right-6 w-16 h-16 rounded-full border-4 border-navy-deep overflow-hidden shadow-xl animate-float-fast hidden sm:block z-20">
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-navy-deep relative">
        <FloatingShape type="ring" className="w-32 h-32 opacity-10 top-20 right-[5%] animate-float-slow" />
        <FloatingShape type="plus" className="opacity-20 bottom-20 left-[10%] animate-float-fast" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              One parent infrastructure.<br />Two <span className="text-lime font-serif italic font-normal animate-pulse">specialised</span> crossings.
            </h2>
            <p className="text-white/70 font-medium">
              Fluency Bridge Global Limited is a premier New Zealand-based, service-oriented enterprise. We bridge the gap between regional potential and global success through our parent corporate infrastructure, managing two distinct, specialized operational branches:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Fluency Bridge */}
            <div className="relative h-[600px] group">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" alt="Fluency coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
              </div>

              <div className="absolute -top-6 -right-6 bg-navy border border-lime text-white p-4 rounded-2xl shadow-xl max-w-[200px] animate-float-slow z-20">
                <div className="font-extrabold text-2xl text-lime mb-1">100%</div>
                <div className="font-bold text-xs leading-tight">Natural English Method Built</div>
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-lime border border-white/20">
                  <ChatIcon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-white">Fluency Bridge</h3>
                <p className="text-white/80 leading-relaxed mb-8 font-medium">
                  Our elite frontline program focusing on high-performance English communication coaching for professionals and international students following the Natural English Method.
                </p>
                <button
                  onClick={() => navigate("english")}
                  className="flex items-center gap-2 text-navy font-extrabold bg-lime px-6 py-3 rounded-full w-max hover:bg-[#7ab135] hover:scale-105 hover:shadow-[0_0_20px_rgba(140,198,63,0.5)] transition-all"
                >
                  Explore the coaching program →
                </button>
              </div>
            </div>

            {/* NZ Academic Bridge */}
            <div className="relative h-[600px] group">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 group-hover:border-lime/50 transition-colors duration-500">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" alt="NZ academic consulting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-navy/80 backdrop-blur-[4px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent" />
              </div>

              <div className="absolute top-1/4 -left-8 bg-navy border border-lime text-white p-4 rounded-2xl shadow-xl max-w-[200px] animate-float-fast z-20">
                <div className="font-extrabold text-2xl text-lime mb-1">Zero</div>
                <div className="font-bold text-xs leading-tight">Placement Fee Structure</div>
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-lime border border-white/20">
                  <AcademicCapIcon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-white">NZ Academic Bridge</h3>
                <p className="text-white/80 leading-relaxed mb-8 font-medium">
                  Our specialized, dedicated branding branch specifically established to execute all international student recruitment, expert tertiary placement, and career transition consultancy services.
                </p>
                <button
                  onClick={() => navigate("consultancy")}
                  className="flex items-center gap-2 text-navy font-extrabold bg-lime px-6 py-3 rounded-full w-max hover:bg-[#7ab135] hover:scale-105 hover:shadow-[0_0_20px_rgba(140,198,63,0.5)] transition-all"
                >
                  Explore the consultancy →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {SHOW_ADDITIONAL_SECTIONS && (
      <>
      {/* Vision & Mission */}
      <section className="py-32 px-4 md:px-8 lg:px-12 bg-navy-mid border-t border-white/5 relative overflow-hidden">
        <FloatingShape type="dot" className="w-12 h-12 opacity-30 top-[8%] left-[4%] animate-float-slow" />
        <FloatingShape type="ring" className="w-32 h-32 opacity-25 bottom-[8%] right-[4%] animate-float-fast" />
        <FloatingShape type="plus" className="opacity-30 top-[6%] right-[8%] animate-float-fast" style={{ animationDelay: "0.5s" }} />
        <FloatingShape type="dot" className="w-5 h-5 opacity-40 bottom-[14%] left-[6%] animate-float-slow" style={{ animationDelay: "1.5s" }} />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge text="Who We Are" className="mb-6 bg-white/5 border-white/10 text-white" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Vision &amp; Mission</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Vision */}
            <div className="relative group lg:pr-6">
              <div className="img-float relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 lg:rounded-br-[100px]">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop" alt="Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-navy/50 backdrop-blur-[2px]" />
              </div>

              <div className="lg:absolute lg:-right-6 lg:top-1/2 lg:-translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl relative -mt-20 mx-4 lg:mx-0 lg:mt-0 lg:w-[450px] z-10 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-lime/20 text-lime rounded-full flex items-center justify-center mb-6">
                  <EyeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-white">Our Vision</h3>
                <p className="text-white/80 leading-relaxed font-medium">
                  To establish a world-class global ecosystem that seamlessly integrates high-impact English coaching, transformational career coaching, and ethically compliant education consultancy — empowering individuals worldwide to confidently claim their place in the international market.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group lg:pl-6 lg:mt-24">
              <div className="img-float relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 lg:rounded-tl-[100px]" style={{ animationDelay: "1s" }}>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" alt="Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-lime/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]" />
              </div>

              <div className="lg:absolute lg:-left-6 lg:top-1/2 lg:-translate-y-1/2 bg-lime/95 backdrop-blur-xl border border-lime p-10 rounded-3xl shadow-2xl relative -mt-20 mx-4 lg:mx-0 lg:mt-0 lg:w-[450px] z-10 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-navy/10 text-navy rounded-full flex items-center justify-center mb-6">
                  <FlagIcon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-navy">Our Mission</h3>
                <p className="text-navy/90 leading-relaxed font-bold">
                  To democratise authentic language fluency through the Natural English Method while delivering transparent, zero-fee university placement through NZ Academic Bridge — with an expert team that upholds student rights above all else, in strict alignment with New Zealand's rigorous compliance frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-navy-deep relative overflow-hidden">
        <FloatingShape type="plus" className="opacity-30 top-[12%] right-[4%] animate-float-slow" />
        <FloatingShape type="dot" className="w-6 h-6 opacity-40 bottom-[10%] left-[6%] animate-float-fast" />
        <FloatingShape type="ring" className="w-20 h-20 opacity-25 top-[6%] left-[4%] animate-float-fast" style={{ animationDelay: "1s" }} />
        <FloatingShape type="dot" className="w-4 h-4 opacity-40 bottom-[20%] right-[6%] animate-float-slow" style={{ animationDelay: "2s" }} />

        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Office background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <Badge text="Our Values" className="mb-6 bg-white/5 border-white/10 text-white" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">What We Stand For</h2>
            <p className="text-lime font-bold">Our core values drive every interaction and strategy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, idx) => (
              <div
                key={value.title}
                className="bg-navy-mid/90 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-lime/50 hover:shadow-[0_10px_30px_rgba(140,198,63,0.1)] hover:-translate-y-2 transition-all text-center flex flex-col items-center group duration-300"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full mb-6 flex items-center justify-center text-white group-hover:bg-lime group-hover:border-lime group-hover:text-navy transition-colors shadow-inner">
                  <value.Icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-white text-xl mb-3">{value.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed font-medium">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-navy-mid relative overflow-hidden">
        <FloatingShape type="ring" className="w-40 h-40 opacity-20 top-6 left-6 animate-float-slow" />
        <FloatingShape type="plus" className="opacity-30 bottom-[20%] right-[5%] animate-float-slow" />
        <FloatingShape type="dot" className="w-5 h-5 opacity-40 top-[10%] right-[8%] animate-float-fast" style={{ animationDelay: "0.7s" }} />
        <FloatingShape type="dot" className="w-8 h-8 opacity-20 bottom-10 left-[15%] animate-float-fast" style={{ animationDelay: "1.6s" }} />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Badge text="Strategic Roadmap" className="mb-6 bg-navy-mid border-navy-border text-white" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Scaling deliberately,<br /><span className="text-lime">and on the record.</span>
            </h2>
            <p className="text-white/70 mb-10 font-medium text-lg">Where Fluency Bridge Global is headed next.</p>

            <div className="space-y-8">
              {ROADMAP.map((r, i) => (
                <div key={r.title} className="flex gap-6 relative">
                  {i < ROADMAP.length - 1 && (
                    <div className={`absolute left-3 top-10 bottom-0 w-0.5 ${r.state === "active" ? "bg-lime/30" : "bg-white/10"}`} />
                  )}
                  <div
                    className={`w-6 h-6 rounded-full flex-shrink-0 mt-1 relative z-10 ${
                      r.state === "active"
                        ? "bg-lime shadow-[0_0_15px_rgba(140,198,63,0.8)] animate-pulse"
                        : r.state === "next"
                        ? "bg-navy-mid border-2 border-lime"
                        : "bg-navy-deep border-2 border-white/20"
                    }`}
                  />
                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        r.state === "active" ? "text-lime bg-lime/10" : "text-gray-400"
                      }`}
                    >
                      {r.when}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-3 mb-2">{r.title}</h4>
                    <p className="text-white/60 text-sm font-medium">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" alt="Team planning" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-lime rounded-full animate-pulse-ring" />
                <button className="relative z-10 w-24 h-24 bg-lime rounded-full flex items-center justify-center text-navy shadow-lg hover:scale-105 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 bg-navy-deep/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
              <h4 className="font-bold text-lg mb-1 text-lime">Architecting Global Futures</h4>
              <p className="text-white/80 text-sm font-medium">Watch our story and methodology.</p>
            </div>
          </div>
        </div>
      </section>
      </>
      )}
    </div>
  );
}
