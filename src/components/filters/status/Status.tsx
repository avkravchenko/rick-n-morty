import React from "react";
import DropdownSelect from "../../drop-down-select/DropdownSelect";

const Status: React.FC = () => {
  const statusArr = ["alive", "dead", "unknown"];

  return (
    <DropdownSelect label="Select Status" data={statusArr} paramName="status" />
  );
};

export default Status;
