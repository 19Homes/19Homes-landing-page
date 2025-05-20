import { useCallback } from "react";
import FooterMainBlock from "./components/footer-main-block";
import styles from "./styles/styles.module.css";
export default function Footer() {
  const currentYear = useCallback(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <footer
      className={`flex min-h-[129px] w-full flex-col gap-6 bg-[linear-gradient(rgba(20,20,20,0.92),rgba(20,20,20,0.75)),url('/footer/footer-image.png')] bg-cover px-6 py-[18px] lg:min-h-[502px] lg:gap-20 lg:px-14 lg:py-[49px] ${styles.footer}`}
    >
      <FooterMainBlock />
      <section className="flex w-full flex-col items-center gap-1.5 lg:gap-2.5">
        <div className="h-0.5 w-full rounded-full bg-white lg:h-1.25"></div>
        <p className="font-montserrat text-[8px] font-bold text-white lg:text-sm">
          Copyright 19homes {currentYear()}. All rights Reserved
        </p>
      </section>
    </footer>
  );
}
