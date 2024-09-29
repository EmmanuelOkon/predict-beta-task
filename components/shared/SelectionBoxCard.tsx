/* eslint-disable @next/next/no-img-element */
import React from "react";

const SelectionBoxCard = () => {
  return (
    <div className="border-[0.5px] border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="w-full">
        <div className="flex items-center">
          <div className="rounded-sm bg-gray-200 h-6 w-6 flex items-center justify-center mr-4">
            <p className="text-[#5F6B7A]">H</p>
          </div>
          <img
            src="https://media.api-sports.io/football/teams/65.png"
            className="h-6 w-6 mr-3"
            alt="club"
          />
          <p className="text-[#160B0F] text-sm">Nottingham Forest</p>
        </div>
        <div className="flex items-center mt-2">
          <div className="rounded-sm bg-gray-200 h-6 w-6 flex items-center justify-center mr-4">
            <p className="text-[#5F6B7A]">A</p>
          </div>
          <img
            src="https://media.api-sports.io/football/teams/36.png"
            className="h-6 w-6 mr-3"
            alt="club"
          />
          <p className="text-[#160B0F] text-sm">Fulham</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="sc-dkrGBB fiNZeZ text-center text-[#8895A7] text-xs font-light">
          HOME
        </p>
      </div>
    </div>
  );
};

export default SelectionBoxCard;
