import { IMatchCard } from "@/utils/api/types";

const MatchCard: React.FC<IMatchCard> = ({
  homeTeam,
  awayTeam,
  date,
  time,
}) => (
  <div className="border rounded p-4">
    <div className="flex justify-between items-center mb-2">
      <div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
          {homeTeam}
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-white border rounded-full mr-2"></div>
          {awayTeam}
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-900 text-white px-3 py-1 rounded">H</button>
        <button className="bg-blue-900 text-white px-3 py-1 rounded">X</button>
        <button className="bg-blue-900 text-white px-3 py-1 rounded">A</button>
      </div>
    </div>
    <div className="text-sm text-gray-600">
      <span className="mr-2">Stats</span>
      {date}, {time}
    </div>
  </div>
);

export default MatchCard;
