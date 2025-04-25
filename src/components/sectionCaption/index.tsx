export default function SectionCaption({
  headText,
  subText,
}: {
  headText: string;
  subText: string;
}) {
  return (
    <div className="w-full flex flex-col gap-2.5 mb-20 items-center">
      <h3 className="text-2xl text-gold-100 font-bold font-poppins capitalize">
        {headText}
      </h3>
      <p className="font-bold text-black-100 font-montserrat text-3xl capitalize">
        {subText}
      </p>
    </div>
  );
}
