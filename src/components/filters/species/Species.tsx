import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const species: string = searchParams.get("species") || "";

  const handleChange = (event: SelectChangeEvent) => {
    setSearchParams((searchParams) => {
      searchParams.set("species", event.target.value);
      return searchParams;
    });
  };

  const renderMenuItems = () =>
    speciesArr.map((item, index) => (
      <MenuItem key={item + index} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="species-select-label">Select Species</InputLabel>
        <Select
          labelId="species-select-label"
          id="species-select"
          value={species}
          label="Select Species"
          onChange={handleChange}
          style={{ width: "150px" }}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </div>
  );
};

export default Species;
