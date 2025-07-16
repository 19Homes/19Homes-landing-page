"use client";
import Image from "next/image";
import styles from "./styles/styles.module.css";
import { useEffect, useRef, useState } from "react";
import { animate, createScope, createSpring, onScroll, stagger } from "animejs";
import { addSubscriber } from "@/actions/auth";
import { cn } from "@/utils/classnames";

export default function Newsletter() {
  const root = useRef(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".raise", {
        opacity: 1,
        y: "0px",
        delay: stagger(200),
        ease: createSpring({ stiffness: 400, damping: 20, velocity: 30 }),
        autoplay: onScroll({
          container: ".newsletter-box",
          enter: "bottom-=300 top",
          leave: "top+=200 bottom",
          sync: "play play reverse reverse",
        }),
      });
    });

    return () => scope.current?.revert();
  }, []);
  const [subscriptionFeedback, setSubscriptionFeedback] = useState<{
    success: boolean;
    message: string;
  }>({
    success: false,
    message: "",
  });
  const [email, setEmail] = useState("");
  const [subscribeBtnClicked, setSubscribeBtnClicked] = useState(false);
  const handleFormSubmit = async () => {
    const response = await addSubscriber(email);
    setSubscriptionFeedback(response);
    setSubscribeBtnClicked(false);
  };
  return (
    <section
      ref={root}
      className={`flex flex-col gap-6 bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/newsletter/newsletter.jpg')] bg-cover px-3.5 py-1 md:gap-20 md:px-14 md:py-8 ${styles.newsletter} newsletter-box`}
    >
      <div className="flex flex-col items-center gap-[30px]">
        <h3
          className="text-gold-100 font-poppins raise text-xs font-bold uppercase md:text-2xl"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          subscribe to our newsletter
        </h3>
        <p
          className="font-montserrat text-black-75 raise max-w-[45ch] text-center text-xs font-medium md:max-w-[971px] md:text-3xl"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          Join thousands of our customers to receive updates from us regarding
          offers and other goodies we have in stock for you.
        </p>
      </div>
      <form
        className="flex h-15 flex-col items-center justify-between md:h-[203px]"
        onSubmit={(event) => {
          event.preventDefault();
          setSubscribeBtnClicked(true);
          handleFormSubmit();
        }}
      >
        <div className="raise mb-2 flex w-[min(220px,90%)] flex-col items-center gap-2 md:w-[min(858px,90%)]">
          <div
            className="outline-black-100 raise flex h-[25px] w-full items-center gap-1 rounded-[8px] bg-[#fffdfd] px-[6px] py-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] has-[input:focus]:outline-2 md:h-[98px] md:gap-6 md:rounded-4xl md:px-[27px] md:py-[33px] md:has-[input:focus]:outline-4"
            style={{ opacity: 0, transform: "translateY(50px)" }}
          >
            <Image
              src="/newsletter/e-mail.svg"
              alt="email"
              aria-hidden="true"
              height={32}
              width={32}
              className="size-2 md:size-8"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="text-black-100 font-montserrat placeholder:text-black-50 placehoder:font-normal h-full w-full pl-1.5 text-[8px] font-medium focus:outline-white md:text-xl"
            />
          </div>
          {subscriptionFeedback.message ? (
            <p
              className={cn(
                `font-poppins text-sm font-semibold md:text-lg`,
                subscriptionFeedback.success
                  ? "text-green-700"
                  : "text-red-700",
              )}
            >
              {subscriptionFeedback.message}
            </p>
          ) : null}
        </div>

        <button
          className="bg-gold-100 border-gold-100 font-poppins hover:bg-gold-50 hover:text-black-100 raise h-6 w-18 cursor-pointer rounded-full border text-[10px] font-semibold text-white capitalize backdrop-blur-[5px] duration-300 disabled:bg-gold-25 disabled:cursor-not-allowed md:h-[65px] md:w-[152px] md:text-sm md:font-bold"
          disabled={subscribeBtnClicked}
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          {subscribeBtnClicked ? "Please wait..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
}
