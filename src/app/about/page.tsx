import PageHeader from "@/components/page-header";
import BlockOne from "./components/block-one";
import BlockTwo from "./components/block-two";
import CompanyStatements from "./components/company-statements";

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader title="about us" />
      <section className="mt-13 flex w-full flex-col gap-13 px-6 sm:px-8 md:px-14 lg:mt-20 lg:gap-25">
        <BlockOne />
        <BlockTwo />
        <CompanyStatements />
      </section>
    </main>
  );
}
