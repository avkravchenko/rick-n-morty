import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";

interface SelectEpisodeProps {
  totalCount: string[];
}

const SelectEpisode: React.FC<SelectEpisodeProps> = ({ totalCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const episode: string = searchParams.get("episode") ?? "";

  const handleChange = (event: SelectChangeEvent) => {
    setSearchParams((searchParams) => {
      searchParams.set("episode", event.target.value as string);
      searchParams.delete("name");
      searchParams.set("page", "1");
      return searchParams;
    });
  };

  const renderMenuItems = () =>
    totalCount.map((item, index) => (
      <MenuItem key={item + index} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="episode-select-label">Select Episode</InputLabel>
        <Select
          labelId="episode-select-label"
          id="episode-select"
          value={episode}
          label="Select Episode"
          onChange={handleChange}
          style={{ width: "150px" }}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectEpisode;
