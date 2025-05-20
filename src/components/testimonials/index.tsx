import { testimonialCards } from "./constants";
import TestimonialCardBlock from "./components/testimonial-card";

export default function Testimonials() {
  return (
    <section className="mx-auto flex w-full max-w-[1512px] justify-center px-4 lg:px-14 lg:pb-[44px]">
      <div className="ml-8 flex w-full flex-col items-center gap-10 lg:gap-20">
        <h3 className="font-poppins text-black-100 text-[20px] font-bold lg:text-3xl">
          What <span className="text-gold-100">Our Clients</span> Say
        </h3>
        <section
          className="flex w-full gap-[55px] overflow-auto pl-4.5 lg:pl-10"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonialCards.map((card, index) => (
            <TestimonialCardBlock
              key={index}
              name={card.name}
              image={card.image}
              text={card.text}
              role={card.role}
              stars={card.stars}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
