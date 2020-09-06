import React from "react";
import { useMissionsInfoQuery } from "../../generated/graphql";
import MissionList from "./MissionList";

export default function MissionContainer() {
  const { data, loading, error } = useMissionsInfoQuery({});

  if (loading) return <h1>loading.....</h1>;

  if (error || !data) return <h1>There is an error</h1>;

  console.log(data);

  return (
    <>
      <MissionList data={data}></MissionList>
    </>
  );
}
