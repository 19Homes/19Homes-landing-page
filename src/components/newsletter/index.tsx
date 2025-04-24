import Image from "next/image";
import styles from "./styles/styles.module.css";

export default function Newsletter() {
  return (
    <section
      className={`flex flex-col gap-20 py-8 px-14 bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.4)),url('/newsletter/newsletter.jpg')] bg-cover ${styles.newsletter}`}
    >
      <div className="flex flex-col items-center gap-[30px]">
        <h3 className="text-2xl text-gold-100 font-poppins font-bold uppercase">
          subscribe to our newsletter
        </h3>
        <p className="font-montserrat font-medium text-3xl text-black-75 max-w-[971px] text-center">
          Join thousands of our customers to receive updates from us regarding
          offers and other goodies we have in stock for you.
        </p>
      </div>
      <form className="flex flex-col justify-between items-center h-[203px]">
        <div className="w-[858px] h-[98px] rounded-4xl bg-[#fffdfd] shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-[33px] px-[27px] flex gap-6 items-center">
          <Image
            src="/newsletter/e-mail.svg"
            alt="email"
            aria-hidden="true"
            height={32}
            width={32}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full h-full text-xl text-black-100 font-montserrat font-medium placeholder:text-black-50 placehoder:font-normal focus:outline-white"
          />
        </div>
        <button className="w-[152px] h-[65px] rounded-full bg-gold-100 border border-gold-100 text-white font-bold font-poppins text-sm capitalize cursor-pointer hover:bg-gold-50 duration-300 backdrop-blur-[5px] hover:text-black-100">
          subscribe
        </button>
      </form>
    </section>
  );
}
