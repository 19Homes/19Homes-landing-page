"use client";
import { cn } from "@/utils/classnames";
import Button from "@/components/button";
const styleClasses =
  "border p-2 sm:p-4 rounded-sm border-black-100 placeholder:font-montserrat font-montserrat placeholder:font-normal font-medium placeholder:text-black-75 text-black-100 text-xs placeholder:text-xs sm:text-sm sm:placeholder:text-sm w-[min(100%,395px)]";

export default function Form() {
  return (
    <form className="flex w-[min(806px,100%)] flex-col items-center gap-2.5 sm:gap-4 md:gap-6">
      <section className="flex w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-2.5 sm:gap-x-2 sm:gap-y-4 md:gap-x-4 md:gap-y-6">
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
          className={cn(
            `resize-none ${styleClasses} min-h-[141px] md:min-h-[333px] lg:w-[488px]`,
          )}
        ></textarea>
      </section>
      <Button text="get started" onclick={() => {}} />
    </form>
  );
}
