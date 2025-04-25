import { TestimonialCard } from "../types";
import Lisa from "../../../../public/testimonial/Lisa-billy.png";
import Rasheed from "../../../../public/testimonial/Rasheed-Bawa.png";
import Will from "../../../../public/testimonial/Will-Smith.png";

export const testimonialCards: TestimonialCard[] = [
  {
    name: "Rasheed Bawa",
    role: "Home owner",
    text: "Lorem ipsum dolor sit amet consectetur. Nisl enim tincidunt iaculis risus porttitor metus purus. ",
    image: Rasheed,
    stars: 3,
  },
  {
    name: "Lisa Billy",
    role: "Reseller",
    text: "Lorem ipsum dolor sit amet consectetur. Nisl enim tincidunt iaculis risus porttitor metus purus. ",
    image: Lisa,
    stars: 4,
  },
  {
    name: "Will Smith",
    role: "Home owner",
    text: "Lorem ipsum dolor sit amet consectetur. Nisl enim tincidunt iaculis risus porttitor metus purus. ",
    image: Will,
    stars: 3,
  },
];
