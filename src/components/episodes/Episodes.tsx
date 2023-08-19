import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAllEpisodes } from "../../api/getAllEpisodes";
import EpisodeCard from "./EpisodeCard";
import Pagination from "@mui/material/Pagination";
import { episodeTypes } from "./types";
import "./episodes.scss";
import SelectEpisode from "./select-episode/SelectEpisode";

const Episodes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page: string = searchParams.get("page") ?? "1";
  const name: string = searchParams.get("name") ?? "";
  const episode: string = searchParams.get("episode") ?? "";
  const allEpisodes = [
    "S01E01",
    "S01E02",
    "S01E03",
    "S01E04",
    "S01E05",
    "S01E06",
    "S01E07",
    "S01E08",
    "S01E09",
    "S01E10",
    "S01E11",
    "S02E01",
    "S02E02",
    "S02E03",
    "S02E04",
    "S02E05",
    "S02E06",
    "S02E07",
    "S02E08",
    "S02E09",
    "S02E10",
    "S03E01",
    "S03E02",
    "S03E03",
    "S03E04",
    "S03E05",
    "S03E06",
    "S03E07",
    "S03E08",
    "S03E09",
    "S03E10",
    "S04E01",
    "S04E02",
    "S04E03",
    "S04E04",
    "S04E05",
    "S04E06",
    "S04E07",
    "S04E08",
    "S04E09",
    "S04E10",
    "S05E01",
    "S05E02",
    "S05E03",
    "S05E04",
    "S05E05",
    "S05E06",
    "S05E07",
    "S05E08",
    "S05E09",
    "S05E10",
  ];

  const { data, isLoading, isError } = useQuery(
    ["episodes", page, name, episode],
    () => getAllEpisodes(page, name, episode),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("name", name);
      searchParams.set("episode", episode);
      searchParams.set("page", page);
      return searchParams;
    });
  }, []);

  useEffect(() => {
    setSearchParams((searchParams) => {
      if (episode !== "") {
        searchParams.set("name", ""); // Reset the name value if episode is set
      } else if (name !== "") {
        searchParams.set("episode", ""); // Reset the episode value if name is set
        searchParams.set("page", "1"); // Reset the episode value if name is set
      }
      return searchParams;
    });
  }, [episode, name]);

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("name", name);

      return searchParams;
    });
  }, [episode]);

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
      <SelectEpisode totalCount={allEpisodes} />
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
