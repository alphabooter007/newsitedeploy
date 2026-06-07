import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import wizardLogo from "@/assets/wizard.png.asset.json";
import {
  Menu,
  X,
  Globe,
  MapPin,
  PhoneMissed,
  Calendar,
  CreditCard,
  MessageSquare,
  BarChart3,
  Smartphone,
  Check,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your business online, running on autopilot" },
      { name: "description", content: "We build your website, automate your reviews, and make sure you never miss a lead — all from one app on your phone." },
      { property: "og:title", content: "Your business online, running on autopilot" },
      { property: "og:description", content: "We build your website, automate your reviews, and make sure you never miss a lead — all from one app on your phone." },
    ],
  }),
  component: Index,
});

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4";

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const SERVICES = [
  "Website",
  "SEO & Google Maps",
  "Missed Call Text-Back",
  "Online Booking",
  "Payments",
  "CRM & Lead Management",
  "Full Package",
];

const BRAND = "WizardLeads";
const EMAIL = "louisbruck@yahoo.com";
const NAV_LINKS: { label: string; href: string }[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
];

const LogoMark = ({ size = 32 }: { size?: number }) => (
  <img
    src={wizardLogo.url}
    alt="WizardLeads"
    width={size}
    height={size}
    style={{ height: size, width: "auto" }}
    className="object-contain"
  />
);

const Italic = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}
  >
    {children}
  </span>
);

const SectionPill = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center">
    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
      {children}
    </span>
  </div>
);

const SERVICE_CARDS: {
  Icon: LucideIcon;
  bg: string;
  title: string;
  desc: string;
}[] = [
  { Icon: Globe, bg: "bg-blue-50 text-blue-600", title: "Professional Website", desc: "A fast, mobile-friendly website built for your business. Designed to turn visitors into customers." },
  { Icon: MapPin, bg: "bg-green-50 text-green-600", title: "Google Maps & Local SEO", desc: "Show up when people in your area search for what you do. We optimize your Google Business profile so you rank higher." },
  { Icon: PhoneMissed, bg: "bg-red-50 text-red-600", title: "Missed Call Text-Back", desc: "Miss a call? Your system instantly texts the customer back so you never lose a lead — even when you're on a job." },
  { Icon: Calendar, bg: "bg-purple-50 text-purple-600", title: "Online Booking", desc: "Let customers book appointments directly from your website or Google profile. No back-and-forth calls needed." },
  { Icon: CreditCard, bg: "bg-emerald-50 text-emerald-600", title: "Tap-to-Pay Payments", desc: "Collect payments right from your phone with the app. No invoicing headaches, no chasing checks." },
  { Icon: MessageSquare, bg: "bg-orange-50 text-orange-600", title: "CRM & Lead Management", desc: "Every lead, conversation, and customer in one place. Know exactly who to follow up with and when." },
  { Icon: BarChart3, bg: "bg-indigo-50 text-indigo-600", title: "Performance Dashboard", desc: "See your leads, bookings, and website performance all in one dashboard. Know what's working at a glance." },
  { Icon: Smartphone, bg: "bg-pink-50 text-pink-600", title: "Everything on Your Phone", desc: "Manage your entire business from one mobile app. Leads, bookings, payments — all in your pocket." },
];


