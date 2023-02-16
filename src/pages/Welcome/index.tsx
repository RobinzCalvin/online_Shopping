import React from "react";
import welcome_back from "../../assets/img/welcome.jpg";
import welcome_back_2 from "../../assets/img/welcome_2.jpg";
import online from "../../assets/img/online.jpg";
import offline from "../../assets/img/offline.jpg";
import { Link } from "react-router-dom";
import "./welcome.scss";
const Welcome: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-online w-[100%] h-[100vh] bg-cover">
      <Link to="/home">
        <button className="text-3xl mt-10 start-btn p-10">Get Started</button>
      </Link>
    </div>
  );
};

export default Welcome;
