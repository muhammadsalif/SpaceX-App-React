import React from "react";
import "./App.css";
import MissionContainer from "./components/mission/Index";
import MissionInfoContainer from "./components/missionInfo/Index";

function App() {
  return (
    <div>
      <MissionContainer></MissionContainer>
      <MissionInfoContainer></MissionInfoContainer>
    </div>
  );
}

export default App;
