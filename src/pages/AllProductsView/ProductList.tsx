import React from "react";
import Header from "../Home/Header";
// import "./home.scss";
// import Global from "./Global";

const ProductList: React.FC = () => {
  return (
    <>
    <div className="w-full flex flex-col">
      <div>
      <Header/>
      </div>
      <div>
      <label htmlFor="">All Products</label>
      </div>
    </div>
    
    <div className="w-full bg-slate-300"></div>
    </>
  );
};

export default ProductList;
