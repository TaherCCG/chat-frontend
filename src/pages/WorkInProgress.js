import React from "react";
import appStyles from "../styles/WorkInProgress.module.css";
import wip from "../assets/wip.png";

const WorkInProgress = () => {
  return(
    <div>
      <h1>Work in Progress</h1>
      <img className={appStyles.Wip} src={wip} alt="Work in progress img"/>
    </div>
  )
};

export default WorkInProgress;
