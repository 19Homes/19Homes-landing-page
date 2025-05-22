"use client";
import PageHeader from "@/components/page-header";
import DesignImageBlock from "./components/design-image-block";
import DesignContactBanner from "./components/design-contact-banner";
import OtherDesignsBlock from "./components/other-designs-block";
export default function Page() {
  return (
    <main>
      <PageHeader title="Single Design Portfolio" />
      <section className="flex flex-col items-center gap-13 lg:gap-25">
        <DesignImageBlock />
        <DesignContactBanner />
        <OtherDesignsBlock />
      </section>
    </main>
  );
}
