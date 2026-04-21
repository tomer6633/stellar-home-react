import { useNavigate } from "react-router-dom";
import { business } from "../data/BusinessData";

export default function Navbar() {
  const navigate = useNavigate();

  const links = [
    { label: "Services", hash: "#services" },
    { label: "About", hash: "#about" },
    { label: "Reviews", hash: "#reviews" },
    { label: "Contact", hash: "#contact" },
  ];

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 200);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold text-gray-900 oswald tracking-tight bg-transparent border-none cursor-pointer"
        >
          Absolute <span style={{ color: business.colorPrimary }}>Drywall</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => scrollTo(l.hash)}
                className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors cursor-pointer bg-transparent border-none"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`tel:${business.phoneRaw}`}
          className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-md"
          style={{ backgroundColor: business.colorPrimary }}
        >
          📞 Free Quote
        </a>

        {/* Mobile: Call Now */}
        <a
          href={`tel:${business.phoneRaw}`}
          className="md:hidden inline-flex items-center gap-1 text-white text-sm font-bold px-4 py-2 rounded-lg"
          style={{ backgroundColor: business.colorPrimary }}
        >
          📞 Call Now
        </a>
      </div>
    </nav>
  );
}
