import { footerServices } from "../../constants";

export default function FooterServicesBlock() {
  return (
    <section className="space-y-8 capitalize">
      <h3 className="text-2xl text-white font-poppins font-bold text-center">
        {footerServices.blockTitle}
      </h3>
      <ul className="space-y-6">
        {footerServices.items.map((item, index) => (
          <li
            key={index}
            className="font-montserrat font-medium text-white text-sm text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
