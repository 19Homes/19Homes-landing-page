import Image, { StaticImageData } from "next/image";

export default function BlogCard({
  source,
  title,
  text,
  mask,
}: {
  source: StaticImageData;
  title: string;
  text: string;
  mask: string;
}) {
  return (
    <article className="blog-card flex w-[min(100%,342px)] flex-col items-center gap-2.5 lg:w-[452px]">
      <svg
        width="0"
        height="0"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="displacementFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08"
            numOctaves="10"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="80"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <mask id="circle-mask1">
          <circle
            cx="100"
            cy="100"
            r="0"
            fill="white"
            filter="url(#displacementFilter)"
          />
        </mask>
      </svg>
      <svg
        width="0"
        height="0"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="displacementFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08"
            numOctaves="10"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="80"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <mask id="circle-mask2">
          <circle
            cx="100"
            cy="100"
            r="0"
            fill="white"
            filter="url(#displacementFilter)"
          />
        </mask>
      </svg>
      <svg
        width="0"
        height="0"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="displacementFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08"
            numOctaves="10"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="80"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <mask id="circle-mask3">
          <circle
            cx="100"
            cy="100"
            r="0"
            fill="white"
            filter="url(#displacementFilter)"
          />
        </mask>
      </svg>

      <Image
        src={source}
        alt={title}
        width={452}
        height={309}
        className="h-[234px] w-full object-cover lg:h-[309px] lg:w-[452px]"
        placeholder="blur"
        style={{
          mask: `url(#${mask})`,
        }}
      />
      <div className="flex w-full flex-col gap-1.5 lg:gap-8">
        <h3 className="font-poppins text-black-100 text-lg font-bold capitalize lg:text-2xl">
          {title}
        </h3>
        <p className="font-montserrat text-black-100 text-[15px] font-medium lg:text-xl">
          {text}
        </p>
        <div className="flex w-full items-center justify-between">
          <section className="flex items-center gap-2">
            <Image
              src="/blog-section/19HomesIcon.svg"
              alt="19 Homes Image"
              aria-hidden="true"
              height={50}
              width={50}
              className="size-[39px] lg:size-[50px]"
            />
            <p className="text-black-100 font-poppins text-[10px] font-normal capitalize lg:text-sm">
              by 19homes
            </p>
          </section>
          {/* <p className="font-poppins text-black-75 text-[10px] font-normal lg:text-sm">
            7 comments
          </p> */}
        </div>
      </div>
    </article>
  );
}
