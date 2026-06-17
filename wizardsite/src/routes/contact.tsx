import { Link } from "react-router-dom";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Menu,
  X,
  Phone,
  Mail,
  User,
  Building2,
} from "lucide-react";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/5naD8LS1VInf6GbdExXJ/webhook-trigger/7718895f-c75b-45b3-81a7-808a09ac16fa";

const BRAND = "WizardLeads";
const EMAIL = "louisbruck@yahoo.com";
const NAV_LINKS: { label: string; href: string }[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
];

const LogoMark = () => (
  <img src="/wizard.png" alt="Wizard Leads" className="h-11 md:h-14 w-auto" />
);

function Contact() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);
    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email, firstName, lastName, businessName }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch (err) {
      console.error("GHL webhook submit error", err);
      setSendError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <div className="relative w-full p-3 sm:p-4 md:p-6 pb-0">
        <nav className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <Link to="/">
              <LogoMark />
            </Link>
          </div>
          <div className="hidden sm:flex items-center gap-6 ml-auto">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-800 text-sm font-semibold hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/contact"
              className="bg-black text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Contact
            </Link>
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
          <div className="sm:hidden absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3 z-20 mx-3 sm:mx-4 md:mx-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-sm font-semibold hover:opacity-60"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-xl text-center"
            >
              Contact
            </Link>
          </div>
        )}
      </div>

      {/* Contact form */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col gap-6">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-3">
                <Phone size={22} className="text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
                Get in contact
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Tell us about your business and we'll reach out today.
              </p>
            </div>

            {sent ? (
              <div className="flex flex-col items-center text-center py-4 gap-3">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl">
                  ✓
                </div>
                <h2 className="text-base font-semibold text-gray-900">Thanks, we'll be in touch</h2>
                <p className="text-sm text-gray-500">
                  We'll reach out soon to discuss how we can grow your business.
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 text-base rounded-2xl border-2 border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                      />
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="text"
                        required
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-3.5 text-base rounded-2xl border-2 border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Business name (optional)"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 text-base rounded-2xl border-2 border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 text-base rounded-2xl border-2 border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 text-base rounded-2xl border-2 border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <Checkbox
                      checked={consentChecked}
                      onCheckedChange={(v) => setConsentChecked(v === true)}
                      className="mt-0.5 h-4 w-4"
                    />
                    <span className="text-xs text-gray-600 leading-snug">
                      I agree to receive SMS messages from Wizard Leads
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={sending || !consentChecked}
                    className="w-full bg-black text-white text-sm font-semibold py-3.5 rounded-2xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-800"
                  >
                    {sending ? "Sending..." : "Get in contact"}
                  </button>
                  {sendError && (
                    <p className="text-xs text-red-600 text-center">{sendError}</p>
                  )}
                </form>
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  By submitting, you agree to receive SMS messages from Wizard Leads. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out.{" "}
                  <Link to="/privacy-policy" className="underline hover:text-gray-600">Privacy</Link>{" "}
                  ·{" "}
                  <Link to="/terms-and-conditions" className="underline hover:text-gray-600">Terms</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center">
              <LogoMark />
            </div>
            <div className="flex gap-6 flex-wrap">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {l.label}
                </a>
              ))}
              <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-400">© 2026 {BRAND}. All rights reserved.</div>
            <a href={`mailto:${EMAIL}`} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">{EMAIL}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
