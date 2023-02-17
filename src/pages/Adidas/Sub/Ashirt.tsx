import React from "react";
import Header from "../Header";

import { HiChevronDown, HiMenu, HiChevronRight } from "react-icons/hi";
import Category from "../../../components/Category";
import ResponsiveCategory from "../../../components/Category/Responsive";
const Ashirt = () => {
  return (
    <>
      <Header />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex justify-center items-center bg-[#A6A6A6] flex-col">
            <div className="flex flex-wrap items-center ">
              <label
                htmlFor="my-drawer"
                className="btn btn-outline drawer-button left-0 ml-5 fixed min-[800px]:hidden "
              >
                <HiMenu className="h-5 w-5 drawer-button" />
              </label>
              <h1 className="text-3xl mt-5 mb-5 font-meidum text-white ml-auto">
                SHIRTS
              </h1>
            </div>
            <Category />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center flex-col flex-wrap w-[100%]">
              <div className="flex justify-center items-center flex-col w-[100%] mt-16">
                <h1 className="text-3xl font-bold ">Top Products</h1>
                <div className="flex justify-center items-center flex-wrap w-[100%] mt-10">
                  <div className="w-[300px] h-[400px]  max-[930px]:w-[200px] max-[930px]:h-[300px] max-[600px]:w-[100px] max-[600px]:h-[150px] mr-auto ml-auto bg-slate-300 mt-10 bg-adidas_top bg-cover cate-card"></div>
                  <div className="w-[300px] h-[400px]  max-[930px]:w-[200px] max-[930px]:h-[300px] max-[600px]:w-[100px] max-[600px]:h-[150px] mr-auto ml-auto bg-slate-300 mt-10 bg-adidas_top bg-cover cate-card"></div>
                  <div className="w-[300px] h-[400px]  max-[930px]:w-[200px] max-[930px]:h-[300px] max-[600px]:w-[100px] max-[600px]:h-[150px] mr-auto ml-auto bg-slate-300 mt-10 bg-adidas_top bg-cover cate-card"></div>
                  <div className="w-[300px] h-[400px]  max-[930px]:w-[200px] max-[930px]:h-[300px] max-[600px]:w-[100px] max-[600px]:h-[150px] mr-auto ml-auto bg-slate-300 mt-10 bg-adidas_top bg-cover cate-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ResponsiveCategory />
        </div>
      </div>
    </>
  );
};

export default Ashirt;
