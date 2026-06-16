import { useState } from "react";
import Reveal from "../components/Reveal";
import { CONTACTS } from "../data/constants";
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
  LinkIcon,
} from "../components/icons";

const inputBase =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-700/40 focus:border-green-700 transition";

export default function PageContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  const contactRows = [
    {
      Icon: PhoneIcon,
      label: "Phone / WhatsApp",
      content: (
        <a href={CONTACTS.tel} className="text-green-400 font-semibold hover:text-green-300 transition-colors">
          {CONTACTS.phone}
        </a>
      ),
    },
    {
      Icon: EnvelopeIcon,
      label: "Email",
      content: (
        <div className="space-y-1">
          {CONTACTS.emails.map((e) => (
            <div key={e}>
              <a href={`mailto:${e}`} className="text-sm text-green-400 hover:text-green-300 transition-colors">
                {e}
              </a>
            </div>
          ))}
        </div>
      ),
    },
    {
      Icon: ClockIcon,
      label: "Business Hours",
      content: <span className="text-slate-400 text-sm">To be confirmed — publishing shortly.</span>,
    },
    {
      Icon: MapPinIcon,
      label: "Based in",
      content: <span className="text-white font-medium">New Zealand</span>,
    },
    {
      Icon: LinkIcon,
      label: "Social Media",
      content: (
        <div className="space-y-1">
          <div>
            <a href={CONTACTS.fb1} target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300 transition-colors">
              Facebook · Fluency Bridge ↗
            </a>
          </div>
          <div>
            <a href={CONTACTS.fb2} target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300 transition-colors">
              Facebook · NZ Academic Bridge ↗
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Hero — dark gradient matching site palette */}
      <section
        className="pt-20 pb-12 md:pt-32 md:pb-20"
        style={{ background: "radial-gradient(circle at 15% 50%, rgba(20,83,45,0.55) 0%, transparent 40%), radial-gradient(circle at 85% 30%, rgba(22,163,74,0.25) 0%, transparent 35%), #0f172a" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Let's plan your crossing.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Tell us where you want to go. Whether it's natural English fluency or a zero-fee pathway to a New Zealand university, we'll map the route.
            </p>
            <dl className="flex flex-wrap justify-center gap-10 text-sm">
              {[
                ["Response Time", "Within 24 hours"],
                ["WhatsApp", "Available"],
                ["Based in", "New Zealand"],
              ].map(([k, v]) => (
                <div key={k} className="text-center">
                  <dt className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-0.5">{k}</dt>
                  <dd className="font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Form + Contact details — continues dark theme */}
      <section
        className="py-12 md:py-20"
        style={{ background: "radial-gradient(ellipse at top left, rgba(20,83,45,0.35) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(22,163,74,0.15) 0%, transparent 50%), #0f172a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Form — white card on dark */}
            <Reveal>
              <div
                className="bg-white rounded-3xl p-8 shadow-2xl"
                style={{ borderTop: "4px solid #16a34a", boxShadow: "0 8px 40px rgba(22,163,74,0.15), 0 2px 8px rgba(0,0,0,0.3)" }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-7">Send us a message</h2>
                {sent ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(22,163,74,0.12)", boxShadow: "0 0 24px rgba(22,163,74,0.3)" }}
                    >
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message received!</h3>
                    <p className="text-slate-500">We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5" htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" placeholder="Your full name" required value={form.name} onChange={handleChange} className={inputBase} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5" htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} className={inputBase} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5" htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="+94 / +64 …" value={form.phone} onChange={handleChange} className={inputBase} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5" htmlFor="service">How can we help?</label>
                      <select id="service" name="service" required value={form.service} onChange={handleChange} className={inputBase}>
                        <option value="" disabled>Select a service…</option>
                        <optgroup label="Fluency Bridge — English Coaching">
                          <option>English coaching — professionals</option>
                          <option>English coaching — international students</option>
                          <option>Natural English Method enquiry</option>
                        </optgroup>
                        <optgroup label="NZ Academic Bridge — Consultancy">
                          <option>University placement (zero-fee)</option>
                          <option>Pre-departure &amp; settlement support</option>
                          <option>Career coaching</option>
                        </optgroup>
                        <option>Something else</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5" htmlFor="message">Message</label>
                      <textarea id="message" name="message" rows={4} placeholder="Tell us about your goals…" required value={form.message} onChange={handleChange} className={inputBase} />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-600 text-white py-3.5 rounded-xl font-semibold transition-all"
                      style={{ boxShadow: "0 0 20px rgba(22,163,74,0.4)" }}
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Contact details — dark card matching site */}
            <Reveal delay={150}>
              <div
                className="rounded-3xl p-8 h-full flex flex-col"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
              >
                <h2 className="text-2xl font-bold text-white mb-8">Reach us directly</h2>
                <dl className="space-y-6 flex-grow">
                  {contactRows.map((row) => (
                    <div key={row.label} className="flex gap-4 items-start pb-5 border-b border-white/10 last:border-0 last:pb-0">
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ background: "rgba(22,163,74,0.15)", border: "1px solid rgba(22,163,74,0.3)" }}
                      >
                        <row.Icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{row.label}</dt>
                        <dd>{row.content}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                {/* CTA nudge */}
                <div
                  className="mt-8 rounded-2xl p-5"
                  style={{ background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.25)" }}
                >
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <span className="text-green-400 font-semibold">Prefer to talk?</span> Reach us on WhatsApp at{" "}
                    <a href={CONTACTS.tel} className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                      {CONTACTS.phone}
                    </a>{" "}
                    — we respond quickly.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
