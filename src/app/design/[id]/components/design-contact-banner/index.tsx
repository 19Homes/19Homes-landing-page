import Image from "next/image";
export default function DesignContactBanner() {
  return (
    <section className="flex h-[335px] w-full items-center justify-center bg-[radial-gradient(#000000e0,#000000ed),url('/about/background.png')] bg-cover">
      <div className="flex justify-center">
        <Image
          src="/19Homes-icon.svg"
          alt="icon"
          width={175}
          height={56}
          className="h-14"
        />
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-poppins text-center text-3xl font-bold text-white">
            Guess You Love This Property!!!
          </h2>
          <p className="font-montserrat text-center text-2xl font-normal text-white">
            Schedule an inspection with us today by calling us on
          </p>
          <p className="font-montserrat text-center text-3xl font-medium text-white">
            +2348066778899
          </p>
        </div>
        <Image
          src="/19Homes-icon.svg"
          alt="icon"
          width={175}
          height={56}
          className="h-14"
        />{" "}
      </div>
    </section>
  );
}
