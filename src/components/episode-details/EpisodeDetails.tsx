import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { getOneEpisode } from "../../api/getOneEpisode";
import { characterTypes } from "../results/types";
import axios from "axios";

type Props = {};

const EpisodeDetails: React.FC = (props: Props) => {
  const { id } = useParams();
  const [characters, setCharacters] = useState<characterTypes[]>([]);
  const parsedId = id?.toString() ?? "";

  const { data, isLoading, isError } = useQuery(
    ["episode", parsedId],
    () => getOneEpisode(parsedId),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    const promisesArray = data?.characters.map((endpoint: string) =>
      axios.get(endpoint)
    );

    Promise.all(promisesArray)
      .then((responses) => {
        const charactersData = responses.map((response) => response.data);
        setCharacters((prev) => [...prev, ...charactersData]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);

  console.log(characters);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }
  return (
    <div>
      <h2>{data?.name}</h2>
      <p>Air date: {data?.air_date}</p>
      <p>Episode: {data?.episode}</p>
    </div>
  );
};

export default EpisodeDetails;
