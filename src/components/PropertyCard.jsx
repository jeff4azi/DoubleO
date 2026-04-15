import { useNavigate } from "react-router-dom";
import { MapPin, Play } from "lucide-react";

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-md border border-gray-100"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      {/* Video thumbnail */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-900">
        <video
          src={property.video}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={(e) => {
            e.target.currentTime = 1;
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <Play size={20} className="ml-0.5" style={{ color: "#0047AB" }} />
          </div>
        </div>

        {/* Tag */}
        <span
          className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
          style={{ backgroundColor: "rgba(0, 71, 171, 0.5)" }}
        >
          {property.tag}
        </span>

        {/* Price on image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="text-white font-bold text-lg drop-shadow-lg">
            {property.price}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-base mb-1.5 leading-snug">
          {property.title}
        </h3>
        <div
          className="flex items-center gap-1.5 text-sm"
          style={{ color: "#4A4A4A" }}
        >
          <MapPin
            size={13}
            className="flex-shrink-0"
            style={{ color: "#0047AB" }}
          />
          <span className="truncate">{property.location}</span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/property/${property.id}`);
            }}
            className="w-full text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
            style={{ backgroundColor: "#0047AB" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2E90FF")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0047AB")
            }
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
