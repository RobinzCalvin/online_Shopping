import React from "react";
import Header from "../Adidas/Header";
// import "./home.scss";
// import Global from "./Global";

const NewList: React.FC = () => {
  return (
    <>
    <div className="w-full flex flex-col">
      <div>
      <Header/>
      </div>
      <div>
      <label htmlFor="">New Arrivel</label>
      </div>
    </div>
    
    <div className="w-full bg-slate-300"></div>
    </>
  );
};

export default NewList;
