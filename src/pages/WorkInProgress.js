import React from "react";
import appStyles from "../styles/WorkInProgress.module.css";
import wip from "../assets/wip.png";

const WorkInProgress = () => {
  return(
    <div>
      <h1>Work in Progress</h1>
      <img className={appStyles.Test} src={wip} />
    </div>
  )
};

export default WorkInProgress;
