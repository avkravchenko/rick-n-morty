import React from "react";
import { episodeTypes } from "./types";

interface EpisodeCardProps {
  episode: episodeTypes;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div className="section-card">
      <h2>{episode.name}</h2>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
    </div>
  );
};

export default EpisodeCard;
