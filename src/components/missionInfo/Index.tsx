import React from "react";
import { useLauchMissionInfoQuery } from "./../../generated/graphql";
import MissionInfo from "./MissionInfo";

export default function MissionInfoContainer() {
  const { data, loading, error } = useLauchMissionInfoQuery({
    variables: {
      id: "25",
    },
  });
  if (loading) return <h1>loading.....</h1>;

  if (error || !data) return <h1>There is an error</h1>;

  console.log(data);

  return (
    <>
      <MissionInfo data={data}></MissionInfo>
    </>
  );
}
