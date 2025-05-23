import PageHeader from "@/components/page-header";
import ImageGrid from "./components/image-grid";
import CareerForm from "./components/form";
export default function Page() {
  return (
    <main>
      <PageHeader title="become an agent" />
      <section className="mt-13 flex w-full max-w-[1512px] flex-col items-center gap-13 lg:mt-25 lg:gap-25">
        <section className="flex flex-col items-center px-6 gap-8 md:px-14 lg:flex-row w-full">
          <ImageGrid />
          <div className="flex flex-col gap-4 text-center lg:text-start">
            <h2 className="text-black-100 font-poppins text-2xl font-bold uppercase sm:text-4xl md:text-6xl lg:text-7xl">
              build <br />
              <span className="text-gold-100">a community</span>
              <br /> with 19homes
            </h2>
            <p className="font-montserrat text-black-75 max-w-[45ch] text-xs font-normal sm:text-xl md:text-2xl lg:max-w-prose">
              Become an agent with 19Homes and help us reach more people. We are
              a fast growing community and your progress and success are assured
              with us.
            </p>
            <p className="font-montserrat text-gold-100 text-xs font-bold uppercase sm:text-xl">
              kindly fill the form below!
            </p>
          </div>
        </section>
        <CareerForm />
      </section>
    </main>
  );
}
