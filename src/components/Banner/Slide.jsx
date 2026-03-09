import React from "react";
import { Link } from "react-router";

const Slide = ({image,text}) => {


  return (
    <header>
      {/* Hero Section */}
      <div
        className="w-full bg-center bg-cover h-[38rem] rounded-4xl"
        style={{
          backgroundImage:
            `url(${image})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40 rounded-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl mb-3">
              {text}
            </h1>
            <Link to={"/add-job"} className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500">
              Start project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Slide;