import { column1Images, column3Images } from "../../constants";
import CardColumn from "../card-column";
import CentralImage from "../central-image";

export default function ImageGrid() {
  return (
    <div className="grid h-[500px] w-[600px] grid-cols-5 gap-4 overflow-y-hidden rounded-xl">
      <div className="animate-card-slide flex h-full flex-col gap-4">
        <CardColumn columnImages={column1Images} />
      </div>
      <CentralImage />
      <div className="animate-card-slide-down flex h-full translate-y-[-50.5%] flex-col gap-4 overflow-y-hidden">
        <CardColumn columnImages={column3Images} />
      </div>
    </div>
  );
}