import { CardBase } from "@/types";
import sales from "../../../../public/services/house-sales.png";
import building from "../../../../public/services/building.png";
import architecturalDesign from "../../../../public/designs/design.jpg";
import interiorDesign from "../../../../public/services/interior.jpg";

export const ServicesCardsData: CardBase[] = [
  {
    title: "house and land sales",
    description:
      "We simplify your property journey with expertly selected homes and strategic land packages. Whether you're buying or investing, our end-to-end guidance ensures smart decisions and lasting value.",
    image: sales,
  },
  {
    title: "building",
    description:
      "From concept to completion, we construct high-quality homes using premium materials and skilled craftsmanship. Transparent processes and fixed timelines deliver your dream home without surprises or stress.",
    image: building,
  },
  {
    title: "architectural design",
    description:
      "Our architects create custom, innovative designs tailored to your lifestyle. We balance aesthetics, functionality and sustainability to transform your vision into a structurally sound, beautiful reality.",
    image: architecturalDesign,
  },
  {
    title: "interior design",
    description:
      "We curate cohesive, livable spaces that reflect your personality. From material selection to furniture planning, our designs optimize comfort, flow and visual appeal in every detail.",
    image: interiorDesign,
  },
];
