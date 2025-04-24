import Image from "next/image";

export default function FooterTextAndLogoBlock() {
  return (
    <div className="space-y-4 w-[332px]">
      <Image
        src="/19Homes-icon.svg"
        alt="19 home logo"
        width={331}
        height={125}
      />
      <p className="font-montserrat font-medium text-white text-sm">
        At 19Homes We Focus On Services Like House And Land Sales, Building And
        Architectural Designs. Work With Us To Bring Your Dream Home Into
        Reality.
      </p>
    </div>
  );
}
