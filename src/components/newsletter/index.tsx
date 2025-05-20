import Image from "next/image";
import styles from "./styles/styles.module.css";

export default function Newsletter() {
  return (
    <section
      className={`flex flex-col gap-6 bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/newsletter/newsletter.jpg')] bg-cover px-3.5 py-1 md:gap-20 md:px-14 md:py-8 ${styles.newsletter}`}
    >
      <div className="flex flex-col items-center gap-[30px]">
        <h3 className="text-gold-100 font-poppins text-xs font-bold uppercase md:text-2xl">
          subscribe to our newsletter
        </h3>
        <p className="font-montserrat text-black-75 md:max-w-[971px] text-center text-xs font-medium md:text-3xl max-w-[45ch]">
          Join thousands of our customers to receive updates from us regarding
          offers and other goodies we have in stock for you.
        </p>
      </div>
      <form className="flex h-15 flex-col items-center justify-between md:h-[203px]">
        <div className="outline-black-100 flex h-[25px] w-[min(220px,90%)] items-center gap-1 rounded-[8px] bg-[#fffdfd] px-[6px] py-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] has-[input:focus]:outline-2 md:h-[98px] md:w-[min(858px,90%)] md:gap-6 md:rounded-4xl md:px-[27px] md:py-[33px] md:has-[input:focus]:outline-4">
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
            placeholder="Your Email"
            className="text-black-100 font-montserrat placeholder:text-black-50 placehoder:font-normal h-full w-full text-[8px] font-medium focus:outline-white md:text-xl pl-1.5"
          />
        </div>
        <button className="bg-gold-100 border-gold-100 font-poppins hover:bg-gold-50 hover:text-black-100 h-6 w-18 cursor-pointer rounded-full border text-[10px] font-semibold text-white capitalize backdrop-blur-[5px] duration-300 md:h-[65px] md:w-[152px] md:text-sm md:font-bold">
          subscribe
        </button>
      </form>
    </section>
  );
}
