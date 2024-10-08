/* eslint-disable @next/next/no-img-element */

import * as React from "react";
import { Icons } from "../assets/icon";
import { Separator } from "../ui/separator";
import { Datum } from "@/utils/api/fixturesTypes";
import { Prediction } from "./MatchCard";
import { useSubmitPredictions } from "@/utils/api/useSeasons";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface MatchCardProps {
  data: Datum[];
  predictions: Prediction[];
}

const SelectionBox: React.FC<MatchCardProps> = ({ data, predictions }) => {
  const { mutate, isPending, isSuccess, isError, error } =
    useSubmitPredictions();

  const handleSubmitPredictions = () => {
    if (predictions.length !== data.length) {
      return toast.warning("Please predict all fixtures");
    }
    if (predictions.length > 0) {
      mutate(predictions);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Predictions submitted successfully!");
    }
    if (isError && error) {
      toast.error(`Error submitting predictions: ${error.message}`);
    }
  }, [isSuccess, isError, error]);

  const getPredictionForFixture = (fixtureId: number) => {
    return predictions.find((p) => p.fixtureId === fixtureId)?.result;
  };

  if (!data || data.length === 0) {
    return <p className="text-center text-rose ">No fixtures available</p>;
  }

  return (
    <div className="hidden lg:block md:w-1/3 md:pl-8">
      <div className="bg-white pb-7 rounded-md border">
        <div className="bg-rose px-2 py-3 flex items-center justify-center rounded-md rounded-b-none space-x-2.5 mb-6">
          <Icons.Select />
          <p className="text-white">Selections</p>
        </div>
        <div className="px-4 space-y-4 overflow-y-auto max-h-[450px] ">
          {data.map((fixture, index) => {
            const prediction = getPredictionForFixture(fixture.id);
            return (
              <div
                key={index}
                className="border-[0.5px] border-gray-200 px-4 py-2 flex items-center justify-between"
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <div className="rounded-sm bg-gray-200 h-6 w-6 flex items-center justify-center mr-4">
                      <p className="text-[#5F6B7A]">H</p>
                    </div>
                    <img
                      src={fixture?.homeTeam?.clubLogo}
                      className="h-6 w-6 mr-3"
                      alt={fixture?.homeTeam?.name}
                    />
                    <p className="text-[#160B0F] text-sm">
                      {fixture?.homeTeam?.name}
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="rounded-sm bg-gray-200 h-6 w-6 flex items-center justify-center mr-4">
                      <p className="text-[#5F6B7A]">A</p>
                    </div>
                    <img
                      src={fixture?.awayTeam?.clubLogo}
                      className="h-6 w-6 mr-3"
                      alt={fixture?.awayTeam?.name}
                    />
                    <p className="text-[#160B0F] text-sm">
                      {fixture?.awayTeam?.name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="sc-dkrGBB fiNZeZ text-center text-[#8895A7] text-xs font-light">
                    {prediction || ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 px-4">
          <Separator />
          <Button
            type="button"
            onClick={handleSubmitPredictions}
            disabled={isPending}
            className=" bg-rose cursor-pointer py-2 px-4 flex justify-center items-center text-white text-center rounded-sm w-full"
          >
            <span>Submit your prediction </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectionBox;
