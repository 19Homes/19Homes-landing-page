"use client";
import UseGetOtherDesigns from "@/hooks/useGetOtherDesigns";
import DesignCard from "@/app/designs/components/design-card";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
export default function OtherDesignsBlock() {
  const otherDesigns = UseGetOtherDesigns();
  const router = useRouter();
  return (
    <section className="flex w-full flex-col items-center gap-25">
      <h2 className="text-black-100 font-poppins text-center text-3xl font-bold">
        See Other <span className="text-gold-100">Designs</span>
      </h2>
      <div
        className="flex h-[615px] w-full gap-10 overflow-x-auto pl-14"
        style={{ scrollbarWidth: "none" }}
      >
        {otherDesigns.map((design, index) => (
          <DesignCard
            key={index}
            image={design.images.imageOne}
            id={design.id}
          />
        ))}
      </div>
      <Button
        text="view all"
        onclick={() => {
          router.push("/designs");
        }}
      />
    </section>
  );
}
