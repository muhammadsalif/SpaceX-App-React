import React from "react";

import { LauchMissionInfoQuery } from "./../../generated/graphql";

interface Props {
  data: LauchMissionInfoQuery;
}

const MissionInfo: React.FC<Props> = ({ data }) => {
  console.log("Particular mission data", data);
  return (
    <div>
      {JSON.stringify(data)}
      {/* <h2>This is list of lauches</h2> */}
      {/* {console.log(data)} */}
    </div>
  );
};
export default MissionInfo;
