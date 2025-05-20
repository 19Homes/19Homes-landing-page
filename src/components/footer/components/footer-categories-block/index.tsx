"use client";
import Link from "next/link";
import { footerCategories } from "../../constants";
import { useContext } from "react";
import { activeLinkContext } from "@/contexts/activeLinkContext";

export default function FooterCategoriesBlock() {
  const { setActiveLinkIndex } = useContext(activeLinkContext);
  return (
    <section className="lg:space-y-8 space-y-2 capitalize">
      <h3 className="font-poppins sm:text-[10px] text-center text-[6px] font-bold text-white lg:text-2xl">
        {footerCategories.blockTitle}
      </h3>
      <ul className="space-y-1.5 lg:space-y-6">
        {footerCategories.items.map((item, index) => (
          <li
            key={index}
            className="font-montserrat hover:text-gold-100 text-center text-[4px] font-medium text-white duration-200 sm:text-[6px] lg:text-sm"
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
