import React from "react";
import Loading from "./Loading";
import ShowMovie from "./ShowMovie";

const CardMovie = () => {
  return (
    <div>
      <div className="load mt-5">
        <Loading />
      </div>

      <div id="cards">
        <ShowMovie />
      </div>
    </div>
  );
};

export default CardMovie;
