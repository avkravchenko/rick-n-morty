import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { getOneEpisode } from "../../api/getOneEpisode";
import { characterTypes } from "../results/types";
import Card from "../card/Card";

const EpisodeDetails: React.FC = () => {
  const { id } = useParams();
  const parsedId = id?.toString() ?? "";
  const { data, isLoading, isError } = useQuery(
    ["episode", parsedId],
    () => getOneEpisode(parsedId),
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
    <div className="section-details">
      <h2>{data?.originalData.name}</h2>
      <p>Air date: {data?.originalData.air_date}</p>
      <p>Episode: {data?.originalData.episode}</p>
      <div className="section-chars">
        {data?.characters.map((char: characterTypes) => (
          <Link
            key={char.id}
            to={`/characters/${char.id}`}
            className="card-link"
          >
            <Card char={char} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetails;
