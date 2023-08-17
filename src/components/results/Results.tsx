import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAllCharacters } from "../../api/getAllCharacters";
import Card from "../card/Card";
import { Character } from "./types";
import "./results.scss";

const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const name: string = searchParams.get("name") ?? "";
  const status: string = searchParams.get("status") ?? "";
  const gender: string = searchParams.get("gender") ?? "";
  const species: string = searchParams.get("species") ?? "";

  const { data, isLoading, isError } = useQuery(
    ["characters", name, status, gender, species],
    () => getAllCharacters(name, status, gender, species)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="results">
      {data?.map((char: Character) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};

export default Results;
