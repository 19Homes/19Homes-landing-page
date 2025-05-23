import { column1Images, column3Images } from "../../constants";
import CardColumn from "../card-column";
import CentralImage from "../central-image";

export default function ImageGrid() {
  return (
    <div className="grid h-[300px] w-[min(100%,600px)] shrink-0 grid-cols-5 gap-2 overflow-y-hidden rounded-xl sm:h-[400px] sm:gap-4 md:h-[500px]">
      <div className="animate-card-slide flex h-full flex-col gap-2 sm:gap-4">
        <CardColumn columnImages={column1Images} />
      </div>
      <CentralImage />
      <div className="animate-card-slide-down flex h-full translate-y-[-50.5%] flex-col gap-2 overflow-y-hidden sm:gap-4">
        <CardColumn columnImages={column3Images} />
      </div>
    </div>
  );
}
