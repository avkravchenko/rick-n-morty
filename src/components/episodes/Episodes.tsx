import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAllEpisodes } from "../../api/getAllEpisodes";
import EpisodeCard from "./EpisodeCard";
import Pagination from "@mui/material/Pagination";
import { episodeTypes } from "./types";
import "./episodes.scss";

const Episodes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page: string = searchParams.get("page") ?? "1";
  const name: string = searchParams.get("name") ?? "";

  const { data, isLoading, isError } = useQuery(
    ["episodes", page, name],
    () => getAllEpisodes(page, name),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("page", "1");
      return searchParams;
    });
  }, [name]);

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("page", page.toString());
      return searchParams;
    });
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", value.toString());
      return searchParams;
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading episodes</div>;
  }

  return (
    <div className="episodes-wrapper">
      <div className="episodes">
        {data?.results.map((episode: episodeTypes) => (
          <EpisodeCard key={episode.id} episode={episode} />
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

export default Episodes;
