import React, { useState, useEffect } from "react";
import { Input, Button } from "@mui/material";
import "./search.scss";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const name: string = searchParams.get("name") || "";
    setInputValue(name);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams((searchParams) => {
      searchParams.set("name", inputValue);
      searchParams.delete("episode");

      return searchParams;
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        onChange={handleInput}
        value={inputValue}
        placeholder="let's find"
      />
      <Button className="button" type="submit">
        Search
      </Button>
    </form>
  );
};

export default Search;
