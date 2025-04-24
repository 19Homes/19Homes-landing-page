import Image from "next/image";
import { footerContact } from "../../constants";

export default function FooterContactBlock() {
  return (
    <section className="space-y-8 capitalize">
      <h3 className="text-2xl text-white font-poppins font-bold text-center">
        {footerContact.blockTitle}
      </h3>
      <ul className="space-y-6">
        {footerContact.items.map((item, index) => (
          <li
            key={index}
            className="font-montserrat font-medium text-white text-sm flex items-center gap-2.5 max-w-[30ch]"
          >
            <Image
              src={item.icon}
              alt="icon"
              aria-hidden="true"
              height={20}
              width={20}
            />
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
