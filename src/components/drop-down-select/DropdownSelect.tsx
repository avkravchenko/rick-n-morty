import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";

interface DropdownSelectProps {
  label: string;
  data: string[];
  paramName: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  label,
  data,
  paramName,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedValue: string = searchParams.get(paramName) || "";

  const handleChange = (event: SelectChangeEvent) => {
    setSearchParams((searchParams) => {
      if (paramName === "episode") {
        searchParams.delete("name");
        searchParams.set("page", "1");
      }
      if (paramName === "dimension") {
        searchParams.set("page", "1");
      }

      if (paramName === "type") {
        searchParams.set("page", "1");
      }
      searchParams.set(paramName, event.target.value);
      return searchParams;
    });
  };

  const renderMenuItems = () =>
    data.map((item, index) => (
      <MenuItem key={item + index} value={item}>
        {item}
      </MenuItem>
    ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={`${paramName}-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${paramName}-select-label`}
          id={`${paramName}-select`}
          value={selectedValue}
          label={label}
          onChange={handleChange}
          style={{ width: "150px" }}
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownSelect;
