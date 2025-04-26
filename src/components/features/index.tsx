import { featuresData } from "./constants";
import FeatureCard from "./components/feature-card";

export default function Features() {
  return (
    <section className="w-full  flex flex-col gap-20 items-center">
      <h2 className="font-poppins font-bold text-3xl text-black100 text-center capitalize">
        why <span className="text-gold-100">19Homes</span>
      </h2>
      <section className="w-full max-w-[1512px] px-14 flex items-center justify-center flex-wrap gap-y-10 gap-[25px]">
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
