import React from "react";
import DropdownSelect from "../../drop-down-select/DropdownSelect";
import { allLocationTypes } from "../allLocationTypes";

const SelectType: React.FC = () => {
  return (
    <DropdownSelect
      label="Select Type"
      data={allLocationTypes}
      paramName="type"
    />
  );
};

export default SelectType;
