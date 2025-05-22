import PageHeader from "@/components/page-header";
import ContactBlock from "./components/contact-block";
import Form from "./components/form";

export default function ContactUs() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader title="contact us" />
      <section className="flex w-full flex-col items-center gap-13 px-6 lg:gap-25 lg:px-0">
        <ContactBlock />
        <Form />
      </section>
    </main>
  );
}
