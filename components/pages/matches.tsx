"use client";
import React from "react";
import { useSeasons } from "@/utils/api/useSeasons";
import { ISeasons } from "@/utils/api/types";

const MatchesResults = () => {
  const { data, isLoading, isError } = useSeasons();

  console.log(data);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error loading data</div>
      ) : (
        <div className="bg-red-400">
          {data?.data?.map((season: ISeasons) => (
            <div key={season.id}>
              <h2>{season.name}</h2>
              <p>Year: {season.year}</p>
              <p>Current Season: {season.isCurrent ? "Yes" : "No"}</p>
              <p>
                Created At: {new Date(season.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchesResults;
