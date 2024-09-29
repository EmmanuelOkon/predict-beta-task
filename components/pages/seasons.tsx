/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { useSeasons, useWeeksFixtures } from "@/utils/api/useSeasons";
import { IPublishedWeeks, ISeasons } from "@/utils/api/types";
import { Icons } from "../assets/icon";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectionBox from "../shared/SelectionBox";
import { Separator } from "../ui/separator";
import MatchCard from "../shared/MatchCard";

import { usePublishedWeeks } from "@/utils/api/usePlayers";

interface Props {
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
  id: number | undefined;
}

interface Prediction {
  fixtureId: number;
  result: "HOME" | "DRAW" | "AWAY";
}

const SeasonsWrapper = ({ setId, id }: Props) => {
  const { data, isLoading, isError } = useSeasons();
  const {
    data: weeksData,
    isLoading: weeksIsLoading,
    isError: weeksIsError,
  } = usePublishedWeeks(id as number);
  const [selectedWeek, setSelectedWeek] = React.useState<number | undefined>(
    31
  );

  const [predictions, setPredictions] = React.useState<Prediction[]>([]);

  const handlePrediction = (fixtureId: number, prediction: "H" | "X" | "A") => {
    const result =
      prediction === "H" ? "HOME" : prediction === "X" ? "DRAW" : "AWAY";

    setPredictions((prev) => {
      const existingPredictionIndex = prev.findIndex(
        (p) => p.fixtureId === fixtureId
      );
      if (existingPredictionIndex > -1) {
        const newPredictions = [...prev];
        newPredictions[existingPredictionIndex] = { fixtureId, result };
        return newPredictions;
      } else {
        return [...prev, { fixtureId, result }];
      }
    });
  };

  console.log(predictions);

  const {
    data: fixturesData,
    isLoading: fixturesIsLoading,
    isError: fixturesError,
  } = useWeeksFixtures(id as number, selectedWeek as number);

  React.useEffect(() => {
    if (data?.data && data.data.length > 0) {
      const currentSeason = data.data.find((season) => season.isCurrent);
      if (currentSeason) {
        setId(currentSeason.id);
      }
    }
  }, [data]);

  React.useEffect(() => {
    if (data?.data && data.data.length > 0) {
      const currentSeason = data.data.find((season) => season.isCurrent);
      if (currentSeason) {
        setId(currentSeason.id);
      }
    }
  }, [data]);

  React.useEffect(() => {
    if (selectedWeek) {
      setPredictions([]);
    }
  }, [selectedWeek]);

  return (
    <>
      <section className="seasonsHeader bg-white w-full px-4 lg:px-8 py-3 flx items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative mt-1">
            <Select
              value={id?.toString()}
              onValueChange={(value) => setId(Number(value))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {data?.data?.map((season: ISeasons) => (
                  <SelectItem value={season.id.toString()} key={season.id}>
                    {season.name}{" "}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="relative mt-1">
            <Select
              value={selectedWeek?.toString()}
              onValueChange={(value) => setSelectedWeek(Number(value))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {weeksIsLoading ? (
                  <div className="flex items-center justify-center spinner w-full ">
                    <span className="">
                      <Icons.Spinner className="animate-spin text-rose " />
                    </span>
                  </div>
                ) : weeksIsError ? (
                  <div>Error loading data</div>
                ) : (
                  weeksData?.data?.map((week: IPublishedWeeks) => (
                    <SelectItem value={week.id.toString()} key={week.id}>
                      {week.id}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden">
        {isLoading || fixturesIsLoading ? (
          <div className="flex items-center justify-center spinner w-full ">
            <span className="">
              <Icons.Spinner className="animate-spin text-rose " />
            </span>
          </div>
        ) : isError || fixturesError ? (
          <div className="flex flex-col text-center items-center justify-center h-screen max-w-md mx-auto">
            An error occurred while fetching data
          </div>
        ) : (
          <div className="py-5 lg:py-10 px-4 lg:px-8">
            <section className="flex">
              <div className="flex-grow bg-white p-3 md:p-5 border rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  {Array.isArray(fixturesData?.data) &&
                  fixturesData.data.length > 0 ? (
                    <MatchCard
                      data={fixturesData.data}
                      onPrediction={handlePrediction}
                      predictions={predictions}
                    />
                  ) : (
                    <p className="text-center text-rose font-semibold">
                      No fixtures available
                    </p>
                  )}
                </div>
                <Separator className="my-8" />
              </div>
              {Array.isArray(fixturesData?.data) &&
              fixturesData.data.length > 0 ? (
                <SelectionBox
                  data={fixturesData.data}
                  predictions={predictions}
                />
              ) : (
                <p className="text-center text-rose font-semibold">
                  No fixtures available
                </p>
              )}
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default SeasonsWrapper;
