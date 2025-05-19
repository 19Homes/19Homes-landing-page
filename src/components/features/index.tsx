import { featuresData } from "./constants";
import FeatureCard from "./components/feature-card";

export default function Features() {
  return (
    <section className="flex w-full flex-col items-center gap-10 lg:gap-20">
      <h2 className="font-poppins text-black-100 text-center text-xl font-bold capitalize lg:text-3xl">
        why <span className="text-gold-100">19Homes</span>
      </h2>
      <section className="flex w-full max-w-[1512px] flex-wrap items-center justify-center gap-[25px] gap-y-5 px-6 lg:gap-y-10 lg:px-14">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </section>
    </section>
  );
}
