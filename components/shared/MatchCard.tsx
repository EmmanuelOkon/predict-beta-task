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
import { Datum, IFixtures } from "@/utils/api/fixturesTypes";
import FixtureDateTime from "./FixtureDate";

interface MatchCardProps {
  data: Datum[];
}

interface TransformedFixture extends Omit<Datum, "homeForm" | "awayForm"> {
  homeForm: string[];
  awayForm: string[];
}

// const MatchCard = ({ data }: IFixtures) => {
const MatchCard: React.FC<MatchCardProps> = ({ data }) => {
  console.log("MatchCard data:", data);
  if (!data || data.length === 0) {
    console.log("No fixtures condition met");
    return <p className="text-center bg-yellow-400 ">No fixtures available</p>;
  }



  // const transformedFixtures = data.map((fixture) => ({
  //   ...fixture,
  //   homeForm: fixture.homeForm ? fixture.homeForm.split("") : [],
  //   awayForm: fixture.awayForm ? fixture.awayForm.split("") : [],
  // }));

  // const transformedFixtures = data.map((fixture) => ({
  //   ...fixture,
  //   homeForm: Array.isArray(fixture.homeForm)
  //     ? fixture.homeForm
  //     : fixture.homeForm?.split("") || [],
  //   awayForm: Array.isArray(fixture.awayForm)
  //     ? fixture.awayForm
  //     : fixture.awayForm?.split("") || [],
  // }));

  // console.log(transformedFixtures?.data?.homeForm);

  return (
    <>
      {/* {data.map((match, index) => (
        <div key={index}>
          <img
            src={match?.homeTeam.clubLogo}
            className="h-6 w-6 mr-1"
            alt={match?.homeTeam.name}
          />
          <p className="flex-shrink-0 text-[#000301] text-[0.8em]">
            {match?.homeTeam.name}
          </p>
        </div>
      ))} */}
      {data.map((fixture, index) => (
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
                                {result} {index}
                              </div>
                            ))}
                          {/* {fixture?.homeForm?.map((result: string, index: number) => (
                            <div
                              key={index}
                              className={`matchStats${result} flex items-center justify-center h-6 w-6 text-white rounded-full text-sm`}
                            >
                              {result}
                            </div>
                          ))} */}
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
                      {Array.isArray(fixture.head2head) &&
                        fixture.head2head.map((h2h, index) => (
                          <div key={index}>
                            <p className="text-[#8C97A7] text-[10px] text-right font-light">
                              {new Date(h2h.fixture.date).toLocaleDateString()}
                            </p>
                            <div className="flex justify-between items-center mt-3">
                              <div className="flex items-center">
                                <img
                                  src={h2h?.teams?.home?.logo}
                                  className="h-6 w-6 mr-1 md:mr-2"
                                  alt={h2h?.teams?.home?.name}
                                />
                                <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                                  {h2h?.teams?.home?.name}
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
                                  src={h2h.teams.away.logo}
                                  className="h-6 w-6 mr-1 md:mr-2"
                                  alt={h2h.teams.away.name}
                                />
                                <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                                  {h2h.teams.away.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      {/* <p className="text-[#8C97A7] text-[10px] text-right font-light">
                        02 Apr 2024
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center">
                          <img
                            src={fixture?.homeTeam.clubLogo}
                            className="h-6 w-6 mr-1 md:mr-2"
                            alt={fixture?.homeTeam.name}
                          />
                          <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                            {fixture?.homeTeam.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <p className="text-[#020300]">
                            {fixture?.head2head?.score}
                          </p>
                          <p className="text-[#020300]">-</p>
                          <p className="text-[#020300]">
                            {fixture?.head2head?.awayScore}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src={fixture.awayTeam.clubLogo}
                            className="h-6 w-6 mr-1 md:mr-2"
                            alt={fixture.awayTeam.name}
                          />
                          <p className="sc-dkrGBB fiNZeZ text-[#000301] text-[0.8em] uppercase">
                            {fixture.awayTeam.name}
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MatchCard;
