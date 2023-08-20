import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "react-router-dom";

const Gender: React.FC = () => {
  const genderArr = ["male", "female", "unknown", "genderless"];
  const [searchParams, setSearchParams] = useSearchParams();
  const gender: string = searchParams.get("gender") || "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((searchParams) => {
      searchParams.set("gender", event.target.value);
      return searchParams;
    });
  };

  return (
    <div>
      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={handleChange}
          >
            {genderArr.map((item, index) => (
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

export default Gender;
