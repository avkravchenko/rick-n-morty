import React from "react";
import "./welcome-page.scss";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-page__fancy-text">
        Welcome to the rick and morty wiki
      </h1>
      <h2>
        Here you can find all information about <br />
        <Link to={"/characters"}>characters</Link>,{" "}
        <Link to={"/episodes"}>episodes</Link> and{" "}
        <Link to={"/locations"}>locations</Link>.
      </h2>
    </div>
  );
};

export default WelcomePage;
