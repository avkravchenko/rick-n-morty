import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneCharacter } from "../../api/getOneCharacter";
import "./character-details.scss";
import CircularProgress from "@mui/material/CircularProgress";

const CharacterDetails: React.FC = () => {
  const { id } = useParams();
  const parsedId = id?.toString() ?? "";
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery(
    ["character", parsedId],
    () => getOneCharacter(parsedId),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="character-details">
      <p onClick={() => navigate(-1)} className="character-details__back">
        Back to characters
      </p>
      <h2>{data?.name}</h2>
      <img src={data?.image} alt={data?.name} />
      <p>Gender: {data?.gender}</p>
      <p>Status: {data?.status}</p>
      <p>Species: {data?.species}</p>
      <p>From: {data?.origin.name}</p>
      <p>Where: {data?.location.name}</p>
    </div>
  );
};

export default CharacterDetails;
