import { headerButtonTypes } from "../../types";
import { cn } from "@/utils/classnames";

export default function HeaderButton({ classnames, text }: headerButtonTypes) {
  return (
    <button
      className={cn(
        classnames,
        "p-4 rounded-sm text-sm font-bold font-montserrat capitalize"
      )}
    >
      {text}
    </button>
  );
}
