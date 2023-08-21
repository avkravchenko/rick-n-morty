import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";

const Gender: React.FC = () => {
  const genderArr = ["male", "female", "unknown", "genderless"];
  const [searchParams, setSearchParams] = useSearchParams();
  const gender: string = searchParams.get("gender") || "";

  const handleChange = (event: SelectChangeEvent) => {
    setSearchParams((searchParams) => {
      searchParams.set("gender", event.target.value);
      return searchParams;
    });
  };

  const renderMenuItems = () =>
    genderArr.map((item, index) => (
      <MenuItem key={item + index} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="gender-select-label">Select Gender</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          value={gender}
          label="Select Gender"
          onChange={handleChange}
          style={{ width: "150px" }}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </div>
  );
};

export default Gender;
