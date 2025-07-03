import Logo from "./components/logo";
import Navigation from "./components/nav";
import HeaderButton from "./components/button";
import MenuButton from "./components/menu-button";
import { getAuthUser } from "@/lib/getAuthUser";
import { logout } from "@/actions/auth";
export default async function Header() {
  const authenticatedUser = await getAuthUser();
  return (
    <header className="mt-13 flex items-start justify-between px-6 lg:mt-10 lg:px-14">
      <Logo />
      <Navigation />
      <div className="ml-auto hidden gap-4 lg:flex">
        {authenticatedUser ? (
          <form action={logout}>
            <HeaderButton
              classnames="bg-gold-100 text-white hover:bg-gold-75 hover:text-black-100"
              text="logout"
              path="/"
            />
          </form>
        ) : (
          <>
            {" "}
            <HeaderButton
              classnames="border border-gold-100 text-gold-100 bg-white"
              text="login"
              path="/login"
            />
            <HeaderButton
              classnames="bg-gold-100 text-white"
              text="sign up"
              path="/register"
            />
          </>
        )}
      </div>
      <MenuButton />
    </header>
  );
}
