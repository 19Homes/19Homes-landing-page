import { StaticImageData } from "next/image";

export type BlogPost = {
  title: string;
  description: string;
  image: StaticImageData;
};
