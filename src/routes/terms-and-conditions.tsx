import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import wizardLogo from "@/assets/wizard.png.asset.json";
import { Menu, X } from "lucide-react";

const BRAND = "WizardLeads";
const EMAIL = "louisbruck@yahoo.com";
const PHONE = "+352 621 610 554";
const NAV_LINKS: { label: string; href: string }[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
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

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: `Terms and Conditions — ${BRAND}` },
      { name: "description", content: `Terms and Conditions for ${BRAND}` },
      { property: "og:title", content: `Terms and Conditions — ${BRAND}` },
      { property: "og:description", content: `Terms and Conditions for ${BRAND}` },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <div className="relative w-full p-3 sm:p-4 md:p-6 pb-0">
        <nav className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <Link to="/">
              <LogoMark />
            </Link>
            <Link to="/" className="text-base font-semibold text-gray-900">
              WizardLeads
            </Link>
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
              href="/#pricing"
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
          <div className="sm:hidden absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3 z-20 mx-3 sm:mx-4 md:mx-6">
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
              href="/#pricing"
              onClick={() => setMenuOpen(false)}
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-xl text-center"
            >
              Get started
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-[720px] mx-auto">
          <p className="text-sm text-gray-500 font-medium mb-2">(A2P Compliant Mobile Messaging Terms)</p>
          <p className="text-sm text-gray-400 mb-8">Last Updated: June 6, 2026</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
            Terms and Conditions
          </h1>

          <p className="text-gray-600 leading-relaxed text-[15px] mb-10">
            These Terms and Conditions govern your use of Wizard Leads services, including our website and our SMS and email communications programs. By using our services or opting into our communications, you agree to these Terms and our{" "}
            <Link to="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <div className="space-y-10">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Program Description
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Wizard Leads may send SMS and email messages to users who opt in. Messages may include promotional offers, service updates, appointment confirmations, and appointment reminders. Message frequency may vary.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Consent to Receive Messages
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                By providing your phone number and opting in, you authorize Wizard Leads to send text messages to your mobile number. Consent is not a condition of purchase.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Opt Out
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                You can cancel the SMS service at any time. Just text "STOP" to{" "}
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-blue-600 hover:underline">{PHONE}</a>
                . After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Opt In Again
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                If you want to rejoin after opting out, you can opt in again using the same method you used to enroll originally.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                5. Help and Support
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly at{" "}
                <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:underline">{EMAIL}</a>
                {" "}or{" "}
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-blue-600 hover:underline">{PHONE}</a>
                .
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                6. Message Frequency and Rates
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Message and data rates may apply for any messages sent to you from us and to us from you. You will receive recurring messages. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                7. Carrier Disclaimer
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                8. Privacy
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Your use of the messaging program is also governed by our Privacy Policy. You can view it here:{" "}
                <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                9. Changes to Terms
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                We may update these Terms from time to time. Updates will be posted with a new "Last Updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                10. Contact
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                Questions about these Terms can be sent to:
              </p>
              <ul className="list-none space-y-1 text-gray-600 text-[15px]">
                <li><strong className="text-gray-900">Wizard Leads</strong></li>
                <li><strong className="text-gray-900">Address:</strong> Rue Michel Rodange, Luxembourg</li>
                <li><strong className="text-gray-900">Phone:</strong> <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-blue-600 hover:underline">{PHONE}</a></li>
                <li><strong className="text-gray-900">Email:</strong> <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:underline">{EMAIL}</a></li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
                If you have any questions regarding privacy, please read our privacy policy:{" "}
                <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center">
              <LogoMark size={28} />
              <span className="text-lg font-semibold text-gray-900 ml-2">{BRAND}</span>
            </div>
            <div className="flex gap-6 flex-wrap">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {l.label}
                </a>
              ))}
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-sm text-gray-900 font-medium">Terms & Conditions</Link>
              <a href={`mailto:${EMAIL}`} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
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
