import PageHeader from "@/components/page-header";
import BlockOne from "./components/block-one";
import BlockTwo from "./components/block-two";
import CompanyStatements from "./components/company-statements";

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader title="about us" />
      <section className="mt-20 flex flex-col gap-[100px] px-14">
        <BlockOne />
        <BlockTwo />
        <CompanyStatements />
      </section>
    </main>
  );
}
