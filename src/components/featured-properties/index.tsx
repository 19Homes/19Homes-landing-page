import SectionCaption from "../sectionCaption";
import { featuredPropertyCardDetails } from "./constants";
import SectionCard from "./components/section-card";

export default function FeaturedProperties() {
  return (
    <section className="flex flex-col items-center justify-center overflow-x-auto px-6 py-10 md:pl-14">
      <SectionCaption
        headText="our featured properties"
        subText="view our featured properties"
      />
      <section
        className="flex w-full max-w-[1512px] gap-9 overflow-x-auto overflow-y-clip bg-[url('/featured-properties/graphic-vector.svg')] bg-center bg-no-repeat py-6 pl-3 md:gap-14 md:px-4 md:py-8 lg:justify-between"
        style={{ scrollbarWidth: "none" }}
      >
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
