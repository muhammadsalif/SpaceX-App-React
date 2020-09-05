import React, { useState } from "react";
import { useMissionsInfoQuery } from "../../generated/graphql";

export default function MissionContainer() {
  const { data, loading, error } = useMissionsInfoQuery({});

  if (loading) return <h1>loading.....</h1>;

  if (error) return <h1>There is an error</h1>;

  console.log(data);

  return (
    <>
      <h2>This is list of lauches</h2>
      {data?.launches?.map((launch, ind) => (
        <button
          onClick={(e) => console.log(e.target, "Button is clicked")}
          key={ind}
        >
          {launch?.mission_name}
        </button>
      ))}
    </>
  );
}
