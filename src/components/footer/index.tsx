import { useCallback } from "react";
import FooterMainBlock from "./components/footer-main-block";
export default function Footer() {
  const currentYear = useCallback(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <footer className="w-full h-[502px] bg-[linear-gradient(rgba(20,20,20,0.92),rgba(20,20,20,0.75)),url('/footer/footer-image.png')] bg-cover py-[49px] px-14 flex flex-col gap-20">
      <FooterMainBlock />
      <section className="flex flex-col w-full gap-2.5 items-center">
        <div className="w-full h-[5px] bg-white rounded-full"></div>
        <p className="font-montserrat font-bold text-sm text-white">
          Copyright 19homes {currentYear()}. All rights Reserved
        </p>
      </section>
    </footer>
  );
}
