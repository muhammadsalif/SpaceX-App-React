import React from "react";
import { useMissionsInfoQuery } from "../../generated/graphql";
import MissionList from "./MissionList";

interface Props {}

const MissionContainer: React.FC<Props> = () => {
  const { data, loading, error } = useMissionsInfoQuery({});

  if (loading) return <h1>loading.....</h1>;

  if (error || !data) return <h1>There is an error</h1>;

  return (
    <>
      <MissionList data={data}></MissionList>
    </>
  );
};
export default MissionContainer;
