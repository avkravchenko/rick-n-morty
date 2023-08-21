import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";

const Status: React.FC = () => {
  const statusArr = ["alive", "dead", "unknown"];
  const [searchParams, setSearchParams] = useSearchParams();
  const status: string = searchParams.get("status") || "";

  const handleChange = (event: SelectChangeEvent) => {
    setSearchParams((searchParams) => {
      searchParams.set("status", event.target.value);
      return searchParams;
    });
  };

  const renderMenuItems = () =>
    statusArr.map((item, index) => (
      <MenuItem key={item + index} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="status-select-label">Select Status</InputLabel>
        <Select
          labelId="status-select-label"
          id="species-select"
          value={status}
          label="Select Status"
          onChange={handleChange}
          style={{ width: "150px" }}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </div>
  );
};

export default Status;
