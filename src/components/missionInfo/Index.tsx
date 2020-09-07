import React from "react";
import { useLauchMissionInfoQuery } from "./../../generated/graphql";
import MissionInfo from "./MissionInfo";

interface Props {
  id: number;
}

export default function MissionInfoContainer() {
  const { data, loading, error } = useLauchMissionInfoQuery({
    variables: {
      id: "21",
    },
  });

  if (loading) return <h1>loading.....</h1>;

  if (error || !data) return <h1>There is an error</h1>;

  return (
    <>
      <MissionInfo data={data}></MissionInfo>
    </>
  );
}
