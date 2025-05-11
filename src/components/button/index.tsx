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
      className="border-gold-100 text-gold-100 font-montserrat hover:bg-gold-100 flex items-center justify-center gap-3.5 rounded-sm border bg-white px-6 py-4 text-sm font-bold capitalize duration-200 hover:text-white hover:shadow-[3px_5px_10px_#0000007f]"
      onClick={onclick}
    >
      <span>{text}</span>
      <ArrowRight width={16} />
    </button>
  );
}
