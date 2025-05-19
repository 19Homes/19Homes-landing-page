import SectionCaption from "@/components/sectionCaption";
import ServicesCard from "./components/services-card";
import { ServicesCardsData } from "./constants";

export default function Services() {
  return (
    <section className="flex flex-col items-center gap-0 px-6 lg:px-14">
      <SectionCaption
        headText="our services"
        subText="view our services over the years"
      />
      <section className="flex w-full flex-wrap justify-center gap-[25px] gap-y-20">
        {ServicesCardsData.map((card, index) => (
          <ServicesCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </section>
    </section>
  );
}
