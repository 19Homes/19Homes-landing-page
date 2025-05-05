import Image from "next/image";

export default function CompanyStatements() {
  return (
    <section className="py-[62px] px-[168px] bg-[radial-gradient(#000000f0,#000000bd),url('/about/background.png')] bg-cover">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 items-center">
          <Image
            src="/about/psychology.svg"
            alt="icon"
            height={50}
            width={50}
            aria-hidden="true"
          />
          <h2 className="font-poppins font-bold text-white text-3xl uppercase text-center">
            Our Vision
          </h2>
          <p className="font-montserrat font-normal text-white text-xl text-center max-w-[25ch]">
            To take the lead in empowering individuals and families to achieve
            their dreams of homeownership and investment success.
          </p>
        </div>
        <div className="h-[358px] w-[3px] bg-white rounded-full"></div>
        <div className="flex flex-col gap-8 items-center text-center">
          <Image
            src="/about/volunteer_activism.svg"
            alt="icon"
            height={50}
            width={50}
            aria-hidden="true"
          />
          <h2 className="font-poppins font-bold text-white text-3xl uppercase">
            Our mission
          </h2>
          <p className="font-montserrat font-normal text-white text-xl max-w-[30ch]">
            To provide unwavering real estate services by delivering
            personalized experiences, guidance, and well detailed solutions
          </p>
          <p className="font-montserrat font-normal text-white text-xl max-w-[30ch]">
            We strive to exceed client expectations, build long-term
            relationships, and create value.
          </p>
        </div>
      </div>
    </section>
  );
}
