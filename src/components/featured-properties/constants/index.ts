import { FeaturedPropertyCardType } from "../types";
import cornerstoneDuplex from "../../../../public/newsletter/newsletter.jpg";
import oneStoryBuilding from "../../../../public/featured-properties/one story building.png";
import whitedge from "../../../../public/featured-properties/whiteedge duplex.png";
import bathrooms from "../../../../public/featured-properties/bathtub.svg";
import livingrooms from "../../../../public/featured-properties/chair.svg";
import area from "../../../../public/featured-properties/responsive_layout.svg";
import { StaticImageData } from "next/image";

export const featuredPropertyCardDetails: FeaturedPropertyCardType[] = [
  {
    name: "cornerstone duplex",
    price: "₦25,000,000.00",
    image: cornerstoneDuplex,
  },
  {
    name: "one story building",
    price: "₦75,000,000.00",
    image: oneStoryBuilding,
  },
  { name: "whitedge duplex", price: "₦75,000,000.00", image: whitedge },
];

export const cardInfoIconDetails: {
  icon: StaticImageData;
  value: string;
  alt: string;
}[] = [
  { icon: bathrooms, value: "2", alt: "bathrooms" },
  { icon: livingrooms, value: "3", alt: "living rooms" },
  { icon: area, value: "3000 Sqft", alt: "Area" },
];
