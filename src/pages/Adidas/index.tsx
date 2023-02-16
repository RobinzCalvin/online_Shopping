import React from "react";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { Carousel } from "flowbite-react";
import adidas_1 from "../../assets/img/adidas_1.jpg";
import adidas_2 from "../../assets/img/adidas_2.jpg";
import adidas_3 from "../../assets/img/adidas_3.jpg";
import woman from "../../assets/img/woman.jpg";
import "./adidas.scss";
const Adidas: React.FC = () => {
  return (
    <>
      <div className="flex flex-col fixed top-0 left-0 w-[100%]">
        <div className="w-[100%] flex items-center bg-[#6B6A67] box-shadow">
          <h1 className="text-3xl p-5 text-white mr-7">Sohalib</h1>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
              Man
              <HiChevronDown className="ml-3 h-5 w-5" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
              Woman
              <HiChevronDown className="ml-3 h-5 w-5" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[30vw]"
            >
              <div className="flex justify-center items-center">
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mr-5">
                    Shoes
                  </h1>
                </Link>
                <a className="mr-4">Item 1</a>
                <img src={woman} className="w-[50%]" />
              </div>
              <li></li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
              New
              <HiChevronDown className="ml-3 h-5 w-5" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[25vw]"
            >
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center flex-col">
                  <Link to="/shoe">
                    <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mr-5 mb-5">
                      NewArrival
                    </h1>
                  </Link>
                  <Link to="/shoe">
                    <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mr-5  mb-5">
                      Best Selling
                    </h1>
                  </Link>
                  <Link to="/shoe">
                    <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mr-5  mb-5   ">
                      Shoes
                    </h1>
                  </Link>
                </div>
                <img src={woman} className="w-[50%]" />
              </div>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="h-[750px]">
          <Carousel slide={true}>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-adidas_1 bg-cover"></div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-adidas_2 bg-cover bg-no-repeat"></div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-adidas_3 bg-cover"></div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Adidas;
