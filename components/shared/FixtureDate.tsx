import React from "react";
import { format, parseISO } from "date-fns";

export function formatFixtureDate(date: Date | string): string {
  try {
    const dateObject = date instanceof Date ? date : parseISO(date);
    return format(dateObject, "EEE dd MMM, hh:mm a");
  } catch (error) {
    console.error("Error parsing date:", error);
    return "Invalid Date";
  }
}

interface FixtureDateTimeProps {
  fixtureDateTime: Date | string;
}

const FixtureDateTime: React.FC<FixtureDateTimeProps> = ({
  fixtureDateTime,
}) => {
  const formattedDate = formatFixtureDate(fixtureDateTime);

  return <span>{formattedDate}</span>;
};

export default FixtureDateTime;