function Index() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          phone,
          business_name: businessName,
          message,
          services: selected.join(", "),
          subject: `New lead from ${businessName || name || "website"}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Submission failed");
      setSent(true);
    } catch (err) {
      setSendError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition";

  return (
    <div className="min-h-screen bg-white">
      <div className="p-3 sm:p-4 md:p-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
        />

        <div className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full p-4 sm:p-6 md:p-8 gap-6">
          {/* Navbar */}
          <div className="relative w-full sm:w-auto">
            <nav className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 shrink-0">
                <LogoMark />
                <span className="text-base font-semibold text-gray-900">WizardLeads</span>
              </div>
              <div className="hidden sm:flex items-center gap-6 ml-auto">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  className="bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Get started
                </a>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="sm:hidden ml-auto w-9 h-9 rounded-xl flex items-center justify-center text-gray-800 hover:bg-black/5"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </nav>
            {menuOpen && (
              <div className="sm:hidden absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3 z-20">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-800 text-sm font-medium hover:opacity-60"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  onClick={() => setMenuOpen(false)}
                  className="bg-black text-white text-sm font-medium px-4 py-2 rounded-xl text-center"
                >
                  Get started
                </a>
              </div>
            )}
          </div>

          <div className="flex-1" />

          {/* Bottom row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="lg:max-w-lg xl:max-w-2xl shrink-0">
              <h1 className="text-white text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg">
                Your business online
                <br />
                running on{" "}
                <Italic>autopilot</Italic>
              </h1>
              <p className="text-white/80 text-sm sm:text-base mt-3 max-w-md drop-shadow-md leading-relaxed">
                We build your website, automate your reviews, and make sure you never miss a lead — all from one app on your phone.
              </p>
            </div>

            {/* Contact form card */}
            <div className="w-full lg:w-[min(480px,45%)] shrink-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 flex flex-col gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
                  Grow your business 🚀
                </h2>

                {sent ? (
                  <div className="flex flex-col items-center text-center py-6 gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl">
                      ✓
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">We'll be in touch!</h3>
                    <p className="text-sm text-gray-500">
                      Expect a call within 24 hours to discuss your business.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-row items-center gap-3 bg-gray-50 rounded-2xl px-4 py-2.5">
                      <span className="text-xs text-gray-500 shrink-0">Questions?</span>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-blue-600 font-semibold hover:underline truncate text-sm"
                      >
                        {EMAIL}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-gray-400 font-medium text-sm">OR</span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <label className="text-sm font-medium text-black">
                        Tell us about your business
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          className={inputCls}
                          placeholder="Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          className={inputCls}
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          className={inputCls}
                          placeholder="Business name"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                        <input
                          className={inputCls}
                          placeholder="Phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <textarea
                        rows={3}
                        className={`${inputCls} resize-none`}
                        placeholder="What does your business do and what's your biggest challenge right now?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />

                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-black">
                          What do you need help with?
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {SERVICES.map((s) => {
                            const active = selected.includes(s);
                            return (
                              <button
                                type="button"
                                key={s}
                                onClick={() => toggle(s)}
                                className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                                  active
                                    ? "bg-gray-100 text-black border-black"
                                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                              >
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60"
                      >
                        {sending ? "Sending..." : "Get my free consultation"}
                      </button>
                      {sendError && (
                        <p className="text-xs text-red-600 text-center">{sendError}</p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* SECTION 2: HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionPill>How it works</SectionPill>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-4 mb-4 text-center">
            Up and running in <Italic>days</Italic>, not months
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-16 text-center">
            We handle everything. You focus on running your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { t: "We learn about your business", d: "A quick 15-minute call to understand what you do, who your customers are, and what's not working right now. No jargon, no pressure." },
              { t: "We build your system", d: "Within a few days, your website is live, your Google profile is optimized, and your automations are running — reviews, missed calls, bookings, all handled." },
              { t: "You get leads on your phone", d: "Every new lead, review, and booking shows up in one app on your phone. You just pick up and close the deal." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section id="services" className="bg-gray-50 py-20 sm:py-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionPill>Everything you need</SectionPill>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-4 mb-4 text-center">
            One system to <Italic>grow</Italic> your business
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto text-center">
            Stop paying for 6 different tools. Everything runs from one platform, one app, one monthly fee.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16">
            {SERVICE_CARDS.map(({ Icon, bg, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${bg}`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 5: PRICING */}
      <section id="pricing" className="bg-gray-50 py-20 sm:py-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionPill>Pricing</SectionPill>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-4 mb-4 text-center">
            Simple, transparent <Italic>pricing</Italic>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto text-center">
            No setup fees. No contracts. Cancel anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {/* Starter */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col">
              <div className="text-lg font-semibold text-gray-900">Starter</div>
              <div className="mt-2">
                <span className="text-4xl font-bold text-gray-900">$197</span>
                <span className="text-base font-normal text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 mb-6">Everything you need to get online and start getting found.</p>
              <div className="h-px bg-gray-100 my-6" />
              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "Professional business website",
                  "Google Business profile setup",
                  "Automated Google review requests",
                  "Online booking calendar",
                  "Mobile app access",
                  "Monthly performance report",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-8 w-full py-3 rounded-2xl text-sm font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors text-center">
                Get started
              </a>
            </div>

            {/* Growth */}
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 ring-2 ring-black shadow-lg flex flex-col">
              <span className="absolute bg-black text-white text-xs font-semibold px-3 py-1 rounded-full -top-3 left-1/2 -translate-x-1/2">
                Most popular
              </span>
              <div className="text-lg font-semibold text-gray-900">Growth</div>
              <div className="mt-2">
                <span className="text-4xl font-bold text-gray-900">$297</span>
                <span className="text-base font-normal text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 mb-6">The full system — never miss a lead, dominate your local market.</p>
              <div className="h-px bg-gray-100 my-6" />
              <ul className="flex flex-col gap-3 flex-1">
                {[
                  "Everything in Starter, plus:",
                  "Missed call text-back automation",
                  "Google Maps SEO optimization",
                  "CRM & lead pipeline management",
                  "Tap-to-pay mobile payments",
                  "Reputation monitoring dashboard",
                  "Unlimited chat & email support",
                  "Priority setup (live in 24 hours)",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-8 w-full py-3 rounded-2xl text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-colors text-center">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center">
              <LogoMark size={28} />
              <span className="text-lg font-semibold text-gray-900 ml-2">{BRAND}</span>
            </div>
            <div className="flex gap-6 flex-wrap">
              {[...NAV_LINKS, { label: "Contact", href: "#" }].map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {l.label}
                </a>
              ))}
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-400">© 2026 {BRAND}. All rights reserved.</div>
            <a href={`mailto:${EMAIL}`} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              {EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
