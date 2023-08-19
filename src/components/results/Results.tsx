import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAllCharacters } from "../../api/getAllCharacters";
import Pagination from "@mui/material/Pagination";
import Card from "../card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { characterTypes } from "./types";
import "./results.scss";

const Results: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name: string = searchParams.get("name") ?? "";
  const status: string = searchParams.get("status") ?? "";
  const gender: string = searchParams.get("gender") ?? "";
  const species: string = searchParams.get("species") ?? "";
  const page: string = searchParams.get("page") ?? "1";

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", value.toString());
      return searchParams;
    });
  };

  const { data, isLoading, isError } = useQuery(
    ["characters", name, status, gender, species, page],
    () => getAllCharacters(name, status, gender, species, page),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("page", "1");
      return searchParams;
    });
  }, [name, status, gender, species]);

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("page", page.toString());
      return searchParams;
    });
  }, [page]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="results-wrapper">
      <div className="results">
        {data?.results.map((char: characterTypes) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
      <Pagination
        count={data?.info.pages}
        page={+page}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};

export default Results;