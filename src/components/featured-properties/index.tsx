import SectionCaption from "../sectionCaption";
import { featuredPropertyCardDetails } from "./constants";
import SectionCard from "./components/section-card";

export default function FeaturedProperties() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 px-6 py-10 md:px-14">
      <SectionCaption
        headText="our featured properties"
        subText="view our featured properties"
      />
      <section className="flex w-full max-w-[1512px] justify-between bg-[url('/featured-properties/graphic-vector.svg')] bg-center bg-no-repeat">
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
