import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "react-router-dom";

const Species: React.FC = () => {
  const species = [
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
  const [value, setValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("species"));
    const species: string = searchParams.get("species") || "";
    setValue(species);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setSearchParams((searchParams) => {
      searchParams.set("species", event.target.value);
      return searchParams;
    });
  };

  return (
    <div>
      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend">Species</FormLabel>
          <RadioGroup
            aria-label="species"
            name="species"
            value={value}
            onChange={handleChange}
          >
            {species.map((item, index) => (
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

export default Species;
