import Image from "next/image";

export default function BlogCard({
  source,
  title,
  text,
}: {
  source: string;
  title: string;
  text: string;
}) {
  return (
    <article className="w-[452px] flex flex-col gap-2.5">
      <Image
        src={source}
        alt={title}
        fill
        height={309}
        className="object-cover"
      />
      <div className="flex flex-col gap-8 w-full">
        <h3 className="font-poppins font-bold text-2xl text-black-100 capitalize">
          {title}
        </h3>
        <p className="font-montserrat font-medium text-black-100 text-xl">
          {text}
        </p>
        <div className="w-full flex justify-between">
          <section className="flex gap-2">
            <Image
              src="/blog-section/19HomesIcon.svg"
              alt="19 Homes Image"
              aria-hidden="true"
              height={50}
              width={50}
            />
            <p className="text-sm text-black-100 font-poppins font-normal capitalize">
              by 19homes
            </p>
          </section>
          <p className="font-normal font-poppins text-sm text-black-75">
            7 comments
          </p>
        </div>
      </div>
    </article>
  );
}
