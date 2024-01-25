import React from "react";
import { Link } from "react-router-dom";
import { bgImg } from "../../style";

const Home = () => {
  return (
    <div
      className="w-full h-full flex flex-col p-10"
      style={bgImg({ img: "src/assets/location-symbol-street-city.jpg" })}
    >
      <div className="absolute w-full h-full left-0 top-0 bg-black/50"></div>
      <div className="w-full h-full flex justify-between z-10">
        <div className="w-1/2 h-full flex flex-col justify-center gap-10">
          <p className="text-7xl text-white font-bold">Welcome to Q&A</p>
          <p className="text-gray-300 w-8/12">
            Are you new to the area and looking to discover local insights?
            You've come to the right place! Q&A connects newcomers like you with
            knowledgeable residents who can provide valuable information about
            the neighborhood.
          </p>
        </div>
        <div className="w-1/2 p-10 h-full flex flex-col justify-center items-center gap-4">
          <Link
            to={"/signin"}
            className="p-4 w-1/2 text-center rounded-2xl border-2 border-white/30 text-white bg-gray-900"
          >
            Sign in
          </Link>
          <Link
            to={"/signup"}
            className="p-4 w-1/2 text-center rounded-2xl border-2 border-black/30 text-white bg-gray-400"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
