import { useRef } from "react";
import { ShieldCheck, MapPin, Building2 } from "lucide-react";
import logo from "../assets/double-o.png";
import heroBg from "../assets/backgroundimage.avif";
import Navbar from "./Navbar";
import PropertyCard from "./PropertyCard";
import WhatsAppButton from "./WhatsAppButton";
import { properties } from "../data";

export default function Home() {
  const listingsRef = useRef(null);

  const scrollToListings = () => {
    listingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-white pt-28 pb-20 px-4"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,20,80,0.75) 0%, rgba(0,40,120,0.70) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-6 bg-white/10">
            <Building2 size={14} />
            Trusted Housing in Akure
          </div>
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Double O Housing & Services"
              className="h-24 w-auto object-contain drop-shadow-lg"
            />
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            DOUBLE O HOUSING
            <br />
            <span style={{ color: "#2E90FF" }}>AND SERVICES</span>
          </h1>
          <p
            className="text-blue-100 text-lg md:text-xl mb-8 max-w-xl mx-auto"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
          >
            Find safe and affordable housing near your school and city
          </p>
          <button
            onClick={scrollToListings}
            className="font-bold px-8 py-3.5 rounded-xl text-base transition-colors shadow-lg bg-white"
            style={{ color: "#0047AB" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#E2E8F0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffffff")
            }
          >
            View Listings
          </button>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">About Us</h2>
            <p className="leading-relaxed" style={{ color: "#4A4A4A" }}>
              We help students and individuals find safe, affordable and
              well-located apartments. With years of experience in the Akure
              housing market, Double O Housing and Services connects you to
              verified properties that match your budget and lifestyle.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            {[
              { icon: <ShieldCheck size={20} />, label: "Verified Properties" },
              { icon: <MapPin size={20} />, label: "Prime Locations" },
              { icon: <Building2 size={20} />, label: "All Budgets" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm"
                style={{ backgroundColor: "#E2E8F0", color: "#0047AB" }}
              >
                {icon}
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section
        ref={listingsRef}
        className="py-14 px-4"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Featured Properties
            </h2>
            <p style={{ color: "#4A4A4A" }}>
              Browse our available listings and find your next home
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ backgroundColor: "#0047AB" }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Find Your Home?
          </h2>
          <p className="text-blue-100 mb-8">
            Reach out to us directly on WhatsApp. We respond fast and help you
            secure your apartment quickly.
          </p>
          <WhatsAppButton
            label="Contact on WhatsApp"
            className="text-base px-8 py-4"
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-gray-400 text-center py-6 text-sm"
        style={{ backgroundColor: "#4A4A4A" }}
      >
        © {new Date().getFullYear()} Double O Housing and Services. All rights
        reserved.
      </footer>
    </div>
  );
}
