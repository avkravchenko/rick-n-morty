import React from "react";
import "./sidebar.scss";
import Status from "../filters/status/Status";
import Gender from "../filters/gender/Gender";
import Species from "../filters/species/Species";

const SideBar = () => {
  return (
    <div className="wrapper__sidebar">
      Choose filters:
      <div className="sidebar">
        <Status />
        <Gender />
        <Species />
      </div>
    </div>
  );
};

export default SideBar;
