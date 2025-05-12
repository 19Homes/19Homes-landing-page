import { CardBase } from "@/types";
import sales from "../../../../public/services/house-sales.png";
import building from "../../../../public/services/building.png";
import architecturalDesign from "../../../../public/designs/design.jpg";
import interiorDesign from "../../../../public/services/interior.jpg";

export const ServicesCardsData: CardBase[] = [
  {
    title: "house and land sales",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl enim tincidunt iaculis risus porttitor metus purus. Scelerisque at faucibus diam faucibus ultrices dignissim natoque mattis mattis. ",
    image: sales,
  },
  {
    title: "building",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl enim tincidunt iaculis risus porttitor metus purus. Scelerisque at faucibus diam faucibus ultrices dignissim natoque mattis mattis. ",
    image: building,
  },
  {
    title: "architectural design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl enim tincidunt iaculis risus porttitor metus purus. Scelerisque at faucibus diam faucibus ultrices dignissim natoque mattis mattis. ",
    image: architecturalDesign,
  },
  {
    title: "interior design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl enim tincidunt iaculis risus porttitor metus purus. Scelerisque at faucibus diam faucibus ultrices dignissim natoque mattis mattis. ",
    image: interiorDesign,
  },
];
