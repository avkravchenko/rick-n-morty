import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "react-router-dom";

const Status: React.FC = () => {
  const status = ["alive", "dead", "unknown"];
  const [value, setValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("status"));
    const status: string = searchParams.get("status") || "";
    setValue(status);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
            value={value}
            onChange={handleChange}
          >
            {status.map((item, index) => (
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
