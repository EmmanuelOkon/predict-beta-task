import { ISelection } from "@/utils/api/types";
import { Icons } from "../assets/icon";
import SelectionBoxCard from "./SelectionBoxCard";
import { Separator } from "../ui/separator";

const SelectionBox: React.FC<ISelection> = ({ type, team }) => (
  <div className="hidden lg:block md:w-1/3 md:pl-8">
    <div className="bg-white pb-7 rounded-md border">
      <div className="bg-rose px-2 py-3 flex items-center justify-center rounded-md rounded-b-none space-x-2.5 mb-6">
        <Icons.Select />
        <p className="text-white">Selections</p>
      </div>
      <div className="px-4 space-y-4 overflow-y-auto max-h-[450px] ">
        <SelectionBoxCard />
      </div>
      <div className="mt-6 px-4">
        <Separator />
        <button
          type="submit"
          className=" bg-rose cursor-pointer py-2 px-4 flex justify-center items-center text-white text-center rounded-sm w-full"
        >
          <span>Submit your prediction </span>
        </button>
      </div>
    </div>


  </div>
);

export default SelectionBox;
