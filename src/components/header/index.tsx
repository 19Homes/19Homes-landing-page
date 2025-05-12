import Logo from "./components/logo";
import Navigation from "./components/nav";
import HeaderButton from "./components/button";

export default function Header() {
  return (
    <header className="flex justify-between mt-10 px-14 items-start">
      <Logo />
      <Navigation />
      <div className="flex gap-4">
        <HeaderButton classnames="border border-gold-100 text-gold-100 bg-white" text="login" />
        <HeaderButton classnames="bg-gold-100 text-white" text="sign up" />
      </div>
    </header>
  );
}
