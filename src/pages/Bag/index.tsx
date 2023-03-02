import React, { useState } from "react";
import { Button, Tabs } from "flowbite-react";
import "../../assets/css/main.css";
import {
  HiOutlineGlobeAlt,
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiInbox,
  HiShoppingCart,
  HiOutlineHeart,
} from "react-icons/hi";
import brand_img from "../../assets/img/brand.jpg";
// import "./home.scss";
//import Global from "./Global";

import { Link } from "react-router-dom";
import { Select } from "react-daisyui";
import Header from "../Adidas/Header";

const Bag: React.FC = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-row">
        <div className="w-2/3 flex flex-col">
          <div className="border border-solid border-blue-500 flex flex-row m-5">
            <img className="w-1/3" src="/img/shirts2.jpg" alt="" />
            <div className=" w-2/3 break-words text-lg flex flex-col m-4 ">
              <div className="h-1/4 text-2xl">first</div>
              <div className="h-2/4 text-2xl">first</div>
              <div className="h-1/4 mb-4 flex items-center ">
                
                <input type="number" className="w-[50%] h-[70%] " />
                
              </div>
            </div>
          </div>
          <div className="border border-solid border-blue-500 flex flex-row m-5">
            <img className="w-1/3" src="/img/shirts2.jpg" alt="" />
            <div className=" w-2/3 break-words text-lg flex flex-col ml-4 ">
              <div className="h-1/4 text-2xl">first</div>
              <div className="h-2/4 text-2xl">first</div>
              <div className="h-1/4 mb-4 flex items-center ">
                
                <input type="number" className="w-[50%] h-[70%] " />
                
              </div>
            </div>
          </div>
          <div className="border border-solid border-blue-500 flex flex-row m-5">
            <img className="w-1/3" src="/img/shirts2.jpg" alt="" />
            <div className=" w-2/3 break-words text-lg flex flex-col ml-4 ">
              <span className="h-1/4 text-2xl ">first</span><span className="">$50</span>
              <div className="h-2/4 text-2xl">first</div>
              <div className="h-1/4 mb-4 flex items-center ">
                
                <input type="number" className="w-[50%] h-[70%] " />
                
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col">
            <input type="button" value='CHECKOUT' className=" mt-5 mr-5 p-2 bg-black text-white font-bold text-xl " />
            <label htmlFor="" className="mt-5 text-4xl font-bold " >ORDER SUMMARY</label>
            <div className="flex flex-row mt-5 justify-between mr-5 text-xl">
                <label htmlFor="">1 item</label>
                <label htmlFor="">$50.00</label>
            </div>
            <div className="flex flex-row mt-5 justify-between mr-5 text-xl">
                <label htmlFor="">1 item</label>
                <label htmlFor="">$50.00</label>
            </div>
            <div className="flex flex-row mt-5 justify-between mr-5 text-xl">
                <label htmlFor="">1 item</label>
                <label htmlFor="">$50.00</label>
            </div>
            <div className="h-[1px] bg-black mr-5"></div>
            <div className="flex flex-row mt-5 justify-between mr-5">
                <label htmlFor="" className="text-2xl font-bold">Total</label>
                <label htmlFor="" className="text-2xl font-bold">$50.00</label>
            </div>
            <div className="h-[1px] bg-black mr-5"></div>
        </div>
      </div>
    </>
  );
};

export default Bag;
