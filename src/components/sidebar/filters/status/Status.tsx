import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "react-router-dom";

const Status: React.FC = () => {
  const statusArr = ["alive", "dead", "unknown"];
  const [searchParams, setSearchParams] = useSearchParams();
  const status: string = searchParams.get("status") || "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((searchParams) => {
      searchParams.set("status", event.target.value);
      return searchParams;
    });
  };

  return (
    <div>
      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup
            aria-label="status"
            name="status"
            value={status}
            onChange={handleChange}
          >
            {statusArr.map((item, index) => (
              <FormControlLabel
                key={item + index}
                value={item}
                control={<Radio />}
                label={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </form>
    </div>
  );
};

export default Status;
