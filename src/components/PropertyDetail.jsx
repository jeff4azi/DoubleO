import { useParams, useNavigate } from "react-router-dom";
import { MapPin, CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";
import { properties } from "../data";

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Property not found.</p>
        <button
          onClick={() => navigate("/")}
          className="font-semibold underline"
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

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm font-medium mb-6 transition-colors"
          style={{ color: "#4A4A4A" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0047AB")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#4A4A4A")}
        >
          <ArrowLeft size={16} />
          Back to Listings
        </button>

        {/* Top CTA */}
        <div
          className="rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 border"
          style={{ backgroundColor: "#E2E8F0", borderColor: "#cbd5e1" }}
        >
          <p className="font-semibold text-sm" style={{ color: "#0047AB" }}>
            Interested in this property? Contact us now.
          </p>
          <WhatsAppButton
            label="Contact on WhatsApp"
            className="text-sm px-5 py-2.5"
          />
        </div>

        {/* Video Player */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-gray-900 aspect-[9/16] max-w-sm mx-auto">
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

        {/* Title & Location */}
        <div className="mb-6">
          <span
            className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-3"
            style={{ backgroundColor: "#0047AB" }}
          >
            {property.tag}
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            {property.title}
          </h1>
          <div
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "#4A4A4A" }}
          >
            <MapPin size={15} />
            {property.location}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Description + Features */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Description
              </h2>
              <p className="leading-relaxed" style={{ color: "#4A4A4A" }}>
                {property.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Features & Amenities
              </h2>
              <ul className="space-y-2.5">
                {property.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "#4A4A4A" }}
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#0047AB" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Pricing</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: "#4A4A4A" }}>Annual Rent</span>
                  <span className="font-bold text-gray-900">
                    {property.priceDetails.rent}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#4A4A4A" }}>Caution Fee</span>
                  <span className="font-semibold text-gray-700">
                    {property.priceDetails.cautionFee}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#4A4A4A" }}>Agency Fee</span>
                  <span className="font-semibold text-gray-700">
                    {property.priceDetails.agencyFee}
                  </span>
                </div>
                <div
                  className="border-t pt-3 flex justify-between"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <span className="font-bold text-gray-900">Total Move-in</span>
                  <span
                    className="font-extrabold text-base"
                    style={{ color: "#0047AB" }}
                  >
                    {property.priceDetails.total}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-5 text-white text-center"
              style={{ backgroundColor: "#0047AB" }}
            >
              <p className="font-semibold text-sm mb-3">
                Ready to move in? Talk to us.
              </p>
              <WhatsAppButton
                label="Contact on WhatsApp"
                className="w-full justify-center text-sm py-2.5 px-4 shadow-none"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-10 rounded-2xl p-8 text-center text-white"
          style={{ backgroundColor: "#0047AB" }}
        >
          <h3 className="text-xl font-bold mb-2">
            Don't miss out on this property
          </h3>
          <p className="text-blue-100 text-sm mb-6">
            Properties go fast. Reach out on WhatsApp now to book a viewing or
            ask questions.
          </p>
          <WhatsAppButton
            label="Contact on WhatsApp"
            className="text-base px-8 py-3.5"
          />
        </div>
      </div>

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
