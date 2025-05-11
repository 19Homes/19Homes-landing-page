"use client";
import { cn } from "@/utils/classnames";
import Button from "@/components/button";
const styleClasses =
  "border p-4 rounded-sm border-black-100 placeholder:font-montserrat font-montserrat placeholder:font-normal font-medium placeholder:text-black-75 text-black-100 text-sm placeholder:text-sm w-[395px]";

export default function Form() {
  return (
    <form className="flex w-[806px] flex-col items-center gap-6">
      <section className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6">
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
          className={cn(`resize-none ${styleClasses} min-h-[333px] w-[488px]`)}
        ></textarea>
      </section>
      <Button text="get started" onclick={() => {}} />
    </form>
  );
}
