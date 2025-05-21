import Image from "next/image";

export default function CompanyStatements() {
  return (
    <section className="bg-[radial-gradient(#000000f0,#000000bd),url('/about/background.png')] bg-cover p-6 sm:p-8 lg:px-[168px] lg:py-[62px]">
      <div className="flex flex-col items-center lg:items-start justify-between gap-12 lg:flex-row">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <Image
            src="/about/psychology.svg"
            alt="icon"
            height={50}
            width={50}
            aria-hidden="true"
            className="size-9.5 md:size-[50px]"
          />
          <h2 className="font-poppins text-center text-2xl font-bold text-white uppercase lg:text-3xl">
            Our Vision
          </h2>
          <p className="font-montserrat max-w-[25ch] text-center text-lg font-normal text-white lg:text-xl">
            To take the lead in empowering individuals and families to achieve
            their dreams of homeownership and investment success.
          </p>
        </div>
        <div className="h-0.5 w-44 sm:w-70 md:w-100 rounded-full bg-white lg:h-[358px] lg:w-[3px]"></div>
        <div className="flex flex-col items-center gap-6 text-center lg:gap-8">
          <Image
            src="/about/volunteer_activism.svg"
            alt="icon"
            height={50}
            width={50}
            aria-hidden="true"
            className="size-9.5 md:size-[50px]"
          />
          <h2 className="font-poppins text-center text-2xl font-bold text-white uppercase lg:text-3xl">
            Our mission
          </h2>
          <p className="font-montserrat max-w-[25ch] text-center text-lg font-normal text-white lg:text-xl">
            To provide unwavering real estate services by delivering
            personalized experiences, guidance, and well detailed solutions
          </p>
          <p className="font-montserrat max-w-[25ch] text-center text-lg font-normal text-white lg:text-xl">
            We strive to exceed client expectations, build long-term
            relationships, and create value.
          </p>
        </div>
      </div>
    </section>
  );
}
