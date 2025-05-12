"use client";
import Link from "next/link";
import { footerCategories } from "../../constants";
import { useContext } from "react";
import { activeLinkContext } from "@/contexts/activeLinkContext";

export default function FooterCategoriesBlock() {
  const { setActiveLinkIndex } = useContext(activeLinkContext);
  return (
    <section className="space-y-8 capitalize">
      <h3 className="font-poppins text-center text-2xl font-bold text-white">
        {footerCategories.blockTitle}
      </h3>
      <ul className="space-y-6">
        {footerCategories.items.map((item, index) => (
          <li
            key={index}
            className="font-montserrat hover:text-gold-100 text-center text-sm font-medium text-white duration-200"
          >
            <Link
              href={item.path}
              onClick={() => {
                setActiveLinkIndex(index);
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
