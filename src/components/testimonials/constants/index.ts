import { TestimonialCard } from "../types";
import Lisa from "../../../../public/testimonial/Lisa-billy.png";
import Rasheed from "../../../../public/testimonial/Rasheed-Bawa.png";
import Will from "../../../../public/testimonial/Will-Smith.png";

export const testimonialCards: TestimonialCard[] = [
  {
    name: "Rasheed Bawa",
    role: "Home owner",
    text: "Bold, beautiful, and brilliantly functional—19Homes’ designs are next-level.",
    image: Rasheed,
    stars: 3,
  },
  {
    name: "Lisa Billy",
    role: "Reseller",
    text: "Found my dream home in 19 days with 19Homes! 🏡✨ Couldn’t be happier!",
    image: Lisa,
    stars: 4,
  },
  {
    name: "Will Smith",
    role: "Home owner",
    text: "Working with 19Homes was a game-changer. Their designs blend creativity with practicality in a way that feels so uniquely ‘me.’ From the first sketch to the final walkthrough, they nailed every detail.",
    image: Will,
    stars: 4,
  },
];
