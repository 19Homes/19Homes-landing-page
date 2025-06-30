"use client";
//import { cn } from "@/utils/classnames";
import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import { login } from "@/actions/auth";
import { useActionState } from "react";
const styleClasses =
  "border p-4 rounded-sm border-black-100 placeholder:font-montserrat font-montserrat placeholder:font-normal font-medium placeholder:text-black-75 text-black-100 text-sm placeholder:text-sm w-[min(100%,400px)]";

export default function Page() {
  const [state, action, isPending] = useActionState(login, undefined);
  return (
    <main>
      <PageHeader title="Log In Page" />
      <section className="mt-13 flex w-full flex-col items-center px-6 md:px-14 lg:mt-25">
        <form
          action={action}
          className="flex w-[min(100%,450px)] flex-col items-center gap-6 px-6"
        >
          <section className="flex w-full flex-col items-center justify-center gap-6">
            <div className="flex w-full flex-col gap-2">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                className={styleClasses}
              />
              {state?.errors?.email && (
                <p
                  className="font-montserrat font-regular text-left text-sm font-bold text-red-500"
                  aria-live="assertive"
                  role="alert"
                >
                  {state.errors.email}
                </p>
              )}
            </div>

            <div className="flex w-full flex-col gap-2">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                required
                className={styleClasses}
              />
              {state?.errors && "password" in state.errors && (
                <p
                  className="font-montserrat font-regular text-left text-sm font-bold text-red-500"
                  aria-live="assertive"
                  role="alert"
                >
                  {state.errors.password}
                </p>
              )}
            </div>
          </section>
          <Button
            text={isPending ? "Loging In" : "Log In"}
            onclick={async () => {
            }}
          />
        </form>
      </section>
    </main>
  );
}
