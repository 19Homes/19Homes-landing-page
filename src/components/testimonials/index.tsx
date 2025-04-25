import { testimonialCards } from "./constants";
import TestimonialCardBlock from "./components/testimonial-card";

export default function Testimonials() {
  return (
    <section className="px-14 pb-[44px] flex">
      <div className="flex flex-col gap-20 items-center w-full ml-8">
        <h3 className="font-poppins font-bold text-3xl text-black-100">
          What <span className="text-gold-100">Our Clients</span> Say
        </h3>
        <section
          className="flex gap-[55px] w-full overflow-auto pl-8"
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
