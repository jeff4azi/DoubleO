import { Link } from "react-router-dom";
import logo from "../assets/double-o.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Double O Housing & Services"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <a
          href="https://wa.me/2348166610041"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          WhatsApp Us
        </a>
      </div>
    </nav>
  );
}
