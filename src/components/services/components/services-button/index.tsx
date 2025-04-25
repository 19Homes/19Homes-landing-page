import { ArrowRight } from "lucide-react";

export default function ServicesButton() {
  return (
    <button className="px-6 py-4 border border-gold-100 bg-white rounded-sm text-sm text-gold-100 font-montserrat font-bold flex items-center justify-center gap-3.5 capitalize hover:text-white hover:bg-gold-100 duration-200 hover:shadow-[3px_5px_10px_#0000007f]">
      <span>learn more</span>
      <ArrowRight width={16} />
    </button>
  );
}
