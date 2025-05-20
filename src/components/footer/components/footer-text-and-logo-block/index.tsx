import Image from "next/image";

export default function FooterTextAndLogoBlock() {
  return (
    <div className="space-y-1 w-[85px] sm:w-[250px] lg:w-[332px] lg:space-y-4">
      <Image
        src="/19Homes-icon.svg"
        alt="19 home logo"
        width={331}
        height={125}
        className="h-8 w-[86px] lg:h-[125px] lg:w-[331px]"
      />
      <p className="font-montserrat text-[3.61px] font-medium sm:max-w-[45ch] text-white sm:text-[6px] lg:text-sm">
        At 19Homes We Focus On Services Like House And Land Sales, Building And
        Architectural Designs. Work With Us To Bring Your Dream Home Into
        Reality.
      </p>
    </div>
  );
}
