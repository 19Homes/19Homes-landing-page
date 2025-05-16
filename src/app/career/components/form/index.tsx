"use client";
import { cn } from "@/utils/classnames";
import Button from "@/components/button";
const styleClasses =
  "border p-4 rounded-sm border-black-100 placeholder:font-montserrat font-montserrat placeholder:font-normal font-medium placeholder:text-black-75 text-black-100 text-sm placeholder:text-sm w-[395px]";

export default function CareerForm() {
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
          name="address"
          placeholder="Your Address"
          className={styleClasses}
        />
        <textarea
          name="inquiries"
          id=""
          placeholder="Please, let us know if you have any questions or enquiries."
          className={cn(`resize-none ${styleClasses} min-h-[250px] w-[488px]`)}
        ></textarea>
      </section>
      <Button text="JOIN 19HOMES" onclick={() => {}} />
    </form>
  );
}
