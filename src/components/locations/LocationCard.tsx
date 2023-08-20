import React, { useEffect, useState } from "react";
import { locationTypes } from "./locationType";

interface LocationCardProps {
  location: locationTypes;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const [types, setTypes] = useState<string[]>([]);

  // Update the types state when the component receives a new location prop
  /*   useEffect(() => {
    setTypes((prevTypes) => [...prevTypes, location.dimension]);
  }, []); */

  return (
    <div className="episodes-card">
      <h2>{location.name}</h2>
      <p>{location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  );
};

export default LocationCard;
