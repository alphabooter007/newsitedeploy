import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Menu,
  X,
  Phone,
  Mail,
  User,
  Building2,
  ChevronDown,
} from "lucide-react";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/5naD8LS1VInf6GbdExXJ/webhook-trigger/7718895f-c75b-45b3-81a7-808a09ac16fa";

const BRAND = "WizardLeads";
const EMAIL = "louisbruck@yahoo.com";
const NAV_LINKS: { label: string; href: string }[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
];

const COUNTRIES = [
  { flag: "🇺🇸", code: "+1", name: "United States" },
  { flag: "🇨🇦", code: "+1", name: "Canada" },
  { flag: "🇬🇧", code: "+44", name: "United Kingdom" },
  { flag: "🇦🇫", code: "+93", name: "Afghanistan" },
  { flag: "🇦🇱", code: "+355", name: "Albania" },
  { flag: "🇩🇿", code: "+213", name: "Algeria" },
  { flag: "🇦🇩", code: "+376", name: "Andorra" },
  { flag: "🇦🇴", code: "+244", name: "Angola" },
  { flag: "🇦🇬", code: "+1", name: "Antigua and Barbuda" },
  { flag: "🇦🇷", code: "+54", name: "Argentina" },
  { flag: "🇦🇲", code: "+374", name: "Armenia" },
  { flag: "🇦🇺", code: "+61", name: "Australia" },
  { flag: "🇦🇹", code: "+43", name: "Austria" },
  { flag: "🇦🇿", code: "+994", name: "Azerbaijan" },
  { flag: "🇧🇸", code: "+1", name: "Bahamas" },
  { flag: "🇧🇭", code: "+973", name: "Bahrain" },
  { flag: "🇧🇩", code: "+880", name: "Bangladesh" },
  { flag: "🇧🇧", code: "+1", name: "Barbados" },
  { flag: "🇧🇾", code: "+375", name: "Belarus" },
  { flag: "🇧🇪", code: "+32", name: "Belgium" },
  { flag: "🇧🇿", code: "+501", name: "Belize" },
  { flag: "🇧🇯", code: "+229", name: "Benin" },
  { flag: "🇧🇹", code: "+975", name: "Bhutan" },
  { flag: "🇧🇴", code: "+591", name: "Bolivia" },
  { flag: "🇧🇦", code: "+387", name: "Bosnia and Herzegovina" },
  { flag: "🇧🇼", code: "+267", name: "Botswana" },
  { flag: "🇧🇷", code: "+55", name: "Brazil" },
  { flag: "🇧🇳", code: "+673", name: "Brunei" },
  { flag: "🇧🇬", code: "+359", name: "Bulgaria" },
  { flag: "🇧🇫", code: "+226", name: "Burkina Faso" },
  { flag: "🇧🇮", code: "+257", name: "Burundi" },
  { flag: "🇰🇭", code: "+855", name: "Cambodia" },
  { flag: "🇨🇲", code: "+237", name: "Cameroon" },
  { flag: "🇨🇻", code: "+238", name: "Cape Verde" },
  { flag: "🇨🇫", code: "+236", name: "Central African Republic" },
  { flag: "🇹🇩", code: "+235", name: "Chad" },
  { flag: "🇨🇱", code: "+56", name: "Chile" },
  { flag: "🇨🇳", code: "+86", name: "China" },
  { flag: "🇨🇴", code: "+57", name: "Colombia" },
  { flag: "🇰🇲", code: "+269", name: "Comoros" },
  { flag: "🇨🇬", code: "+242", name: "Congo" },
  { flag: "🇨🇩", code: "+243", name: "Congo (DRC)" },
  { flag: "🇨🇷", code: "+506", name: "Costa Rica" },
  { flag: "🇭🇷", code: "+385", name: "Croatia" },
  { flag: "🇨🇺", code: "+53", name: "Cuba" },
  { flag: "🇨🇾", code: "+357", name: "Cyprus" },
  { flag: "🇨🇿", code: "+420", name: "Czech Republic" },
  { flag: "🇩🇰", code: "+45", name: "Denmark" },
  { flag: "🇩🇯", code: "+253", name: "Djibouti" },
  { flag: "🇩🇲", code: "+1", name: "Dominica" },
  { flag: "🇩🇴", code: "+1", name: "Dominican Republic" },
  { flag: "🇪🇨", code: "+593", name: "Ecuador" },
  { flag: "🇪🇬", code: "+20", name: "Egypt" },
  { flag: "🇸🇻", code: "+503", name: "El Salvador" },
  { flag: "🇬🇶", code: "+240", name: "Equatorial Guinea" },
  { flag: "🇪🇷", code: "+291", name: "Eritrea" },
  { flag: "🇪🇪", code: "+372", name: "Estonia" },
  { flag: "🇸🇿", code: "+268", name: "Eswatini" },
  { flag: "🇪🇹", code: "+251", name: "Ethiopia" },
  { flag: "🇫🇯", code: "+679", name: "Fiji" },
  { flag: "🇫🇮", code: "+358", name: "Finland" },
  { flag: "🇫🇷", code: "+33", name: "France" },
  { flag: "🇬🇦", code: "+241", name: "Gabon" },
  { flag: "🇬🇲", code: "+220", name: "Gambia" },
  { flag: "🇬🇪", code: "+995", name: "Georgia" },
  { flag: "🇩🇪", code: "+49", name: "Germany" },
  { flag: "🇬🇭", code: "+233", name: "Ghana" },
  { flag: "🇬🇷", code: "+30", name: "Greece" },
  { flag: "🇬🇩", code: "+1", name: "Grenada" },
  { flag: "🇬🇹", code: "+502", name: "Guatemala" },
  { flag: "🇬🇳", code: "+224", name: "Guinea" },
  { flag: "🇬🇼", code: "+245", name: "Guinea-Bissau" },
  { flag: "🇬🇾", code: "+592", name: "Guyana" },
  { flag: "🇭🇹", code: "+509", name: "Haiti" },
  { flag: "🇭🇳", code: "+504", name: "Honduras" },
  { flag: "🇭🇺", code: "+36", name: "Hungary" },
  { flag: "🇮🇸", code: "+354", name: "Iceland" },
  { flag: "🇮🇳", code: "+91", name: "India" },
  { flag: "🇮🇩", code: "+62", name: "Indonesia" },
  { flag: "🇮🇷", code: "+98", name: "Iran" },
  { flag: "🇮🇶", code: "+964", name: "Iraq" },
  { flag: "🇮🇪", code: "+353", name: "Ireland" },
  { flag: "🇮🇱", code: "+972", name: "Israel" },
  { flag: "🇮🇹", code: "+39", name: "Italy" },
  { flag: "🇯🇲", code: "+1", name: "Jamaica" },
  { flag: "🇯🇵", code: "+81", name: "Japan" },
  { flag: "🇯🇴", code: "+962", name: "Jordan" },
  { flag: "🇰🇿", code: "+7", name: "Kazakhstan" },
  { flag: "🇰🇪", code: "+254", name: "Kenya" },
  { flag: "🇰🇮", code: "+686", name: "Kiribati" },
  { flag: "🇰🇷", code: "+82", name: "South Korea" },
  { flag: "🇰🇼", code: "+965", name: "Kuwait" },
  { flag: "🇰🇬", code: "+996", name: "Kyrgyzstan" },
  { flag: "🇱🇦", code: "+856", name: "Laos" },
  { flag: "🇱🇻", code: "+371", name: "Latvia" },
  { flag: "🇱🇧", code: "+961", name: "Lebanon" },
  { flag: "🇱🇸", code: "+266", name: "Lesotho" },
  { flag: "🇱🇷", code: "+231", name: "Liberia" },
  { flag: "🇱🇾", code: "+218", name: "Libya" },
  { flag: "🇱🇮", code: "+423", name: "Liechtenstein" },
  { flag: "🇱🇹", code: "+370", name: "Lithuania" },
  { flag: "🇱🇺", code: "+352", name: "Luxembourg" },
  { flag: "🇲🇬", code: "+261", name: "Madagascar" },
  { flag: "🇲🇼", code: "+265", name: "Malawi" },
  { flag: "🇲🇾", code: "+60", name: "Malaysia" },
  { flag: "🇲🇻", code: "+960", name: "Maldives" },
  { flag: "🇲🇱", code: "+223", name: "Mali" },
  { flag: "🇲🇹", code: "+356", name: "Malta" },
  { flag: "🇲🇭", code: "+692", name: "Marshall Islands" },
  { flag: "🇲🇷", code: "+222", name: "Mauritania" },
  { flag: "🇲🇺", code: "+230", name: "Mauritius" },
  { flag: "🇲🇽", code: "+52", name: "Mexico" },
  { flag: "🇫🇲", code: "+691", name: "Micronesia" },
  { flag: "🇲🇩", code: "+373", name: "Moldova" },
  { flag: "🇲🇨", code: "+377", name: "Monaco" },
  { flag: "🇲🇳", code: "+976", name: "Mongolia" },
  { flag: "🇲🇪", code: "+382", name: "Montenegro" },
  { flag: "🇲🇦", code: "+212", name: "Morocco" },
  { flag: "🇲🇿", code: "+258", name: "Mozambique" },
  { flag: "🇲🇲", code: "+95", name: "Myanmar" },
  { flag: "🇳🇦", code: "+264", name: "Namibia" },
  { flag: "🇳🇷", code: "+674", name: "Nauru" },
  { flag: "🇳🇵", code: "+977", name: "Nepal" },
  { flag: "🇳🇱", code: "+31", name: "Netherlands" },
  { flag: "🇳🇿", code: "+64", name: "New Zealand" },
  { flag: "🇳🇮", code: "+505", name: "Nicaragua" },
  { flag: "🇳🇪", code: "+227", name: "Niger" },
  { flag: "🇳🇬", code: "+234", name: "Nigeria" },
  { flag: "🇲🇰", code: "+389", name: "North Macedonia" },
  { flag: "🇳🇴", code: "+47", name: "Norway" },
  { flag: "🇴🇲", code: "+968", name: "Oman" },
  { flag: "🇵🇰", code: "+92", name: "Pakistan" },
  { flag: "🇵🇼", code: "+680", name: "Palau" },
  { flag: "🇵🇦", code: "+507", name: "Panama" },
  { flag: "🇵🇬", code: "+675", name: "Papua New Guinea" },
  { flag: "🇵🇾", code: "+595", name: "Paraguay" },
  { flag: "🇵🇪", code: "+51", name: "Peru" },
  { flag: "🇵🇭", code: "+63", name: "Philippines" },
  { flag: "🇵🇱", code: "+48", name: "Poland" },
  { flag: "🇵🇹", code: "+351", name: "Portugal" },
  { flag: "🇶🇦", code: "+974", name: "Qatar" },
  { flag: "🇷🇴", code: "+40", name: "Romania" },
  { flag: "🇷🇺", code: "+7", name: "Russia" },
  { flag: "🇷🇼", code: "+250", name: "Rwanda" },
  { flag: "🇰🇳", code: "+1", name: "Saint Kitts and Nevis" },
  { flag: "🇱🇨", code: "+1", name: "Saint Lucia" },
  { flag: "🇻🇨", code: "+1", name: "Saint Vincent and the Grenadines" },
  { flag: "🇼🇸", code: "+685", name: "Samoa" },
  { flag: "🇸🇲", code: "+378", name: "San Marino" },
  { flag: "🇸🇹", code: "+239", name: "Sao Tome and Principe" },
  { flag: "🇸🇦", code: "+966", name: "Saudi Arabia" },
  { flag: "🇸🇳", code: "+221", name: "Senegal" },
  { flag: "🇷🇸", code: "+381", name: "Serbia" },
  { flag: "🇸🇨", code: "+248", name: "Seychelles" },
  { flag: "🇸🇱", code: "+232", name: "Sierra Leone" },
  { flag: "🇸🇬", code: "+65", name: "Singapore" },
  { flag: "🇸🇰", code: "+421", name: "Slovakia" },
  { flag: "🇸🇮", code: "+386", name: "Slovenia" },
  { flag: "🇸🇧", code: "+677", name: "Solomon Islands" },
  { flag: "🇸🇴", code: "+252", name: "Somalia" },
  { flag: "🇿🇦", code: "+27", name: "South Africa" },
  { flag: "🇸🇸", code: "+211", name: "South Sudan" },
  { flag: "🇪🇸", code: "+34", name: "Spain" },
  { flag: "🇱🇰", code: "+94", name: "Sri Lanka" },
  { flag: "🇸🇩", code: "+249", name: "Sudan" },
  { flag: "🇸🇷", code: "+597", name: "Suriname" },
  { flag: "🇸🇪", code: "+46", name: "Sweden" },
  { flag: "🇨🇭", code: "+41", name: "Switzerland" },
  { flag: "🇸🇾", code: "+963", name: "Syria" },
  { flag: "🇹🇼", code: "+886", name: "Taiwan" },
  { flag: "🇹🇯", code: "+992", name: "Tajikistan" },
  { flag: "🇹🇿", code: "+255", name: "Tanzania" },
  { flag: "🇹🇭", code: "+66", name: "Thailand" },
  { flag: "🇹🇱", code: "+670", name: "Timor-Leste" },
  { flag: "🇹🇬", code: "+228", name: "Togo" },
  { flag: "🇹🇴", code: "+676", name: "Tonga" },
  { flag: "🇹🇹", code: "+1", name: "Trinidad and Tobago" },
  { flag: "🇹🇳", code: "+216", name: "Tunisia" },
  { flag: "🇹🇷", code: "+90", name: "Turkey" },
  { flag: "🇹🇲", code: "+993", name: "Turkmenistan" },
  { flag: "🇹🇻", code: "+688", name: "Tuvalu" },
  { flag: "🇺🇬", code: "+256", name: "Uganda" },
  { flag: "🇺🇦", code: "+380", name: "Ukraine" },
  { flag: "🇦🇪", code: "+971", name: "United Arab Emirates" },
  { flag: "🇺🇾", code: "+598", name: "Uruguay" },
  { flag: "🇺🇿", code: "+998", name: "Uzbekistan" },
  { flag: "🇻🇺", code: "+678", name: "Vanuatu" },
  { flag: "🇻🇪", code: "+58", name: "Venezuela" },
  { flag: "🇻🇳", code: "+84", name: "Vietnam" },
  { flag: "🇾🇪", code: "+967", name: "Yemen" },
  { flag: "🇿🇲", code: "+260", name: "Zambia" },
  { flag: "🇿🇼", code: "+263", name: "Zimbabwe" },
] as const;

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
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!countryOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
        setCountrySearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [countryOpen]);

  useEffect(() => {
    if (countryOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [countryOpen]);

  const filteredCountries = countrySearch
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(countrySearch.toLowerCase())).sort(
        (a, b) => {
          const aStarts = a.name.toLowerCase().startsWith(countrySearch.toLowerCase()) ? 0 : 1;
          const bStarts = b.name.toLowerCase().startsWith(countrySearch.toLowerCase()) ? 0 : 1;
          return aStarts - bStarts || a.name.localeCompare(b.name);
        }
      )
    : COUNTRIES;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);
    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `${selectedCountry.code}${phone}`, email, firstName, lastName, businessName }),
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
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col gap-6">
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
                  <div className="relative" ref={countryRef}>
                    <div className="flex rounded-2xl border-2 border-gray-200 bg-gray-50 focus-within:ring-2 focus-within:ring-black focus-within:border-transparent focus-within:bg-white transition-all">
                      <button
                        type="button"
                        onClick={() => setCountryOpen((v) => !v)}
                        className="flex items-center gap-1.5 pl-3.5 pr-2.5 py-3.5 text-base text-gray-700 border-r border-gray-200 shrink-0 cursor-pointer select-none"
                      >
                        <span className="text-base leading-none">{selectedCountry.flag}</span>
                        <span className="text-sm font-medium text-gray-600">{selectedCountry.code}</span>
                        <ChevronDown size={14} className="text-gray-400" />
                      </button>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 min-w-0 pl-3 pr-4 py-3.5 text-base bg-transparent placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                    {countryOpen && (
                      <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-lg border border-gray-100 z-30">
                        <div className="p-2 border-b border-gray-100">
                          <input
                            ref={searchRef}
                            type="text"
                            placeholder="Search country..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                          />
                        </div>
                        <div className="max-h-56 overflow-y-auto py-1">
                          {filteredCountries.length === 0 ? (
                            <div className="px-3.5 py-3 text-sm text-gray-400 text-center">No countries found</div>
                          ) : (
                            filteredCountries.map((c) => (
                              <button
                                type="button"
                                key={c.code + c.name}
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setCountryOpen(false);
                                  setCountrySearch("");
                                }}
                                className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${selectedCountry.name === c.name ? "bg-gray-50 font-medium" : ""}`}
                              >
                                <span className="text-base leading-none">{c.flag}</span>
                                <span className="text-gray-700">{c.name}</span>
                                <span className="ml-auto text-gray-400 text-xs">{c.code}</span>
                              </button>
                            ))
                          )}
                        </div>
                      </div>
                    )}
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
