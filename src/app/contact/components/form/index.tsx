import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/classnames";
const styleClasses =
  "border p-4 rounded-sm border-black-100 placeholder:font-montserrat font-montserrat placeholder:font-normal font-medium placeholder:text-black-75 text-black-100 text-sm placeholder:text-sm w-[395px]";

export default function Form() {
  return (
    <form className="flex flex-col gap-6 items-center w-[806px]">
      <section className="flex flex-wrap gap-x-4 gap-y-6 justify-center items-center">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          required
          className={styleClasses}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          required
          className={styleClasses}
        />
        <input
          type="tel"
          name="tel"
          placeholder="Your Phone"
          required
          className={styleClasses}
        />
        <input
          type="text"
          placeholder="Your Message Subject"
          className={styleClasses}
        />
        <textarea
          name="message"
          id=""
          placeholder="Your Message Here"
          required
          className={cn(`resize-none ${styleClasses} w-[488px] min-h-[333px]`)}
        ></textarea>
      </section>

      <button className="px-6 py-4 border border-gold-100 bg-white rounded-sm text-sm text-gold-100 font-montserrat font-bold flex items-center justify-center gap-3.5 capitalize hover:text-white hover:bg-gold-100 duration-200 hover:shadow-[3px_5px_10px_#0000007f]">
        <span>get started</span>
        <ArrowRight width={16} />
      </button>
    </form>
  );
}
