import { footerServices } from "../../constants";

export default function FooterServicesBlock() {
  return (
    <section className="space-y-2 capitalize lg:space-y-8">
      <h3 className="font-poppins text-center text-[6px] sm:text-[10px] font-bold text-white lg:text-2xl">
        {footerServices.blockTitle}
      </h3>
      <ul className="space-y-1.5 lg:space-y-6">
        {footerServices.items.map((item, index) => (
          <li
            key={index}
            className="font-montserrat text-center text-[4px] sm:text-[6px] font-medium text-white lg:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
