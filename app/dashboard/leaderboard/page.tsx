import React from "react";

const LeaderBoard = () => {
  return (
    <div>
      <section className="w-full p-4 md:p-8">
        <div className="flex items-center justify-center flex-col py-20 lg:py-32">
          <h3 className="font-bold text-3xl mb-2">No leaderboard</h3>
          <p className="text-sm">
            There is no leaderboard for this week
          </p>
        </div>
      </section>
    </div>
  );
};

export default LeaderBoard;
