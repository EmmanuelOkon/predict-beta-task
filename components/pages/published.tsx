"use client";

import React from "react";
import { usePublishedSeasons } from "@/utils/api/useSeasons";
import { IPublishedSeasons } from "@/utils/api/types";
import { Icons } from "../assets/icon";

interface Props {
  id: number | undefined
}

const Published = ({ id }: Props) => {
  const { data, isLoading, isError } = usePublishedSeasons(id as number);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center spinner w-full ">
          <span className="">
            <Icons.Spinner className="animate-spin text-rose " />
          </span>
        </div>
      ) : isError ? (
        <div>Error loading data</div>
      ) : (
        <div>
          <div className="bg-red-400 w-1/2">
            {data?.data?.map((season: IPublishedSeasons) => (
              <div key={season.id}>
                <h2>{season.publish}</h2>
                <p> ID:{season.id} </p>
                <p>Year: {season.number}</p>
                <p>Current Season: {season.deletedAt ? "Yes" : "No"}</p>
                <p>
                  Created At: {new Date(season.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Published;
