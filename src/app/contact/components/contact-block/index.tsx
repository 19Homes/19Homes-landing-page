import Image from "next/image";

export default function ContactBlock() {
  return (
    <section className="mt-[35px] flex w-[min(100%,806px)] flex-col items-center justify-start gap-20 md:mt-20">
      <div className="flex w-full flex-col gap-3.5 rounded-sm border border-black py-2 text-center md:gap-8 md:py-4">
        <div className="flex w-full flex-col items-center gap-1.5 sm:gap-4">
          <h3 className="font-poppins text-gold-100 text-[8px] font-medium capitalize sm:text-sm md:text-xl">
            Visit us
          </h3>
          <div className="flex w-full items-center justify-center gap-1 sm:gap-2.5">
            <Image
              src="/contact/distance.svg"
              alt="icon"
              aria-hidden="true"
              width={20}
              height={20}
              className="size-2.5 shrink-0 sm:size-5"
            />
            <p className="font-montserrat text-black-100 max-w-[225px] text-[6px] font-normal sm:text-xs md:text-sm">
              3, idumota street, Lagos Island Nigeria
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-1.5 sm:gap-4">
          <h3 className="font-poppins text-gold-100 text-[8px] font-medium capitalize sm:text-sm md:text-xl">
            send us a message
          </h3>
          <div className="flex w-full items-center justify-center gap-1 sm:gap-2.5">
            <Image
              src="/contact/email.svg"
              alt="icon"
              aria-hidden="true"
              width={20}
              height={20}
              className="size-2.5 sm:size-5"
            />
            <p className="font-montserrat text-black-100 max-w-[225px] text-[6px] font-normal sm:text-xs md:text-sm">
              19homesempire@gmail.com
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-1.5 sm:gap-4">
          <h3 className="font-poppins text-gold-100 text-[8px] font-medium capitalize sm:text-sm md:text-xl">
            call us on
          </h3>
          <div className="flex w-full items-center justify-center gap-1 sm:gap-2.5">
            <Image
              src="/contact/call.svg"
              alt="icon"
              aria-hidden="true"
              width={20}
              height={20}
              className="size-2.5 shrink-0 sm:size-5"
            />
            <p className="font-montserrat text-black-100 max-w-[225px] text-[6px] font-normal sm:text-xs md:text-sm">
              +2349035064848
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
