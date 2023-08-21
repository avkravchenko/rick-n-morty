import React from "react";
import DropdownSelect from "../../drop-down-select/DropdownSelect";

const Gender: React.FC = () => {
  const genderArr = ["male", "female", "unknown", "genderless"];
  return (
    <DropdownSelect label="Select Gender" data={genderArr} paramName="gender" />
  );
};
export default Gender;
