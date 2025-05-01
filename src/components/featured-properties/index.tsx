import SectionCaption from "../sectionCaption";
import { featuredPropertyCardDetails } from "./constants";
import SectionCard from "./components/section-card";

export default function FeaturedProperties() {
  return (
    <section className="px-14 py-10 flex flex-col items-center justify-center gap-20">
      <SectionCaption
        headText="our featured properties"
        subText="view our featured properties"
      />
      <section className="w-full max-w-[1512px] flex justify-between bg-[url('/featured-properties/graphic-vector.svg')] bg-no-repeat bg-center">
        {featuredPropertyCardDetails.map((card, index) => (
          <SectionCard
            key={index}
            image={card.image}
            price={card.price}
            name={card.name}
          />
        ))}
      </section>
    </section>
  );
}
