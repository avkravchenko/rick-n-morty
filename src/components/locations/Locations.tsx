import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getAllLocations } from "../../api/getAllLocations";
import { Link, useSearchParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { locationTypes } from "./locationType";
import LocationCard from "./LocationCard";
import "./locations.scss";
import Search from "../search-bar/Search";
import SelectType from "./select-type/SelectType";
import SelectDimension from "./select-dimension/SelectDimension";
import Clear from "../clear/Clear";
import "../../common-styles/common-styles.scss";

const Locations: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page: string = searchParams.get("page") ?? "1";
  const name: string = searchParams.get("name") ?? "";
  const type: string = searchParams.get("type") ?? "";
  const dimension: string = searchParams.get("dimension") ?? "";
  const { data, isLoading, isError, isFetching } = useQuery(
    ["locations", page, name, type, dimension],
    () => getAllLocations(page, name, type, dimension),
    {
      keepPreviousData: true,
    }
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", value.toString());
      return searchParams;
    });
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Error loading locations</div>;
  }

  if (isFetching) {
    return <CircularProgress />;
  }

  console.log(data);
  return (
    <div className="section-wrapper">
      <Search />
      <div className="selects">
        <SelectType />
        <SelectDimension />
      </div>
      <Clear name={name} type={type} dimension={dimension} />
      <div className="section-results">
        {data?.results.map((location: locationTypes) => (
          <Link key={location.id} to={`/locations/${location.id}`}>
            <LocationCard location={location} />
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

export default Locations;
