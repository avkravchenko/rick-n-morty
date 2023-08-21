import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { characterTypes } from "../results/types";
import Card from "../card/Card";
import { getOneLocation } from "../../api/getOneLocation";

const LocationDetails: React.FC = () => {
  const { id } = useParams();
  const parsedId = id?.toString() ?? "";
  const { data, isLoading, isError } = useQuery(
    ["location", parsedId],
    () => getOneLocation(parsedId),
    {
      keepPreviousData: true,
    }
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(page);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCharacters = data?.characters.slice(startIndex, endIndex);

  return (
    <div className="section-details">
      <h2>{data?.originalData.name}</h2>
      <p>Dimension: {data?.originalData.dimension}</p>
      <p>Type: {data?.originalData.type}</p>
      <div className="section-chars">
        {currentCharacters.map((char: characterTypes) => (
          <Link
            key={char.id}
            to={`/characters/${char.id}`}
            className="card-link"
          >
            <Card char={char} />
          </Link>
        ))}
        {currentCharacters.length === 0 ? <p>No one here!</p> : null}
      </div>
      {currentCharacters.length !== 0 ? (
        <Pagination
          count={Math.ceil(data?.characters.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      ) : null}
    </div>
  );
};

export default LocationDetails;
