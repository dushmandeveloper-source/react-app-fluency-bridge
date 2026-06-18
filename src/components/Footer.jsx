import { CONTACTS } from "../data/constants";
import { PhoneIcon } from "./icons";

export default function Footer({ navigate }) {
  return (
    <footer className="bg-navy-deep pt-20 pb-8 px-4 md:px-8 lg:px-12 text-white/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo2.png"
                alt="NZ Academic Bridge"
                style={{
                  width: 64,
                  height: 64,
                  flexShrink: 0,
                  display: "block",
                  filter: "drop-shadow(0 0 8px rgba(140,198,63,0.75)) drop-shadow(0 0 20px rgba(140,198,63,0.4))",
                }}
              />
              <span className="text-lg font-bold text-white">Fluency Bridge Global Ltd.</span>
            </div>
            <p className="text-sm mb-4 max-w-sm font-medium leading-relaxed">
              Architecting Global Futures through elite English coaching and ethical NZ education consultancy.
            </p>
            <p className="text-xs text-white/40">New Zealand Registered Enterprise</p>
            <div className="flex gap-4 mt-5">
              <a href={CONTACTS.fb1} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-lime transition-colors">
                Facebook · Fluency Bridge ↗
              </a>
              <a href={CONTACTS.fb2} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-lime transition-colors">
                FB · NZ Academic Bridge ↗
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Branches</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                ["english", "Fluency Bridge Coaching"],
                ["consultancy", "NZ Academic Bridge"],
                ["team", "About the Company"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button onClick={() => navigate(id)} className="hover:text-lime transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Reach</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center gap-2 text-lime">
                <PhoneIcon className="w-4 h-4" /> <a href={CONTACTS.tel} className="text-white hover:text-lime transition-colors">{CONTACTS.phone}</a>
              </li>
              {CONTACTS.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="hover:text-lime transition-colors text-xs">
                    {e}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate("contact")}
                  className="mt-2 text-lime font-bold hover:text-[#a4d65e] transition-colors"
                >
                  Contact Us →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2026 Fluency Bridge Global Limited. New Zealand. All rights reserved.</p>
          <p className="text-white/30 italic">Cross over to natural English.</p>
        </div>
      </div>
    </footer>
  );
}
