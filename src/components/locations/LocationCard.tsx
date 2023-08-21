import React, { useEffect, useState } from "react";
import { locationTypes } from "./locationType";

interface LocationCardProps {
  location: locationTypes;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="section-card">
      <h2>{location.name}</h2>
      <p>{location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  );
};

export default LocationCard;
