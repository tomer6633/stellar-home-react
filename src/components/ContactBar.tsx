import { business } from "../data/BusinessData";

export default function ContactBar() {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 text-white font-bold text-base py-4 shadow-2xl"
      style={{ backgroundColor: business.colorPrimary }}
    >
      📞 Tap to Call {business.ownerName} — {business.phone}
    </a>
  );
}
