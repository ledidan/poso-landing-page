import { Phone } from "lucide-react";

// Contact destinations published on the official Poso website.
const ZALO_OA_URL = "https://zalo.me/1195309796934215464";
const PHONE_NUMBER = "0977140536";

export function FloatingContact() {
  return (
    <nav aria-label="Liên hệ Poso" className="poso-floating-contact">
      <a
        href={ZALO_OA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat với Poso qua Zalo"
        className="poso-contact-zalo"
      >
        <img src="/logo-zalo.webp" alt="Zalo" width={1200} height={420} />
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Gọi Poso: 0977 140 536"
        className="poso-contact-phone"
      >
        <Phone size={20} aria-hidden="true" />
        <span>0977 140 536</span>
      </a>
    </nav>
  );
}
