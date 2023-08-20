import React from "react";
import { useSearchParams } from "react-router-dom";
import "./clear.scss";

interface ClearProps {
  [key: string]: string; // You can adjust this type to match the actual types of your arguments
}

const Clear: React.FC<ClearProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    const allArgsArray = Object.keys(props);
    allArgsArray.map((item) => {
      setSearchParams((searchParams) => {
        searchParams.delete(`${item}`);
        return searchParams;
      });
    });
    console.log(allArgsArray);
  };

  return (
    <div className="clear" onClick={handleClick}>
      Clear all filters
    </div>
  );
};

export default Clear;
