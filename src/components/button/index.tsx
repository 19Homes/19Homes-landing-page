import { ArrowRight } from "lucide-react";
import { MouseEventHandler } from "react";

export default function Button({
  text,
  onclick,
}: {
  text: string;
  onclick: MouseEventHandler;
}) {
  return (
    <button
      className="border-gold-100 text-gold-100 font-montserrat hover:bg-gold-100 flex items-center justify-center gap-3.5 rounded-sm border bg-white px-4.5 py-3 text-[10px] font-bold capitalize duration-200 hover:text-white hover:shadow-[3px_5px_10px_#0000007f] lg:px-6 lg:py-4 lg:text-sm"
      onClick={onclick}
    >
      <span>{text}</span>
      <ArrowRight width={16} />
    </button>
  );
}
