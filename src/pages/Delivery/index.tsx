import React, { useState } from "react";
import { Button, Tabs, TextInput } from "flowbite-react";
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

const Delivery: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:w-[70%]">
        <div className="flex flex-col md:w-2/3 ">
            <span className=" text-2xl font-bold pt-10">
                CONTACT DETAILS
            </span>
            <span className=" text-xl pt-6 pb-4">
            We'll use these details to keep you informed on your delivery.
            </span>
            <TextInput
                id="email1"
                type="email"
                placeholder="love@products.com"
                required={true} className="pb-4"
            />
            <span className=" text-2xl font-bold pt-4 pb-4">SHIPPING ADDRESS</span>
            
            <div className="flex flex-col md:flex-row space-x-2">
                <TextInput
                    id="email1"
                    type="email"
                    placeholder="love@products.com"
                    required={true} className="w-1/2 pb-4"
                />
                <TextInput
                    id="email1"
                    type="email"
                    placeholder="love@products.com"
                    required={true} className="w-1/2 pb-4"
                />
            </div>
            
            <TextInput
                id="email1"
                type="email"
                placeholder="love@products.com"
                required={true} className=" pb-4"
            />
            <span className=" text-xl-lg pb-4">Start typing your street address or zip code for suggestions</span>
            <TextInput
                id="email1"
                type="email"
                placeholder="love@products.com"
                required={true} className=" pb-4"
            />
            <span className=" text-xl-lg">E.g. (123) 456-7890</span>
            <span className=" text-2xl font-bold pt-4 pb-4">DELIVERY OPTIONS ?</span>
            <div className="">
                <div className="hover:border border-solid border-black mb-4 p-3">
                    <div className=" text-xl-lg font-bold">STANDARD DELIVERY</div>
                    <div className="flex flex-row">
                    <img src="/img/car.png " alt="" className="w-[30px]"/><span className=" text-xl-lg">Enter your address to see when you'll get your order.</span>
                    </div>
                     
                </div>
                <div className="hover:border border-solid border-black mb-4 p-3">
                    <div className=" text-xl-lg font-bold">COLLECT IN STORE</div>
                    <div className="flex flex-row">
                    <img src="/img/home.png " alt="" className="w-[30px]"/><span className=" text-xl-lg">Enter your address to see when you'll get your order.</span>
                    </div>
                     
                </div>
            </div>
            <button className="w-[30%] p-4 bg-black text-2xl text-white hover:text-gray-400">REVIEW AND PAY ⇒</button>


        </div>
        <div className="flex flex-col ml-5 md:w-1/3">
        <button className="mt-10 p-4 bg-black text-2xl text-white hover:text-gray-400">CHECKOUT</button>
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
            <div className="flex flex-row mt-5 justify-between mr-5 text-xl">
                <label htmlFor="">Fee</label>
                <label htmlFor="">$50.00*0.1</label>
            </div>
            <hr className="mr-5" />
            <div className="flex flex-row mt-5 justify-between mr-5">
                <label htmlFor="" className="text-2xl font-bold">Total</label>
                <label htmlFor="" className="text-2xl font-bold">$55.00</label>
            </div>
            
            
            <hr className="mr-5" />
            <div className=" text-xl-lg">ACCEPTED PAYMENT METHODS</div>
            <img src="/img/payimg.webp" alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Delivery;