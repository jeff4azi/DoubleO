import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function WhatsAppButton({
  label = "Contact on WhatsApp",
  className = "",
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg ${className}`}
    >
      <MessageCircle size={20} />
      {label}
    </a>
  );
}
