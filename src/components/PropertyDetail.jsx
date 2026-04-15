import { useParams, useNavigate } from "react-router-dom";
import { MapPin, CheckCircle2, ArrowLeft, Home } from "lucide-react";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";
import { properties } from "../data";
import logo from "../assets/double-o.png";

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <p className="text-gray-400 text-lg">Property not found.</p>
        <button
          onClick={() => navigate("/")}
          className="font-semibold text-sm underline"
          style={{ color: "#0047AB" }}
        >
          Back to listings
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 text-sm mb-8"
          style={{ color: "#4A4A4A" }}
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
          >
            <Home size={14} />
            Home
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400 truncate max-w-xs">
            {property.title}
          </span>
        </div>

        {/* Top CTA banner */}
        <div
          className="rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 border"
          style={{
            background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
            borderColor: "#BFDBFE",
          }}
        >
          <div>
            <p className="font-bold text-sm text-gray-900">
              Interested in this property?
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Message us on WhatsApp for a quick response.
            </p>
          </div>
          <WhatsAppButton
            label="Contact on WhatsApp"
            className="text-sm px-6 py-2.5 rounded-xl flex-shrink-0"
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — video + info */}
          <div className="lg:col-span-3 space-y-8">
            {/* Video */}
            <div className="rounded-3xl overflow-hidden bg-gray-900 aspect-[9/16] max-w-xs mx-auto lg:mx-0 shadow-2xl">
              <video
                src={property.video}
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  e.target.currentTime = 1;
                }}
              />
            </div>

            {/* Title block */}
            <div>
              <span
                className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide"
                style={{ backgroundColor: "#0047AB" }}
              >
                {property.tag}
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
                {property.title}
              </h1>
              <div
                className="flex items-center gap-1.5 text-sm font-medium"
                style={{ color: "#4A4A4A" }}
              >
                <MapPin size={14} style={{ color: "#0047AB" }} />
                {property.location}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-gray-900 mb-3">
                About this property
              </h2>
              <p className="leading-relaxed text-sm text-gray-500">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-gray-900 mb-4">
                Features & Amenities
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#0047AB" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — sticky pricing */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-5">
              {/* Price card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <div className="mb-5 pb-5 border-b border-gray-100">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">
                    Annual Rent
                  </p>
                  <p
                    className="text-3xl font-black"
                    style={{ color: "#0047AB" }}
                  >
                    {property.priceDetails.rent}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {property.priceDetails.period}
                  </p>
                </div>
                <div className="space-y-3 text-sm mb-5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Caution Fee</span>
                    <span className="font-semibold text-gray-800">
                      {property.priceDetails.cautionFee}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Agency Fee</span>
                    <span className="font-semibold text-gray-800">
                      {property.priceDetails.agencyFee}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="font-bold text-gray-900">
                      Total Move-in
                    </span>
                    <span
                      className="font-black text-lg"
                      style={{ color: "#0047AB" }}
                    >
                      {property.priceDetails.total}
                    </span>
                  </div>
                </div>
                <WhatsAppButton
                  label="Inquire on WhatsApp"
                  className="w-full justify-center text-sm py-3 rounded-xl shadow-none"
                />
              </div>

              {/* Contact nudge */}
              <div
                className="rounded-2xl p-5 text-center"
                style={{ backgroundColor: "#0047AB" }}
              >
                <p className="text-white font-bold text-sm mb-1">
                  Have questions?
                </p>
                <p className="text-blue-200 text-xs mb-4">
                  We're available and respond quickly.
                </p>
                <a
                  href="https://wa.me/2348166610041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs font-semibold underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  +234 816 661 0041
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-3xl p-10 text-center text-white relative overflow-hidden"
          style={{ backgroundColor: "#0047AB" }}
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-10 bg-white" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-10 bg-white" />
          <div className="relative z-10">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-3">
              Don't Wait
            </p>
            <h3 className="text-2xl font-black mb-2">
              Secure this property today
            </h3>
            <p className="text-blue-200 text-sm mb-8 max-w-sm mx-auto">
              Properties go fast. Reach out now to book a viewing or ask any
              questions.
            </p>
            <WhatsAppButton
              label="Contact on WhatsApp"
              className="text-base px-10 py-4 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
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
