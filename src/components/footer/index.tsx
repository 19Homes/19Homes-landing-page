import FooterMainBlock from "./components/footer-main-block";
export default function Footer() {
  return (
    <footer className="w-full h-[502px] bg-[linear-gradient(rgba(20,20,20,0.92),rgba(20,20,20,0.75)),url('/footer/footer-image.png')] bg-cover py-[49px] px-14">
        <FooterMainBlock />
    </footer>
  );
}
