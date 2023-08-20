import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((searchParams) => {
      searchParams.set("species", event.target.value);
      return searchParams;
    });
  };

  return (
    <>
      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend">Species</FormLabel>
          <RadioGroup
            aria-label="species"
            name="species"
            value={species}
            onChange={handleChange}
          >
            {speciesArr.map((item, index) => (
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
    </>
  );
};

export default Species;
