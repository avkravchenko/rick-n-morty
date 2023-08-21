import React from "react";
import DropdownSelect from "../../drop-down-select/DropdownSelect";
import { allLocationDimensions } from "../allLocationDimensions";

const SelectDimension: React.FC = () => {
  return (
    <DropdownSelect
      label="Select Dimension"
      data={allLocationDimensions}
      paramName="dimension"
    />
  );
};

export default SelectDimension;
