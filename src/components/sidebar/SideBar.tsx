import React from "react";
import "./sidebar.scss";
import Status from "../filters/status/Status";
import Gender from "../filters/gender/Gender";
import Species from "../filters/species/Species";
import Clear from "../clear/Clear";

const SideBar = () => {
  return (
    <div className="wrapper__sidebar">
      Choose filters:
      <div className="sidebar">
        <Status />
        <Gender />
        <Species />
      </div>
      <Clear
        name={"name"}
        status={"status"}
        gender={"gender"}
        species={"species"}
      />
    </div>
  );
};

export default SideBar;
