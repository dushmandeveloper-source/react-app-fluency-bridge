import Reveal from "../components/Reveal";
import { MapIcon, AirplaneIcon, BriefcaseIcon } from "../components/icons";
import UnderConstruction from "../components/UnderConstruction";

// Temporary: show the under-construction placeholder instead of the real
// page content below. Flip back to true to restore it.
const SHOW_REAL_CONTENT = false;

const STAGES = [
  {
    n: "Stage 01",
    Icon: MapIcon,
    title: "Strategic Pre-Consultation",
    body: "We match your academic profile and educational background with elite New Zealand universities to secure your official offer letters.",
  },
  {
    n: "Stage 02",
    Icon: AirplaneIcon,
    title: "Pre-Departure & Settlement Advisory",
    body: "Practical, realistic preparation briefings and on-the-ground support to ensure seamless integration and cultural adaptation upon arrival in NZ.",
  },
  {
    n: "Stage 03",
    Icon: BriefcaseIcon,
    title: "Executive Career Coaching",
    body: "Tailored mentorship to help you successfully penetrate the competitive New Zealand corporate market and find your career path post-graduation.",
  },
];

export default function PageConsultancy({ navigate }) {
  if (!SHOW_REAL_CONTENT) return <UnderConstruction pageName="NZ Academic Bridge" />;

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-20 pb-12 md:pt-32 md:pb-24 text-white relative"
        style={{
          background:
            "radial-gradient(circle at 15% 50%, rgba(20,83,45,0.55) 0%, transparent 35%), radial-gradient(circle at 85% 30%, rgba(22,163,74,0.30) 0%, transparent 30%), #0f172a",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <h1 className="text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Your <span className="text-green-400">zero-cost</span>, fully compliant pathway to New Zealand<span className="bounce-dot">.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Expert university placement, career coaching and relocation strategy — engineered by professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("contact")}
                className="bg-green-700 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg"
              >
                Begin Your Placement
              </button>
              <button
                onClick={() => navigate("english")}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-all"
              >
                English coaching too? →
              </button>
            </div>
            <dl className="flex flex-wrap justify-center gap-10 mt-10 text-sm">
              {[
                ["Cost to student", "NZ$0"],
                ["Coverage", "End to end"],
                ["Standard", "NZ Compliant"],
              ].map(([k, v]) => (
                <div key={k} className="text-center">
                  <dt className="font-mono uppercase tracking-widest text-slate-500 text-xs mb-0.5">{k}</dt>
                  <dd className="font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Pipeline intro */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              We look past simple admissions to engineer your entire career trajectory in New Zealand.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All international student recruitment and academic consultancy is delivered through NZ Academic Bridge — completely free of charge to the student.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pipeline steps */}
      <section className="py-8 md:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-2xl border border-slate-100 transition-shadow" style={{ boxShadow: "0 4px 24px rgba(22,163,74,0.15), 0 1px 4px rgba(0,0,0,0.05)" }}>
                <div className="w-16 h-16 flex-shrink-0 bg-slate-700 text-white rounded-xl flex items-center justify-center shadow-md">
                  <s.Icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-1">{s.n}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Integrity / Compliance */}
      <section className="py-12 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-4">Our Commitment</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  We protect student rights — without compromise.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We operate with absolute transparency and are fully compliant with New Zealand law. Our recruitment methodologies strictly align with global benchmarks.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Aligned with the London Statement (London Code)",
                    "Aligned with the NZ Education (Pastoral Care) Guidelines",
                    "Finalising official INZ / Education New Zealand certifications",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-slate-700">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                  <p className="text-sm font-semibold text-amber-900 mb-1">ℹ Institutional Note</p>
                  <p className="text-sm text-amber-800">
                    We are currently finalising official Immigration New Zealand (INZ) / Education New Zealand agency certifications to officially badge our ecosystem for premium compliance.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <div className="img-float">
                <img
                  src="/handshake.jpg"
                  alt="Handshake"
                  className="w-full rounded-2xl"
                  style={{ aspectRatio: "5/4", objectFit: "cover", display: "block", boxShadow: "0 8px 32px rgba(22,163,74,0.2), 0 2px 8px rgba(0,0,0,0.1)" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
