import { CONTACTS } from "../data/constants";

export default function Footer({ navigate }) {
  return (
    <footer
      className="text-slate-400 py-14 border-t border-slate-800"
      style={{ background: "linear-gradient(135deg, #0b1a0e 0%, #0f172a 65%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10 border-b border-slate-800 pb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              {/* Logo2 — transparent PNG, drop-shadow glow follows circular badge shape */}
              <img
                src="/logo2.png"
                alt="NZ Academic Bridge"
                style={{
                  width: 72,
                  height: 72,
                  flexShrink: 0,
                  display: "block",
                  filter: "drop-shadow(0 0 8px rgba(22,163,74,0.75)) drop-shadow(0 0 20px rgba(22,163,74,0.4))",
                }}
              />
              <span className="text-lg font-bold text-white">Fluency Bridge Global Ltd.</span>
            </div>
            <p className="text-sm max-w-xs mb-4 leading-relaxed">
              Architecting Global Futures through elite English coaching and ethical NZ education consultancy.
            </p>
            <p className="text-xs text-slate-600">New Zealand Registered Enterprise</p>
            <div className="flex gap-4 mt-5">
              <a href={CONTACTS.fb1} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-green-400 transition-colors">
                Facebook · Fluency Bridge ↗
              </a>
              <a href={CONTACTS.fb2} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-green-400 transition-colors">
                FB · NZ Academic Bridge ↗
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Branches</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["english", "Fluency Bridge Coaching"],
                ["consultancy", "NZ Academic Bridge"],
                ["team", "About the Company"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button onClick={() => navigate(id)} className="hover:text-green-400 transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Reach</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={CONTACTS.tel} className="hover:text-green-400 transition-colors">
                  {CONTACTS.phone}
                </a>
              </li>
              {CONTACTS.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="hover:text-green-400 transition-colors text-xs">
                    {e}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate("contact")}
                  className="mt-2 text-green-400 font-semibold hover:text-green-300 transition-colors"
                >
                  Contact Us →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2026 Fluency Bridge Global Limited. New Zealand. All rights reserved.</p>
          <p className="text-slate-600 italic">Cross over to natural English.</p>
        </div>
      </div>
    </footer>
  );
}
