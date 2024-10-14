import React from "react";
import { Link } from "react-router-dom";
import animation from "../assets/animation.webm";
import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ height: "calc(100vh - 100px)", backgroundImage: `url(${bg})` }} // Custom height with inline style
    >
      <div className="video-container fixed inset-0 flex flex-col items-center justify-center z-1000">
        <video autoPlay loop muted className="w-[250px] h-auto mb-4">
          <source src={animation} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <Link
          to="/lets-play"
          className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
        >
          Let's Play
        </Link>
        ;
      </div>
    </div>
  );
};

export default Home;
