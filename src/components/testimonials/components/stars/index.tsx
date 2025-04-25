import Image from "next/image";

export default function Stars({ stars }: { stars: number }) {
  const totalStarRating = 4;
  const startsArray = Array(totalStarRating).fill("");
  return (
    <div className="w-full h-[18px] flex items-center justify-center gap-[14px]">
      {startsArray.map((_, index) =>
        index <= stars - 1 ? (
          <Image
            key={index}
            src="/testimonial/star-filled.svg"
            alt={`${index}-star rating`}
            width={12}
            height={12}
          />
        ) : (
          <Image
            key={index}
            src="/testimonial/star.svg"
            alt="star not rated"
            width={12}
            height={12}
          />
        )
      )}
    </div>
  );
}
