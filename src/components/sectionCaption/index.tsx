export default function SectionCaption({
  headText,
  subText,
}: {
  headText: string;
  subText: string;
}) {
  return (
    <div className="md:mb-20 mb-10 flex w-full flex-col items-center gap-2.5 text-center">
      <h3 className="text-gold-100 font-poppins text-center text-sm font-bold capitalize md:text-2xl">
        {headText}
      </h3>
      <p className="text-black-100 font-montserrat text-center text-xl font-bold capitalize md:text-3xl">
        {subText}
      </p>
    </div>
  );
}
