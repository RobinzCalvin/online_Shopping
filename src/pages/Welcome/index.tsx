import React from "react";
import welcome_back from "../../assets/img/welcome.jpg";
import './welcome.scss';
const Welcome: React.FC = () => {
    return (
        <div className="m-10 border-tean-50 border-[1px] flex justify-center items-center flex-col p-10">
            <img src={welcome_back} width="70%" height="100%" alt="welcome" />
            <p className="text-2xl text-[#4A8986]">We link customers everywhere to join your wonderful products</p>
            <button className="text-3xl mt-10 start-btn p-2">Get Started</button>
        </div>
    );
} 

export default Welcome;