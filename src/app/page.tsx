import Hero from "@/components/hero";
import FeaturedProperties from "@/components/featured-properties";
import Features from "@/components/features";
import Services from "@/components/services";
export default function Home() {
  return (
    <main className="mt-13 flex flex-col gap-13 md:mt-25 md:gap-25">
      <Hero />
      <FeaturedProperties />
      <Features />
      <Services />
    </main>
  );
}
