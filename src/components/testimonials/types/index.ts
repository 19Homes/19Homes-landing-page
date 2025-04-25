import { StaticImageData } from "next/image";

export type TestimonialCard = {
  name: string;
  role: string;
  text: string;
  image: StaticImageData;
  stars: number;
};
