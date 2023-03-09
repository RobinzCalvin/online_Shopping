import React from "react";
import Header from "../../Home/Header";

import { HiChevronDown, HiMenu, HiChevronRight } from "react-icons/hi";
import Category from "../../../components/Category";
import ResponsiveCategory from "../../../components/Category/Responsive";
import { Link } from "react-router-dom";
const Ashirt = () => {
  return (
    <>
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* All contents here*/}

            <Header />
            <div className="flex justify-center items-center bg-[#56616a] flex-col">
              <div className="flex flex-wrap items-center">
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
                  <h1 className="mb-2 font-bold text-4xl text-[#151d28] max-[770px]:text-xl max-[770px]:flex">
                    All <br className="block md:hidden" />
                    <span className="relative max-[770px]:ml-2">
                      <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                        Products{""}
                        {/* <span className="text-3xl md:text-5xl">👋</span> */}
                      </span>
                      <span className="cursor-effect absolute -bottom-0 left-0 -top-1 inline-block bg-white  w-full animate-type will-change"></span>
                    </span>
                  </h1>
                  {/* <h1 className="text-3xl font-bold ">Top Products</h1> */}
                  <div className="flex justify-center items-center flex-wrap w-[100%] mt-10">
                    <div className="flex justify-center items-center flex-col">
                      <div className="flex justify-center items-center">
                        <div className="w-[300px] h-[400px]  max-[930px]:w-[200px] max-[930px]:h-[300px] max-[600px]:w-[100px] max-[600px]:h-[150px] mr-5 ml-5 bg-slate-300 mt-10 bg-shirt bg-cover b-cate-card flex justify-center items-center">
                          <h1 className="text-3xl max-[600px]:text-2xl">
                            AladdiN
                          </h1>
                        </div>
                        <div className="w-[300px] h-[400px]  max-[930px]:w-[200px] max-[930px]:h-[300px] max-[600px]:w-[100px] max-[600px]:h-[150px] mr-5 ml-5 bg-slate-300 mt-10 bg-shirt bg-cover b-cate-card flex justify-center items-center">
                          <h1 className="text-3xl max-[600px]:text-2xl">
                            AladdiN
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <div className="flex justify-center items-center">
                        <div className="w-[300px] h-[400px]  max-[930px]:w-[200px] max-[930px]:h-[300px] max-[600px]:w-[100px] max-[600px]:h-[150px] mr-5 ml-5 bg-slate-300 mt-10 bg-shirts2 bg-cover b-cate-card flex justify-center items-center">
                          <h1 className="text-3xl max-[600px]:text-2xl">
                            AladdiN
                          </h1>
                        </div>
                        <div className="w-[300px] h-[400px]  max-[930px]:w-[200px] max-[930px]:h-[300px] max-[600px]:w-[100px] max-[600px]:h-[150px] mr-5 ml-5 bg-slate-300 mt-10 bg-shoes bg-cover b-cate-card flex justify-center items-center">
                          <h1 className="text-3xl max-[600px]:text-2xl">
                            AladdiN
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link to="../../NewArrivalPage">
                      <button className="mt-4 btn cus-btn">
                        SHOP MEN'S NEW ARRIVAL view
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="w-[100%] mt-10">
              <div className="w-[100%] bg-[#56616a] shadow-md flex justify-center items-center">
                <h1 className="p-5 text-white text-xl">
                  2023 Sohalib All rights reserved
                </h1>
              </div>
            </div>
            {/*Make your finish here*/}
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ResponsiveCategory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ashirt;
