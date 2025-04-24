import Link from "next/link";
import { footerCategories } from "../../constants";

export default function FooterCategoriesBlock() {
  return (
    <section className="space-y-8">
      <h3 className="text-2xl text-white font-poppins font-bold text-center">
        {footerCategories.blockTitle}
      </h3>
      <ul className="space-y-6">
        {footerCategories.items.map((item, index) => (
          <li
            key={index}
            className="font-montserrat font-medium text-white text-sm text-center"
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
