import { CardBase } from "@/types";
import commitment from "../../../../public/features/commitment.svg";
import expertise from "../../../../public/features/expertise.svg";
import satisfaction from "../../../../public/features/satisfaction.svg";
import service from "../../../../public/features/service.svg";
import advice from "../../../../public/features/advise.svg";
import opportunities from "../../../../public/features/opportunities.svg";

export const featuresData: CardBase[] = [
  {
    title: "our commitment",
    description:
      "We’re dedicated to integrity, quality, and your vision—delivering exceptional homes and designs that stand the test of time.",
    image: commitment,
  },
  {
    title: "our expertise",
    description:
      "With deep market knowledge and creative innovation, we craft spaces that blend functionality, beauty, and lasting value.",
    image: expertise,
  },
  {
    title: "customer satisfaction",
    description:
      "Your dream home is our mission. We listen, adapt, and exceed expectations—because your happiness defines our success.",
    image: satisfaction,
  },
  {
    title: "exceptional service",
    description:
      "From first consult to final keys, we provide seamless, personalized support—making your journey smooth and rewarding.",
    image: service,
  },
  {
    title: "personalized advice",
    description:
      "Tailored solutions for your unique needs. We don’t just sell homes—we build partnerships for your future and offer wisdom for excellent choice making.",
    image: advice,
  },
  {
    title: "investment opportunites",
    description:
      "Smart and profitable opportunities to grow your income and multiply your wealth. We offer multiple avenues for financial growth and a promise of security and expansion.",
    image: opportunities,
  },
];
