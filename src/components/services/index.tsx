import SectionCaption from "@/components/sectionCaption";
import ServicesCard from "./components/services-card";
import { ServicesCardsData } from "./constants";

export default function Services() {
  return (
    <section className="flex flex-col gap-0 px-14 items-center">
      <SectionCaption
        headText="our services"
        subText="view our services over the years"
      />
      <section className="w-full flex gap-[25px] justify-center flex-wrap gap-y-20">
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
