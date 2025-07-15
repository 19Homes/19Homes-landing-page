import Image from "next/image";
import { footerContact } from "../../constants";

export default function FooterContactBlock() {
  return (
    <section className="space-y-2 capitalize lg:space-y-8">
      <h3
        className="font-poppins footer-caption text-center text-[6px] font-bold text-white sm:text-[10px] lg:text-2xl"
        style={{
          opacity: 0,
          transform: "translateX(30px)",
        }}
      >
        {footerContact.blockTitle}
      </h3>
      <ul className="space-y-1.5 lg:space-y-6">
        {footerContact.items.map((item, index) => (
          <li
            key={index}
            className="font-montserrat footer-item flex max-w-[30ch] items-center gap-[3px] text-[4px] font-medium text-white sm:text-[6px] lg:gap-2.5 lg:text-sm"
            style={{
              opacity: 0,
              transform: "translateX(30px)",
            }}
          >
            <Image
              src={item.icon}
              alt="icon"
              aria-hidden="true"
              height={20}
              width={20}
              className="size-[5px] lg:size-5"
            />
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
