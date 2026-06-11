import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const BRAND = "WizardLeads";
const EMAIL = "louisbruck@yahoo.com";
const NAV_LINKS: { label: string; href: string }[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
];

const LogoMark = () => (
  <img src="/wizardsite45.png" alt="Wizard Leads" className="h-8 w-auto" />
);

function PrivacyPolicy() {
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
            <a
              href="/#pricing"
              className="bg-black text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors"
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
                className="text-gray-800 text-sm font-semibold hover:opacity-60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#pricing"
              onClick={() => setMenuOpen(false)}
              className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-xl text-center"
            >
              Get started
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-[720px] mx-auto">
          <p className="text-sm text-gray-400 mb-8">Last Updated: June 6, 2026</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
            Privacy Policy
          </h1>

          <div className="space-y-10">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Introduction
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Wizard Leads ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services, including SMS marketing, email marketing, appointment reminders, and website tracking tools. By using our services or opting into our communications, you agree to this Privacy Policy and our{" "}
                <Link to="/terms-and-conditions" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </Link>
                .
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Information We Collect
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  <strong className="text-gray-900">Contact information</strong>
                  <br />
                  We may collect your name, email address, phone number, and mailing address when you submit forms, book appointments, request information, or otherwise provide it to us.
                </p>
                <p>
                  <strong className="text-gray-900">Communications data</strong>
                  <br />
                  If you opt in, we collect your messaging preferences and maintain records of consent and opt-out activity related to SMS and email communications.
                </p>
                <p>
                  <strong className="text-gray-900">Usage and device information</strong>
                  <br />
                  We may use cookies, pixels, and analytics tools to collect information about how you use our website. This may include your IP address, browser type, pages visited, and interaction data.
                </p>
                <p>
                  <strong className="text-gray-900">Appointment and service data</strong>
                  <br />
                  If you schedule appointments or use our services, we may collect details associated with those interactions.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. How We Use Your Information
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-3">
                We use your information to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600 leading-relaxed text-[15px]">
                <li>Provide requested services and customer support</li>
                <li>Send appointment confirmations and reminders</li>
                <li>Send SMS and email communications that you have explicitly consented to receive</li>
                <li>Improve our website and marketing performance using analytics</li>
                <li>Maintain compliance records related to consent and opt-outs</li>
                <li>Protect our business and users, including fraud and security monitoring</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                We use cookies and similar technologies to personalize your experience and understand how our website is used. You can control cookies through your browser settings. Some features may not work correctly if cookies are disabled.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                5. How We Share Your Information
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-3">
                We do not sell your personal information. We do not share mobile phone numbers, SMS opt-in data, or consent information with third parties or affiliates for marketing or promotional purposes. We may share information only in the following limited circumstances:
              </p>
              <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  <strong className="text-gray-900">Service providers</strong>
                  <br />
                  We may share information with trusted vendors who help us deliver services, such as SMS and email delivery, customer support tools, scheduling tools, and analytics providers. These providers may only use information to perform services on our behalf.
                </p>
                <p>
                  <strong className="text-gray-900">Legal and safety</strong>
                  <br />
                  We may disclose information if required by law or to protect the rights, safety, and security of Wizard Leads, our users, or others.
                </p>
                <p>
                  <strong className="text-gray-900">Business transfers</strong>
                  <br />
                  If Wizard Leads is involved in a merger, acquisition, or asset sale, information may be transferred as part of that transaction. Any successor will be required to honor this Privacy Policy.
                </p>
                <p>
                  <strong className="text-gray-900">Third-party sharing</strong>
                  <br />
                  No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                6. Your Choices
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  <strong className="text-gray-900">SMS opt-out</strong>
                  <br />
                  You can opt out of SMS messages at any time by replying STOP to any message. After you send STOP, we will send a confirmation message and you will no longer receive SMS messages unless you opt back in.
                </p>
                <p>
                  <strong className="text-gray-900">Email opt-out</strong>
                  <br />
                  You can unsubscribe from marketing emails by clicking the unsubscribe link in the email.
                </p>
                <p>
                  <strong className="text-gray-900">Access and correction</strong>
                  <br />
                  You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable law.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                7. Data Security
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission or storage is fully secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                8. Children's Privacy
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Our services are not intended for children under 13 and we do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                9. Updates to This Policy
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                We may update this Privacy Policy from time to time. The updated version will be posted with a new "Last Updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                10. Contact Us
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                If you have questions about this Privacy Policy, contact:
              </p>
              <ul className="list-none space-y-1 text-gray-600 text-[15px]">
                <li><strong className="text-gray-900">Wizard Leads</strong></li>
                <li><strong className="text-gray-900">Address:</strong> Rue Michel Rodange, Luxembourg</li>
                <li><strong className="text-gray-900">Phone:</strong> +352 621 610 554</li>
                <li><strong className="text-gray-900">Email:</strong> <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:underline">{EMAIL}</a></li>
              </ul>
            </section>
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
              <Link to="/privacy-policy" className="text-sm text-gray-900 font-semibold">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms & Conditions</Link>
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

export default PrivacyPolicy;

