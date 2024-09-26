"use client";

import * as React from "react";

// const targetDate = new Date("2024-09-28T05:30:00+01:00");

// const Countdown: React.FC = () => {
//   const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

//   function calculateTimeLeft() {
//     const difference = +targetDate - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   }

//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const timeComponents = Object.keys(timeLeft).map((interval) => {
//     if (!timeLeft[interval]) {
//       return null;
//     }

//     return (
//       <span className="mx-1" key={interval}>
//         {timeLeft[interval]} {interval}{" "}
//       </span>
//     );
//   });

//   return (
//     <div className="text-center">
//       {timeComponents.length ? (
//         <div className="text-xl">{timeComponents}</div>
//       ) : (
//         <span className="text-xl">Time&apos;s up!</span>
//       )}
//     </div>
//   );
// };

// export default Countdown;



const Countdown = () => {
  const [endTime, setEndTime] = React.useState<Date | null>(null);

  React.useEffect(() => {
    const currentTime = new Date();
    const countdownEndTime = new Date(currentTime);
    countdownEndTime.setDate(currentTime.getDate() + 1); // Add 1 day
    countdownEndTime.setHours(currentTime.getHours() + 21); // Add 21 hours
    countdownEndTime.setMinutes(currentTime.getMinutes() + 11); // Add 11 minutes
    countdownEndTime.setSeconds(currentTime.getSeconds()); // Add current seconds

    setEndTime(countdownEndTime);
  }, []);

  return (
    <div className="text-white">
      {endTime ? (
        <p>Countdown ends at: {endTime.toLocaleString()}</p>
      ) : (
        <p>Calculating time left</p>
      )}
    </div>
  );
};

export default Countdown;