import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";
import { allLocationTypes } from "../allLocationTypes";
import { allLocationDimensions } from "../allLocationDimensions";

const SelectDimension: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dimension: string = searchParams.get("dimension") ?? "";

  const handleChange = (event: SelectChangeEvent) => {
    setSearchParams((searchParams) => {
      searchParams.set("dimension", event.target.value as string);
      searchParams.set("page", "1");
      return searchParams;
    });
  };

  const renderMenuItems = () =>
    allLocationDimensions.map((item, index) => (
      <MenuItem key={item + index} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="episode-select-label">Select dimension</InputLabel>
        <Select
          labelId="dimension-select-label"
          id="dimension-select"
          value={dimension}
          label="Select Dimension"
          onChange={handleChange}
          style={{ width: "170px" }}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDimension;
