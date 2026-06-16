import Reveal from "../components/Reveal";

const TIERS = [
  {
    n: "Tier 01",
    title: "Discover",
    body: "Immersion through strategic active and passive listening. Master collocations, idioms, local slang, synonyms, and lexical chunks the way native speakers actually acquire them — naturally.",
    accent: false,
  },
  {
    n: "Tier 02",
    title: "Use",
    body: "Immediate execution. Transition passive vocabulary into active speech, with a heavy focus on connected speech, rhythm, and native intonation. You speak from day one.",
    accent: true,
  },
  {
    n: "Tier 03",
    title: "Review",
    body: "Continuous optimisation. Refine delivery, eliminate friction, and build the instinctive confidence that separates fluent speakers from careful ones.",
    accent: false,
  },
];

const TECH = [
  {
    label: "F-BEST",
    desc: "The Fluency Bridge English Skills Test — engineered as a future equivalent to IELTS or PTE.",
  },
  {
    label: "CEFR",
    desc: "Designed to scale our framework globally against recognised Common European Framework benchmarks.",
  },
  {
    label: "NZQA",
    desc: "Seeking formal validation and recognition from the New Zealand Qualifications Authority.",
  },
];

export default function PageEnglish({ navigate }) {
  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
              Shift from{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg,#14532d,#16a34a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                learning
              </span>{" "}
              English to{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg,#16a34a,#14532d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                executing
              </span>{" "}
              it<span className="bounce-dot">.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Master natural communication, intonation, and rhythm. No rigid rules. Just absolute fluency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                onClick={() => navigate("contact")}
                className="bg-green-700 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg"
              >
                Start Coaching
              </button>
              <button
                onClick={() => navigate("consultancy")}
                className="bg-white border border-slate-200 text-slate-700 hover:border-green-800 hover:text-green-800 px-8 py-3.5 rounded-full font-semibold transition-all"
              >
                Heading to NZ to study? →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div
              className="rounded-3xl p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl"
              style={{ background: "#0f172a" }}
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "#14532d" }} />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "#16a34a" }} />
              <h2 className="text-2xl font-bold mb-6 relative z-10">The Philosophy</h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed relative z-10">
                Most traditional programs force students to spend years learning{" "}
                <em>about</em> English rules rather than practising active communication. Fluency Bridge teaches you how to{" "}
                <strong className="text-white">practise English effortlessly</strong>. Whether you are a local professional looking to excel in the NZ corporate landscape or an international student preparing for global markets, this program delivers rapid, measurable transformation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3-Tier Framework — floating cards */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-3">Our Teaching Method</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">A proprietary three-tier cognitive loop.</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Traditional methods focus on theory. We focus on natural acquisition — discover, use, refine, repeat.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {TIERS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div
                  className={`card-float-${i} rounded-2xl p-8 text-center h-full border transition-shadow duration-300 ${
                    s.accent
                      ? "bg-white border-b-4 border-green-500 border-t border-l border-r border-slate-100"
                      : "bg-white border-slate-100"
                  }`}
                  style={{ boxShadow: s.accent ? "0 4px 24px rgba(22,163,74,0.25), 0 1px 4px rgba(0,0,0,0.06)" : "0 4px 16px rgba(22,163,74,0.12), 0 1px 4px rgba(0,0,0,0.05)" }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-4">Who We Serve</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Most programs teach you{" "}
                <em className="not-italic text-green-700">about</em> English. We teach you to use it.
              </h2>
              <ul className="space-y-4">
                {[
                  "Local professionals excelling in the New Zealand corporate landscape.",
                  "International students preparing for global academic and career markets.",
                  "Anyone seeking rapid, measurable transformation — not slow theory.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-slate-600">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="img-float">
                <img
                  src="/who-its-for.jpeg"
                  alt="English coaching session"
                  className="w-full rounded-2xl"
                  style={{ aspectRatio: "5/4", objectFit: "cover", display: "block", boxShadow: "0 8px 32px rgba(22,163,74,0.2), 0 2px 8px rgba(0,0,0,0.1)" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech Edge */}
      <section
        className="py-24 text-white"
        style={{ background: "radial-gradient(ellipse at top left, rgba(20,83,45,0.45) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(22,163,74,0.2) 0%, transparent 50%), #0f172a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-green-400 mb-3">Technology Edge</p>
              <h2 className="text-3xl font-bold mb-4">A digital speech-accelerator, in your pocket.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our upcoming mobile ecosystem offers shadowing and mimicking modules for real-time accent, rhythm, and pacing calibration — with automated performance analytics.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {TECH.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="bg-white/5 rounded-2xl p-7 border border-white/10 text-center h-full">
                  <div className="text-3xl font-bold text-white mb-4">{s.label}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
