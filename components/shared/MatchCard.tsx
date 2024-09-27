/* eslint-disable @next/next/no-img-element */

import { IMatchCard } from "@/utils/api/types";
import { Button } from "../ui/button";
import { Icons } from "../assets/icon";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";

import { Toggle } from "@/components/ui/toggle";

const MatchCard: React.FC<IMatchCard> = ({
  homeTeam,
  awayTeam,
  date,
  time,
}) => (
  <>
    <div>
      <div className="matchCard p-4 rounded-md w-full ">
        <div className="flex items-center justify-between">
          <div className="md:space-y-2 items-center justify-between space-y-4">
            <div className="flex items-center">
              <img
                src="https://media.api-sports.io/football/teams/65.png"
                className="h-6 w-6 mr-1"
                alt="Nottingham Forest"
              />
              <p className="flex-shrink-0 text-[#000301] text-[0.8em]">
                Nottingham Forest
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://media.api-sports.io/football/teams/36.png"
                className="h-6 w-6 mr-1"
                alt="Fulham"
              />
              <p className="flex-shrink-0 text-[#000301] text-[0.8em]">
                Fulham white
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 w-fit ml-auto gap-[2px] ">
              <Toggle className="bg-blue px-4 py-2 rounded-s-md flex items-center justify-center cursor-pointer ">
                <p className="text-white">H</p>
              </Toggle>
              <Button className="bg-blue px-4 py-2 flex items-center justify-center cursor-pointer ">
                <p className="text-white">X</p>
              </Button>
              <Button className="bg-blue px-4 py-2 rounded-e-md flex items-center justify-center cursor-pointer ">
                <p className=" text-white">A</p>
              </Button>
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
                  Sat 28 Sep, 03:00 PM
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
                        src="https://media.api-sports.io/football/teams/65.png"
                        className="h-6 w-6 mr-1 md:mr-2"
                        alt="Nottingham Forest"
                      />
                      <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                        Not
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="matchStatsDraw flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        D
                      </div>
                      <div className="matchStatsWin flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        W
                      </div>
                      <div className="matchStatsDraw flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        D
                      </div>
                      <div className="matchStatsWin flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        W
                      </div>
                      <div className="matchStatsDraw flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        D
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center space-y-2">
                    <div className="flex items-center">
                      <img
                        src="https://media.api-sports.io/football/teams/36.png"
                        className="h-6 w-6 mr-1 md:mr-2"
                        alt="Fulham"
                      />
                      <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                        Ful
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="matchStatsLose flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        L
                      </div>
                      <div className="matchStatsWin flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        W
                      </div>
                      <div className="matchStatsDraw flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        D
                      </div>
                      <div className="matchStatsDraw flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        D
                      </div>
                      <div className="matchStatsWin flex items-center justify-center h-6 w-6 text-white rounded-full text-sm">
                        W
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-[#6D7786] text-sm my-4">
                  H2H (Last 5 matches)
                </h4>
                <div className="bg-[#F5F8FA] border border-[#F5F8FA] rounded-lg p-4 mb-3">
                  <p className="text-[#8C97A7] text-[10px] text-right font-light">
                    02 Apr 2024
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                      <img
                        src="https://media.api-sports.io/football/teams/65.png"
                        className="h-6 w-6 mr-1 md:mr-2"
                        alt="Nottingham Forest"
                      />
                      <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                        Not
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <p className="text-[#020300]">3</p>
                      <p className="text-[#020300]">-</p>
                      <p className="text-[#020300]">1</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://media.api-sports.io/football/teams/36.png"
                        className="h-6 w-6 mr-1 md:mr-2"
                        alt="Fulham"
                      />
                      <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                        Ful
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </>
);

export default MatchCard;
