import React from "react";
import welcome_back from "../../assets/img/welcome.jpg";
import welcome_back_2 from "../../assets/img/welcome_2.jpg";
import online from "../../assets/img/online.jpg";
import offline from "../../assets/img/offline.jpg";
import { Link } from "react-router-dom";
import "./welcome.scss";
const Welcome: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] max-[650px]:flex-col">
      <Link to="/home">
        <div className="bg-man_product w-[50vw]  max-[650px]:w-[100vw] max-[650px]:h-[50vh] h-[100vh] bg-cover flex justify-center items-center man-hover ease-in-out transition-[.3s] delay-150 ">
          <h1 className="text-white text-6xl man-h1 max-[300px]:text-3xl">M A N</h1>
        </div>
      </Link>
      <Link to="/home">
        <div className="bg-woman_product w-[50vw] h-[100vh] max-[650px]:w-[100vw] max-[650px]:h-[50vh] bg-cover flex justify-center items-center transition-[.3s] delay-150 woman-hover ease-in-out">
          <h1 className="text-white text-6xl transition-[.3s] delay-150 max-[300px]:text-3xl">
            W O M A N{" "}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Welcome;
