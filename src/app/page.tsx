import Hero from "@/components/hero";
import FeaturedProperties from "@/components/featured-properties";
import Features from "@/components/features";
import Services from "@/components/services";
export default function Home() {
  return (
    <main className="flex flex-col gap-[100px] mt-[100px]">
      <Hero />
      <FeaturedProperties />
      <Features />
      <Services />
    </main>
  );
}
