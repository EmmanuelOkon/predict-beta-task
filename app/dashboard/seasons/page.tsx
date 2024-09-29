"use client";

import * as React from "react";
import SeasonsWrapper from "@/components/pages/seasons";
// import Published from "@/components/pages/published";

const AllSeasons = () => {
  const [id, setId] = React.useState<number | undefined>();

  return (
    <>
      <SeasonsWrapper setId={setId} id={id} />
      {/* <Published id={id} /> */}
    </>
  );
};

export default AllSeasons;
