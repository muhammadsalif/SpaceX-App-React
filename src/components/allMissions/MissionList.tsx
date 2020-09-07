import React from "react";

import { MissionsInfoQuery } from "../../generated/graphql";

interface Props {
  data: MissionsInfoQuery;
}

const MissionList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {console.log("This is all data coming", data)}
      <h2>This is list of lauches</h2>
      {data?.launches?.map((launch, ind) => (
        <button
          onClick={() => console.log(launch?.mission_name, "Button is clicked")}
          key={ind}
        >
          {launch?.mission_name}
        </button>
      ))}
    </div>
  );
};
export default MissionList;
