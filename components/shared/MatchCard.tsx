/* eslint-disable @next/next/no-img-element */

import { Icons } from "../assets/icon";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";

import { Toggle } from "@/components/ui/toggle";
import { Datum } from "@/utils/api/fixturesTypes";
import FixtureDateTime from "./FixtureDate";

export interface Prediction {
  fixtureId: number;
  result: "HOME" | "DRAW" | "AWAY";
}

interface MatchCardProps {
  data: Datum[];
  onPrediction: (fixtureId: number, prediction: "H" | "X" | "A") => void;
  predictions: Prediction[];
}

const MatchCard: React.FC<MatchCardProps> = ({
  data,
  onPrediction,
  predictions,
}) => {
  if (!data || data.length === 0) {
    console.log("No fixtures condition met");
    return <p className="text-center text-rose ">No fixtures available</p>;
  }

  const getPredictionForFixture = (fixtureId: number) => {
    return predictions.find((p) => p.fixtureId === fixtureId)?.result;
  };

  return (
    <>
      {data.map((fixture, index) => {
        const prediction = getPredictionForFixture(fixture.id);
        return (
          <div key={index}>
            <div className="matchCard p-4 rounded-md w-full ">
              <div className="flex items-center justify-between">
                <div className="md:space-y-2 items-center justify-between space-y-4">
                  <div className="flex items-center">
                    <img
                      src={fixture?.homeTeam.clubLogo}
                      className="h-6 w-6 mr-1"
                      alt={fixture?.homeTeam.name}
                    />
                    <p className="flex-shrink-0 text-[#000301] text-[0.8em]">
                      {fixture?.homeTeam.name}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={fixture?.awayTeam.clubLogo}
                      className="h-6 w-6 mr-1"
                      alt="Fulham"
                    />
                    <p className="flex-shrink-0 text-[#000301] text-[0.8em]">
                      {fixture?.awayTeam.name}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-3 w-fit ml-auto gap-[2px] ">
                    <Toggle
                      className={`px-4 py-2 rounded-s-md flex items-center justify-center cursor-pointer ${
                        prediction === "HOME" ? "bg-blue" : "bg-gray-200"
                      }`}
                      onClick={() => onPrediction(fixture.id, "H")}
                    >
                      <p
                        className={
                          prediction === "HOME"
                            ? "text-white"
                            : "text-[#5F6B7A]"
                        }
                      >
                        H
                      </p>
                    </Toggle>
                    <Toggle
                      className={`px-4 py-2 flex items-center justify-center cursor-pointer ${
                        prediction === "DRAW" ? "bg-blue" : "bg-gray-200"
                      }`}
                      onClick={() => onPrediction(fixture.id, "X")}
                    >
                      <p
                        className={
                          prediction === "DRAW"
                            ? "text-white"
                            : "text-[#5F6B7A]"
                        }
                      >
                        X
                      </p>
                    </Toggle>
                    <Toggle
                      className={`px-4 py-2 rounded-e-md flex items-center justify-center cursor-pointer ${
                        prediction === "AWAY" ? "bg-blue" : "bg-gray-200"
                      }`}
                      onClick={() => onPrediction(fixture.id, "A")}
                    >
                      <p
                        className={
                          prediction === "AWAY"
                            ? "text-white"
                            : "text-[#5F6B7A]"
                        }
                      >
                        A
                      </p>
                    </Toggle>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex items-center justify-between gap-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-0">
                    <div className="flex items-center w-full justify-between ">
                      <div className="flex items-center gap-1">
                        <Icons.Stats />
                        <AccordionTrigger className="focus:outline-0 active:ring-0 active:outline-0 focus:ring-0 hover:no-underline ">
                          <p className="text-[#2A2E33] font-light">Stats</p>
                        </AccordionTrigger>
                      </div>
                      <p className="text-[#8C97A7] text-sm font-light text-nowrap ">
                        <FixtureDateTime
                          fixtureDateTime={fixture?.fixtureDateTime}
                        />
                      </p>
                    </div>

                    <AccordionContent className="w-full">
                      <Separator className="my-4" />
                      <h4 className="text-[#6D7786] text-sm mb-4">
                        Form (Last 5 matches)
                      </h4>
                      <div className="bg-[#F5F8FA] border border-[#F5F8FA] rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <img
                              src={fixture?.homeTeam.clubLogo}
                              className="h-6 w-6 mr-1 md:mr-2"
                              alt={fixture?.homeTeam.name}
                            />
                            <p className="text-[#000301] text-[0.8em] uppercase">
                              {fixture?.homeTeam.shortName}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {Array.isArray(fixture.homeForm) &&
                              fixture.homeForm.map((result, index) => (
                                <div
                                  key={index}
                                  className={`matchStats${result} flex items-center justify-center h-6 w-6 text-black rounded-full text-sm`}
                                >
                                  {result}
                                </div>
                              ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center space-y-2">
                          <div className="flex items-center">
                            <img
                              src={fixture?.awayTeam.clubLogo}
                              className="h-6 w-6 mr-1 md:mr-2"
                              alt={fixture?.awayTeam.name}
                            />
                            <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                              {fixture?.awayTeam.shortName}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {Array.isArray(fixture.awayForm) &&
                              fixture.awayForm.map((result, index) => (
                                <div
                                  key={index}
                                  className={`matchStats${result} flex items-center justify-center h-6 w-6 text-black rounded-full text-sm`}
                                >
                                  {result} {index}
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-[#6D7786] text-sm my-4">
                        H2H (Last 5 matches)
                      </h4>
                      <div className="bg-[#F5F8FA] border border-[#F5F8FA] rounded-lg p-4 mb-3">
                        {/* {Array.isArray(fixture.head2head) &&
                        fixture.head2head.map((h2h, index) => (
                          <div key={index}>
                            <p className="text-[#8C97A7] text-[10px] text-right font-light">
                              {new Date(h2h.fixture.date).toLocaleDateString()}
                            </p>
                            <div className="flex justify-between items-center mt-3">
                              <div className="flex items-center">
                                <img
                                  src={h2h?.teams?.home?.clubLogo}
                                  className="h-6 w-6 mr-1 md:mr-2"
                                  alt={h2h?.teams?.home?.name}
                                />
                                <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                                  {h2h?.teams?.home?.shortName}
                                </p>
                              </div>
                              <div className="flex items-center gap-x-2">
                                <p className="text-[#020300]">
                                  {h2h.goals.home}
                                </p>
                                <p className="text-[#020300]">-</p>
                                <p className="text-[#020300]">
                                  {h2h.goals.away}
                                </p>
                              </div>
                              <div className="flex items-center">
                                <img
                                  src={h2h?.teams?.away.logo}
                                  className="h-6 w-6 mr-1 md:mr-2"
                                  alt={h2h.teams.away.name}
                                />
                                <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                                  {h2h.teams.away.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))} */}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MatchCard;
