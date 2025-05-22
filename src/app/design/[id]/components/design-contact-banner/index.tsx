import Image from "next/image";
export default function DesignContactBanner() {
  return (
    <section className="flex h-[179px] w-full items-center justify-center bg-[radial-gradient(#000000e0,#000000ed),url('/about/background.png')] bg-cover sm:h-[225px] md:h-[250px] lg:h-[335px]">
      <div className="flex justify-center">
        <Image
          src="/19Homes-icon.svg"
          alt="icon"
          width={175}
          height={56}
          className="h-7 w-11 sm:h-10 sm:w-[120px] md:h-14 md:w-[175px]"
        />
        <div className="flex flex-col items-center gap-2 lg:gap-5">
          <h2 className="font-poppins text-center text-xs font-bold text-white sm:text-sm lg:text-3xl">
            Guess You Love This Design!!!
          </h2>
          <p className="font-montserrat text-center text-[10px] font-normal text-white sm:text-xs lg:text-2xl">
            Make your interest known today by calling us on
          </p>
          <p className="font-montserrat text-center text-xs font-medium text-white sm:text-sm lg:text-3xl">
            +2348066778899
          </p>
        </div>
        <Image
          src="/19Homes-icon.svg"
          alt="icon"
          width={175}
          height={56}
          className="h-7 w-11 sm:h-10 sm:w-[120px] md:h-14 md:w-[175px]"
        />{" "}
      </div>
    </section>
  );
}
