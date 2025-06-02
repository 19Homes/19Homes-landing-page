"use client";
//import { cn } from "@/utils/classnames";
import Button from "@/components/button";
import PageHeader from "@/components/page-header";
const styleClasses =
  "border p-4 rounded-sm border-black-100 placeholder:font-montserrat font-montserrat placeholder:font-normal font-medium placeholder:text-black-75 text-black-100 text-sm placeholder:text-sm w-[min(100%,400px)]";

export default function Page() {
  return (
    <main>
      <PageHeader title="Log In Page" />
      <section className="mt-13 flex w-full flex-col items-center lg:mt-25 px-6 md:px-14">
        <LoginForm />
      </section>
    </main>
  );
}
function LoginForm() {
  return (
    <form className="flex w-[min(100%,806px)] flex-col items-center gap-6 px-6">
      <section className="flex w-full flex-col items-center justify-center gap-6">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          required
          className={styleClasses}
        />
        <input
          type="password"
          placeholder="Your Password"
          name="password"
          required
          className={styleClasses}
        />
      </section>
      <Button text="LOGIN" onclick={() => {}} />
    </form>
  );
}
