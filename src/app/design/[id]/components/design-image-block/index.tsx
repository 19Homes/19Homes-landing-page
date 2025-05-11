import Image from "next/image";
import UseGetCurrentDesign from "@/hooks/useGetCurrentDesign";
export default function DesignImageBlock() {
  const currentDesign = UseGetCurrentDesign();
  return (
    <section className="mt-20 flex w-full flex-col items-center gap-12 px-14">
      <div className="relative h-[747px] w-full">
        <Image
          src={currentDesign?.images.imageOne}
          alt="design"
          fill
          className="object-cover"
        />
      </div>
      <div className="*:border-black-100 flex items-center gap-8 *:relative *:h-[200px] *:w-[200px] *:cursor-pointer *:overflow-hidden *:rounded-xl *:border-2 *:shadow-[0_3px_8px_#999] *:hover:shadow-[0_5px_12px_#777] *:duration-300 *:focus:border-gold-75 *:focus:outline-none">
        <button className="group">
          <Image
            src={currentDesign.images.imageOne}
            alt="first design"
            fill
            className="object-cover duration-300 group-hover:scale-[1.1]"
          />
        </button>
        <button className="group">
          <Image
            src={currentDesign.images.imageTwo}
            alt="second design"
            fill
            className="object-cover duration-300 group-hover:scale-[1.1]"
          />
        </button>
        <button className="group">
          <Image
            src={currentDesign.images.imageThree}
            alt="third design"
            fill
            className="object-cover duration-300 group-hover:scale-[1.1]"
          />
        </button>
      </div>
    </section>
  );
}
