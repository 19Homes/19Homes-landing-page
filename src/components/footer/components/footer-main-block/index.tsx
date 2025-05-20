import FooterTextAndLogoBlock from "../footer-text-and-logo-block";
import FooterCategoriesBlock from "../footer-categories-block";
import FooterServicesBlock from "../footer-services-block";
import FooterContactBlock from "../footer-contact-block";

export default function FooterMainBlock() {
  return (
    <section className="flex gap-[13px] lg:gap-13">
      <FooterTextAndLogoBlock />
      <section className="flex w-full justify-between">
        <FooterCategoriesBlock />
        <FooterServicesBlock />
        <FooterContactBlock />
      </section>
    </section>
  );
}
