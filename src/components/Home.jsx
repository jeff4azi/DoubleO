import { useRef } from "react";
import { ShieldCheck, MapPin, Building2, ChevronDown } from "lucide-react";
import logo from "../assets/double-o.png";
import heroBg from "../assets/backgroundimage.avif";
import Navbar from "./Navbar";
import PropertyCard from "./PropertyCard";
import WhatsAppButton from "./WhatsAppButton";
import { properties } from "../data";

export default function Home() {
  const listingsRef = useRef(null);
  const scrollToListings = () =>
    listingsRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative text-white min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(0,15,60,0.82) 0%, rgba(0,40,120,0.72) 100%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-blue-200 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 border border-white/20 bg-white/5 backdrop-blur-sm">
            <Building2 size={12} />
            Trusted Housing in Akure
          </div>

          <img
            src={logo}
            alt="Double O"
            className="h-20 w-auto object-contain mx-auto mb-8 drop-shadow-2xl"
          />

          <h1
            className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-5"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
          >
            DOUBLE O HOUSING
            <br />
            <span style={{ color: "#60a5fa" }}>AND SERVICES</span>
          </h1>

          <p
            className="text-blue-100/90 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed font-light"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
          >
            Find safe and affordable housing near your school and city
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToListings}
              className="font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 bg-white"
              style={{ color: "#0047AB" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#E2E8F0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
            >
              Browse Listings
            </button>
            <WhatsAppButton
              label="Chat on WhatsApp"
              className="px-8 py-4 rounded-2xl text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            />
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={scrollToListings}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-3 divide-x divide-gray-100">
          {[
            { value: "50+", label: "Properties Listed" },
            { value: "200+", label: "Happy Tenants" },
            { value: "5+", label: "Years Experience" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <div className="text-2xl font-black" style={{ color: "#0047AB" }}>
                {value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5 font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "#0047AB" }}
              >
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5">
                Housing made simple,
                <br />
                safe & affordable
              </h2>
              <p className="leading-relaxed text-gray-500 mb-6">
                We help students and individuals find safe, affordable and
                well-located apartments. With years of experience in the Akure
                housing market, Double O Housing and Services connects you to
                verified properties that match your budget and lifestyle.
              </p>
              <WhatsAppButton
                label="Talk to Us"
                className="text-sm px-6 py-3 rounded-xl"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: <ShieldCheck size={22} />,
                  title: "Verified Properties",
                  desc: "Every listing is personally inspected and verified.",
                },
                {
                  icon: <MapPin size={22} />,
                  title: "Prime Locations",
                  desc: "Close to schools, markets and transport hubs.",
                },
                {
                  icon: <Building2 size={22} />,
                  title: "All Budgets Welcome",
                  desc: "From student rooms to luxury apartments.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                >
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "#E2E8F0", color: "#0047AB" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm mb-0.5">
                      {title}
                    </div>
                    <div className="text-gray-500 text-xs leading-relaxed">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Listings ── */}
      <section
        ref={listingsRef}
        className="py-20 px-6"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#0047AB" }}
              >
                Available Now
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Featured Properties
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-right hidden sm:block">
              Browse our current listings and find your perfect home
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-24 px-6 text-white relative overflow-hidden"
        style={{ backgroundColor: "#0047AB" }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 bg-white" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10 bg-white" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            Ready to find your next home?
          </h2>
          <p className="text-blue-200 mb-10 text-lg font-light max-w-md mx-auto">
            We respond fast. Message us on WhatsApp and secure your apartment
            today.
          </p>
          <WhatsAppButton
            label="Contact on WhatsApp"
            className="text-base px-10 py-4 rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src={logo}
            alt="Double O"
            className="h-8 w-auto object-contain opacity-80"
          />
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Double O Housing and Services. All
            rights reserved.
          </p>
          <a
            href="https://wa.me/2348166610041"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 text-sm transition-colors font-medium"
          >
            +234 816 661 0041
          </a>
        </div>
      </footer>
    </div>
  );
}
