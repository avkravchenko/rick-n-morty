import React from "react";
import DropdownSelect from "../../drop-down-select/DropdownSelect";

interface SelectEpisodeProps {
  totalCount: string[];
}

const SelectEpisode: React.FC<SelectEpisodeProps> = ({ totalCount }) => {
  return (
    <DropdownSelect
      label="Select Episode"
      data={totalCount}
      paramName="episode"
    />
  );
};

export default SelectEpisode;
