import React from "react";
import DropdownSelect from "../../drop-down-select/DropdownSelect";

const Species: React.FC = () => {
  const speciesArr = [
    "human",
    "alien",
    "humanoid",
    "poopybutthole",
    "mythological",
    "unknown",
    "animal",
    "disease",
    "robot",
    "cronenberg",
    "planet",
  ];

  return (
    <DropdownSelect
      label="Select Species"
      data={speciesArr}
      paramName="species"
    />
  );
};

export default Species;
