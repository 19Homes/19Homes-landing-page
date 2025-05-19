import Image from "next/image";
import logo from "../../../../../public/19Homes-icon.png";
export default function Logo() {
  return (
    <div>
      <Image
        src="/19Homes-icon.svg"
        height={56}
        width={142}
        alt="19 Homes Logo"
        className="hidden sm:block"
      />
      <div className="relative h-6 w-7.5">
        <Image fill src={logo} alt="19Homes logo" className="sm:hidden" />
      </div>
    </div>
  );
}
