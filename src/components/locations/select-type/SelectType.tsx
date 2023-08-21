import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";
import { allLocationTypes } from "../allLocationTypes";

const SelectType: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type: string = searchParams.get("type") ?? "";

  const handleChange = (event: SelectChangeEvent) => {
    setSearchParams((searchParams) => {
      searchParams.set("type", event.target.value as string);
      searchParams.set("page", "1");
      return searchParams;
    });
  };

  const renderMenuItems = () =>
    allLocationTypes.map((item, index) => (
      <MenuItem key={item + index} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="episode-select-label">Select type</InputLabel>
        <Select
          labelId="episode-select-label"
          id="episode-select"
          value={type}
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

export default SelectType;
