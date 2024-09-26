import { ISelection } from "@/utils/api/types";

const SelectionBox: React.FC<ISelection> = ({ type, team }) => (
  <li className="flex items-center">
    <span className="bg-blue-900 text-white px-2 py-1 rounded mr-2">
      {type}
    </span>
    <div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-red-500 rounded-full mr-1"></div>
        {team}
      </div>
    </div>
  </li>
);

export default SelectionBox;
