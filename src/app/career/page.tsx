import PageHeader from "@/components/page-header";
import ImageGrid from "./components/image-grid";
export default function Page() {
  return (
    <main>
      <PageHeader title="become an agent" />
      <section className="mt-20 flex w-full max-w-[1512px] gap-8 px-14">
        <ImageGrid />
      </section>
    </main>
  );
}
