/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { useSeasons } from "@/utils/api/useSeasons";
import { ISeasons } from "@/utils/api/types";
import { Icons } from "../assets/icon";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  // SelectValue,
} from "@/components/ui/select";
import SelectionBox from "../shared/SelectionBox";
import { Separator } from "../ui/separator";
import MatchCard from "../shared/MatchCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
  id: number | undefined;
}

const SeasonsWrapper = ({ setId, id }: Props) => {
  const { data, isLoading, isError } = useSeasons();

  React.useEffect(() => {
    if (data?.data && data.data.length > 0) {
      const currentSeason = data.data.find((season) => season.isCurrent);
      if (currentSeason) {
        setId(currentSeason.id);
      }
    }
  }, [data]);

  const selectedSeason = React.useMemo(() => {
    return data?.data?.find((season) => season.id === id);
  }, [data, id]);

  console.log(data);

  return (
    <>
      <section className="hiddn seasonsHeader bg-white w-full px-4 lg:px-8 py-3 flx items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative mt-1">
            <Select
              value={id?.toString()}
              onValueChange={(value) => setId(Number(value))}
            >
              <SelectTrigger className="w-[180px]">
                {selectedSeason ? selectedSeason.year : "Select a season"}
              </SelectTrigger>
              <SelectContent>
                {data?.data?.map((season: ISeasons) => (
                  <SelectItem value={season.id.toString()} key={season.id}>
                    {season.year}{" "}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="relative mt-1">
            <Button className="relative w-full cursor-pointer rounded-lg bg-[#F5F8FA] p-3 pr-10 text-left border-[#E1E7EC] border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-300 sm:text-sm">
              <span className="text-sm text-[#6D7786] font-medium flex items-center truncate gap-3">
                <Icons.Filter />
                Week 6
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <Icons.Dropdown />
              </span>
            </Button>
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center spinner w-full ">
            <span className="">
              <Icons.Spinner className="animate-spin text-rose " />
            </span>
          </div>
        ) : isError ? (
          <div>Error loading data</div>
        ) : (
          <>
            <div className="py-5 lg:py-10 px-4 lg:px-8">
              <section className="flex">
                <div className="flex-grow bg-white p-3 md:p-5 border rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                  </div>
                  <Separator className="my-8" />
                  <h3 className="text-black font-medium text-lg text-center">
                    Deciders
                  </h3>
                  <p className="md:text-center text-[#5F6B7A] text-sm mt-3">
                    Select three likely to score different scorers and minute of
                    first goal to decide your tie
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 py-6">
                    <div>
                      <Label
                        htmlFor="mostLikelyToScore"
                        className="mb-2 flex items-center gap-2"
                      >
                        <p className="text-[#222222] text-sm">
                          Most likely to score?
                        </p>
                        <div className="py-1 px-2 bg-gray-100 rounded-md">
                          <p className="text-[#EB1536] text-xs">5 points</p>
                        </div>
                      </Label>
                      <div className=" css-b62m3t-container">
                        <span
                          id="react-select-11-live-region"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          role="log"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <div className="react-select__control css-spa4tm-control">
                          <div className="react-select__value-container css-pky9zj">
                            <div
                              className="react-select__placeholder css-ywaqv2-placeholder"
                              id="react-select-11-placeholder"
                            >
                              - Select -
                            </div>
                            <div
                              className="react-select__input-container css-49ko6p"
                              data-value=""
                            >
                              <Input
                                className="react-select__input"
                                autoCapitalize="none"
                                autocomplete="off"
                                autocorrect="off"
                                id="react-select-11-input"
                                spellcheck="false"
                                tabindex="0"
                                type="text"
                                aria-autocomplete="list"
                                aria-expanded="false"
                                aria-haspopup="true"
                                role="combobox"
                                aria-activedescendant=""
                                aria-describedby="react-select-11-placeholder"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="react-select__indicators css-1wy0on6">
                            <div
                              className="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer"
                              aria-hidden="true"
                            >
                              <svg
                                height="20"
                                width="20"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="css-8mmkcg"
                              >
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="moreLikelyToScore"
                        className="mb-2 flex gap-2"
                      >
                        <p className="text-[#222222] text-sm">
                          More likely to score?
                        </p>
                        <div className="py-1 px-2 bg-gray-100 rounded-md">
                          <p className="text-[#EB1536] text-xs">3 points</p>
                        </div>
                      </Label>
                      <div className=" css-b62m3t-container">
                        <span
                          id="react-select-12-live-region"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          role="log"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <div className="react-select__control css-spa4tm-control">
                          <div className="react-select__value-container css-pky9zj">
                            <div
                              className="react-select__placeholder css-ywaqv2-placeholder"
                              id="react-select-12-placeholder"
                            >
                              - Select -
                            </div>
                            <div
                              className="react-select__input-container css-49ko6p"
                              data-value=""
                            >
                              <Input
                                className="react-select__input"
                                autoCapitalize="none"
                                autoComplete="off"
                                autocorrect="off"
                                id="react-select-12-input"
                                spellcheck="false"
                                tabindex="0"
                                type="text"
                                aria-autocomplete="list"
                                aria-expanded="false"
                                aria-haspopup="true"
                                role="combobox"
                                aria-activedescendant=""
                                aria-describedby="react-select-12-placeholder"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="react-select__indicators css-1wy0on6">
                            <div
                              className="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer"
                              aria-hidden="true"
                            >
                              <svg
                                height="20"
                                width="20"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="css-8mmkcg"
                              >
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="likelyToScore"
                        className="mb-2 flex gap-2"
                      >
                        <p className="text-[#222222] text-sm">
                          Likely to score?
                        </p>
                        <div className="py-1 px-2 bg-gray-100 rounded-md">
                          <p className="text-[#EB1536] text-xs">1 points</p>
                        </div>
                      </label>
                      <div className=" css-b62m3t-container">
                        <span
                          id="react-select-13-live-region"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          role="log"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <div className="react-select__control css-spa4tm-control">
                          <div className="react-select__value-container css-pky9zj">
                            <div
                              className="react-select__placeholder css-ywaqv2-placeholder"
                              id="react-select-13-placeholder"
                            >
                              - Select -
                            </div>
                            <div
                              className="react-select__input-container css-49ko6p"
                              data-value=""
                            >
                              <Input
                                className="react-select__input"
                                autoCapitalize="none"
                                autocomplete="off"
                                autocorrect="off"
                                id="react-select-13-input"
                                spellcheck="false"
                                tabindex="0"
                                type="text"
                                aria-autocomplete="list"
                                aria-expanded="false"
                                aria-haspopup="true"
                                role="combobox"
                                aria-activedescendant=""
                                aria-describedby="react-select-13-placeholder"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="react-select__indicators css-1wy0on6">
                            <div
                              className="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer"
                              aria-hidden="true"
                            >
                              <svg
                                height="20"
                                width="20"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="css-8mmkcg"
                              >
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <Label htmlFor="timeOfFirstGoal" className="mb-2 block">
                        <p className="text-[#222222] text-sm">
                          Minute the earliest goal in the round will be scored
                        </p>
                      </Label>

                      <Input
                        id="timeOfFirstGoal"
                        type="number"
                        placeholder="1"
                        max="120"
                        name="timeOfFirstGoal"
                        className="sc-bcXGCL OICvW w-full input "
                      />
                    </div>
                    <div className="mt-6 px-4">
                      <Separator className="mt-8" />
                      <button
                        type="submit"
                        className="sc-hLBatu sc-eDvShL kepJyv bIHirv py-2 px-4 flex justify-center items-center text-white text-center rounded-sm w-full"
                      >
                        <span>Submit your prediction </span>
                      </button>
                    </div>
                  </div>
                </div>
                <SelectionBox />
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SeasonsWrapper;
