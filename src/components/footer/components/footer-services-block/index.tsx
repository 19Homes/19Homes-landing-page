import { footerServices } from "../../constants";

export default function FooterServicesBlock() {
  return (
    <section className="space-y-2 capitalize lg:space-y-8">
      <h3
        className="font-poppins footer-caption text-center text-[6px] font-bold text-white sm:text-[10px] lg:text-2xl"
        style={{
          opacity: 0,
          transform: "translateX(30px)",
        }}
      >
        {footerServices.blockTitle}
      </h3>
      <ul className="space-y-1.5 lg:space-y-6">
        {footerServices.items.map((item, index) => (
          <li
            key={index}
            className="font-montserrat footer-item text-center text-[4px] font-medium text-white sm:text-[6px] lg:text-sm"
            style={{
              opacity: 0,
              transform: "translateX(30px)",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
