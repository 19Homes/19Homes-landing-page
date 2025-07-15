import Image from "next/image";

export default function FooterTextAndLogoBlock() {
  return (
    <div
      className="flex w-[85px] flex-col gap-1 sm:w-[250px] lg:w-[332px] lg:gap-4 text-and-logo"
      style={{ opacity: 0 }}
    >
      <Image
        src="/19Homes-icon.svg"
        alt="19 home logo"
        width={331}
        height={125}
        className="h-8 w-[86px] lg:h-[125px] lg:w-[331px]"
      />
      <p className="font-montserrat text-[3.61px] font-medium text-white sm:max-w-[45ch] sm:text-[6px] lg:text-sm">
        At 19Homes We Focus On Services Like House And Land Sales, Building And
        Architectural Designs. Work With Us To Bring Your Dream Home Into
        Reality.
      </p>
    </div>
  );
}
