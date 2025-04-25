import { StaticImageData } from "next/image";


export type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
  image: StaticImageData;
};

export type TestimonialCard = TestimonialCardProps & {
  stars: number;
};