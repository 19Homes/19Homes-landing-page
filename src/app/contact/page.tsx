import PageHeader from "@/components/page-header";
import ContactBlock from "./components/contact-block";
import Form from "./components/form";

export default function ContactUs() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader title="contact us" />
      <section className="flex flex-col items-center gap-[100px]">
        <ContactBlock />
        <Form />
      </section>
    </main>
  );
}
