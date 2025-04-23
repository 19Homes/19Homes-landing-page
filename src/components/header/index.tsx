import Logo from "./components/logo";
import Navigation from "./components/nav";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />
      <Navigation />
    </header>
  );
}
