import { MessageCircle, Phone } from "lucide-react";

// TODO: thay bằng link Zalo OA và số điện thoại thật của POSO
const ZALO_OA_URL = "https://zalo.me/poso";
const PHONE_NUMBER = "0900000000";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <a
        href={ZALO_OA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat qua Zalo OA"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Zalo OA</span>
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Gọi điện cho POSO"
        className="relative flex h-13 w-13 items-center justify-center rounded-full bg-poso text-poso-foreground shadow-lg shadow-black/20 transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-poso/40" />
        <Phone className="relative h-6 w-6" />
      </a>
    </div>
  );
}
