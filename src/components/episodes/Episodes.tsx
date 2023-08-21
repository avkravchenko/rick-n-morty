import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { getAllEpisodes } from "../../api/getAllEpisodes";
import EpisodeCard from "./EpisodeCard";
import Pagination from "@mui/material/Pagination";
import { episodeTypes } from "./types";
import SelectEpisode from "./select-episode/SelectEpisode";
import CircularProgress from "@mui/material/CircularProgress";
import Search from "../search-bar/Search";
import { allEpisodes } from "./allEpisodes";
import Clear from "../clear/Clear";
import "../../common-styles/common-styles.scss";

const Episodes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page: string = searchParams.get("page") ?? "1";
  const name: string = searchParams.get("name") ?? "";
  const episode: string = searchParams.get("episode") ?? "";

  const { data, isLoading, isError, isFetching } = useQuery(
    ["episodes", page, name, episode],
    () => getAllEpisodes(page, name, episode),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setSearchParams((searchParams) => {
      if (name !== "") {
        searchParams.set("name", name);
      }
      if (episode !== "") {
        searchParams.set("episode", episode);
      }
      searchParams.set("page", page);
      return searchParams;
    });
  }, []);

  useEffect(() => {
    setSearchParams((searchParams) => {
      if (episode !== "") {
        searchParams.delete("name");
      } else if (name !== "") {
        searchParams.delete("episode");
        searchParams.set("page", "1");
      }
      return searchParams;
    });
  }, [episode, name]);

  useEffect(() => {
    setSearchParams((searchParams) => {
      if (name !== "") {
        searchParams.set("name", name);
      }
      return searchParams;
    });
  }, [episode]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSearchParams((searchParams) => {
      searchParams.set("page", value.toString());
      return searchParams;
    });
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    searchParams.delete("name");
    return <div>Error loading episodes</div>;
  }

  return (
    <div className="section-wrapper">
      <Search />
      <SelectEpisode totalCount={allEpisodes} />
      <Clear name={name} episode={episode} />
      {isFetching ? <CircularProgress /> : null}
      <div className="section-results">
        {data?.results.map((episode: episodeTypes) => (
          <Link key={episode.id} to={`/episodes/${episode.id}`}>
            <EpisodeCard episode={episode} />
          </Link>
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
