import PageHeader from "@/components/page-header";
import DesignCard from "./components/design-card";
import { CompanyDesigns } from "@/constants";

export default function Design() {
  return (
    <main className="flex flex-col items-center gap-41">
      <PageHeader title="architectural designs" />
      <section className="flex w-full max-w-[1512px] flex-col items-center gap-20 px-19">
        <h2 className="font-poppins text-black-100 text-center text-3xl font-bold capitalize">
          View our <span className="text-gold-100">architectural design</span>{" "}
          gallery
        </h2>
        <div className="flex w-full flex-wrap justify-center gap-10 px-14">
          {CompanyDesigns.map((design, index) => (
            <DesignCard
              image={design.images.imageOne}
              id={design.id}
              key={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
