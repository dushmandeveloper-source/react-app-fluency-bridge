import Reveal from "../components/Reveal";
import { EyeIcon, FlagIcon, UserIcon, ShieldCheckIcon } from "../components/icons";

const ADVISORS = Array(6).fill("Academic Strategist");

export default function PageTeam() {
  return (
    <div>
      {/* Header */}
      <section
        className="pt-20 pb-10 md:pt-32 md:pb-16 border-b border-white/10"
        style={{ background: "radial-gradient(circle at 15% 50%, rgba(20,83,45,0.55) 0%, transparent 40%), radial-gradient(circle at 85% 30%, rgba(22,163,74,0.25) 0%, transparent 35%), #0f172a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-green-400 mb-3">About Us</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              People behind the bridge<span className="bounce-dot" style={{ display: "inline-block" }}>.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Engineering precision, applied to human potential — driven by lived experience and an unwavering commitment to ethical guidance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-10 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-green-800 border border-slate-100 h-full">
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
            <Reveal delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-green-500 border border-slate-100 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <FlagIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To democratise authentic language fluency through the Natural English Method while delivering transparent, zero-fee university placement — with an expert team that upholds student rights above all else, in strict alignment with New Zealand's rigorous compliance frameworks.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-8 text-center">Our Leadership</p>
          </Reveal>
          <Reveal>
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img
                  src="/founder.jpg"
                  alt="Chathuranga Liyanage, Founder & CEO"
                  className="h-full w-full object-cover object-top"
                  style={{ minHeight: 320, boxShadow: "inset -8px 0 24px rgba(22,163,74,0.15)" }}
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 text-white flex flex-col justify-center">
                <span className="font-mono text-xs uppercase tracking-widest text-green-400 mb-2 block">Founder & CEO</span>
                <h2 className="text-3xl font-bold mb-2">Chathuranga Liyanage</h2>
                <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700">
                  B.Sc. Civil Engineering (Hons) — University of Peradeniya, 2011
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Over 15 years of diverse international experience in the civil engineering industry, currently directing operations as a Construction Project Manager in New Zealand.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Having personally navigated and conquered intense linguistic barriers early in his career, Chathuranga engineered the{" "}
                  <strong className="text-white">Natural English Method</strong> — a systematic, first-principles framework designed to fast-track real-world communication, without academic stress. He applies engineering precision and structured project management to global education.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Credentials", "B.Sc. Civil Engineering (Hons), Uni of Peradeniya, 2011"],
                    ["Experience", "15+ years, international civil engineering"],
                    ["Current role", "Construction Project Manager, New Zealand"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex gap-3">
                      <span className="text-green-400 font-semibold w-24 flex-shrink-0">{k}</span>
                      <span className="text-slate-300">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advisory board — floating cards */}
      <section className="py-10 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-3">
                Expert Advisors
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Professionals dedicated to your pathway.</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Highly specialised professionals holding baseline degrees from premier Sri Lankan universities and Master's or MBAs from New Zealand — pairing local insight with on-the-ground experience.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVISORS.map((role, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`card-float-${i} bg-white rounded-2xl p-6 border border-slate-100 text-center`} style={{ boxShadow: "0 4px 24px rgba(22,163,74,0.15), 0 1px 4px rgba(0,0,0,0.05)" }}>
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-slate-100 flex items-center justify-center border-4 border-white shadow">
                    <UserIcon className="w-9 h-9 text-slate-400" />
                  </div>
                  <p className="font-mono text-xs text-green-700 uppercase tracking-widest mb-1">
                    Advisor 0{i + 1}
                  </p>
                  <h3 className="font-bold text-slate-900 mb-1">{role}</h3>
                  <p className="text-sm text-slate-500">B.A. (Sri Lanka)</p>
                  <p className="text-sm text-slate-600 font-medium">Master's / MBA (New Zealand)</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legal partners */}
      <section className="py-8 md:py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 text-slate-400 mb-6 shadow-sm">
              <ShieldCheckIcon className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Legal & Immigration Partners</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              To ensure absolute regulatory compliance, all legal immigration strategies and visa applications are processed exclusively through our accredited New Zealand immigration partners.
            </p>
            <p className="text-sm text-slate-400 italic">
              * Individual credentials and firm details are provided directly during personal consultations.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
