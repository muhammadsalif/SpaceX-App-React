import React from "react";

import { MissionsInfoQuery } from "./../../generated/graphql";

interface Props {
  data: MissionsInfoQuery;
}

const MissionList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h2>This is list of lauches</h2>
      {data?.launches?.map((launch, ind) => (
        <button
          onClick={(e) => console.log(e.target, "Button is clicked")}
          key={ind}
        >
          {launch?.mission_name}
        </button>
      ))}
    </div>
  );
};
export default MissionList;
