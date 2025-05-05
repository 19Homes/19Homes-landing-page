import Image from "next/image";

export default function ContactBlock() {
    return (
      <section className="mt-20 flex flex-col gap-20 items-center justify-start w-[806px]">
        <div className="flex flex-col gap-8 rounded-sm border border-black py-4 w-full text-center">
          <div className="w-full flex flex-col gap-4 items-center">
            <h3 className="font-poppins font-medium text-gold-100 text-xl capitalize">
              Visit us
            </h3>
            <div className="w-full flex gap-2.5 justify-center items-center">
              <Image
                src="/contact/distance.svg"
                alt="icon"
                aria-hidden="true"
                width={20}
                height={20}
                className="shrink-0"
              />
              <p className="font-montserrat font-normal text-sm text-black-100 max-w-[225px]">
                3, idumota street, Lagos Island Nigeria
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 items-center">
            <h3 className="font-poppins font-medium text-gold-100 text-xl capitalize">
              send us a message
            </h3>
            <div className="w-full flex gap-2.5 justify-center">
              <Image
                src="/contact/email.svg"
                alt="icon"
                aria-hidden="true"
                width={20}
                height={20}
              />
              <p className="font-montserrat font-normal text-sm text-black-100 max-w-[225px]">
                19homesempire@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 items-center">
            <h3 className="font-poppins font-medium text-gold-100 text-xl capitalize">
              call us on
            </h3>
            <div className="w-full flex gap-2.5 justify-center">
              <Image
                src="/contact/call.svg"
                alt="icon"
                aria-hidden="true"
                width={20}
                height={20}
              />
              <p className="font-montserrat font-normal text-sm text-black-100 max-w-[225px]">
                +2349035064848
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}