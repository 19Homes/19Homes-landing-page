import PageHeader from "@/components/page-header";
import ImageGrid from "./components/image-grid";
import CareerForm from "./components/form";
export default function Page() {
  return (
    <main>
      <PageHeader title="become an agent" />
      <section className="mt-25 flex w-full max-w-[1512px] flex-col items-center gap-25">
        <section className="flex items-center gap-8 px-14">
          <ImageGrid />
          <div className="flex flex-col gap-4">
            <h2 className="text-black-100 font-poppins text-7xl font-bold uppercase">
              build <br />
              <span className="text-gold-100">a community</span>
              <br /> with 19homes
            </h2>
            <p className="font-montserrat text-black-75 text-2xl font-normal">
              Become an agent with 19Homes and help us reach more people. We are
              a fast growing community and your progress and success are assured
              with us.
            </p>
            <p className="font-montserrat text-gold-100 text-xl font-bold uppercase">
              kindly fill the form below!
            </p>
          </div>
        </section>
        <CareerForm />
      </section>
    </main>
  );
}
