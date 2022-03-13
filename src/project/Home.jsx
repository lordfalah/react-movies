import React from "react";
import ChangeTheme from "./changeTheme";
import ReqData from "./reqData";
import CardMovie from "./CardMovie";
import { Outlet } from "react-router-dom";
const Home = () => {
  console.log("Render Home");

  return (
    <div className="container mx-auto pt-5 px-7">
      <Outlet />

      <ChangeTheme />
      <h1
        className="text-5xl font-bold text-center mt-10
      bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-black 
      lg:bg-gradient-to-tr lg:from-white lg:to-black"
      >
        Movie Search
      </h1>

      <ReqData />

      <CardMovie />
    </div>
  );
};

export default Home;
