import { useNavigate } from "react-router-dom";
import { MapPin, Play } from "lucide-react";

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer border border-slate-200"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      {/* Video thumbnail */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-900">
        <video
          src={property.video}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          muted
          playsInline
          preload="metadata"
          // seek to 1s so the poster frame isn't a black frame
          onLoadedMetadata={(e) => {
            e.target.currentTime = 1;
          }}
        />
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="bg-white/80 rounded-full p-2.5">
            <Play size={18} className="text-gray-900 ml-0.5" />
          </div>
        </div>
        <span
          className="absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "rgba(0, 71, 171, 0.55)" }}
        >
          {property.tag}
        </span>
      </div>

      <div className="p-4" style={{ backgroundColor: "#F8F9FA" }}>
        <h3 className="font-bold text-gray-900 text-base mb-1 truncate">
          {property.title}
        </h3>
        <div
          className="flex items-center gap-1 text-sm mb-3"
          style={{ color: "#4A4A4A" }}
        >
          <MapPin size={13} />
          <span className="truncate">{property.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-base" style={{ color: "#0047AB" }}>
            {property.price}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/property/${property.id}`);
            }}
            className="text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
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
