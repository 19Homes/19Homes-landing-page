import Link from "next/link";
import { navigationLinks } from "../../constants";

export default function Navigation() {
  return (
    <nav className="flex gap-14">
      {navigationLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="text-black-100 font-montserrat font-medium text-sm"
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
