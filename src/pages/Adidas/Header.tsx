import React from "react";

import { HiChevronDown, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

import woman from "../../assets/img/woman.jpg";
const Header: React.FC = () => {
  return (
    <>
      <div className="w-[100%] flex items-center bg-[#56616a] box-shadow h-[80px] sticky top-0 left-0 z-10  ">
        <h1 className="text-3xl p-5 text-white mr-7">Sohalib</h1>
        <div className="dropdown dropdown-hover max-[900px]:hidden">
          <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
            New
            <HiChevronDown className="ml-3 h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Item 1</Link>
            </li>
            <li>
              <Link to="/">Item 1</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover max-[900px]:hidden">
          <label tabIndex={1} className="btn m-1 bg-transparent border-[0px]">
            Woman
            <HiChevronDown className="ml-3 h-5 w-5" />
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <div className="flex justify-center items-center"> */}
            {/* <div className="flex justify-center items-center flex-col mr-5"> */}

            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            {/* </div> */}

            {/* <img src={woman} className="w-[200px]" /> */}
            {/* </div> */}
          </ul>
        </div>
        <div className="dropdown dropdown-hover max-[900px]:hidden">
          <label tabIndex={2} className="btn m-1 bg-transparent border-[0px]">
            Man
            <HiChevronDown className="ml-3 h-5 w-5" />
          </label>
          <ul
            tabIndex={2}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <div className="flex justify-center items-center">
              <div className="flex justify-center items-center flex-col mr-5"> */}
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            {/* </div> */}

            {/* <img src={woman} className="w-[200px]" /> */}
            {/* </div> */}
          </ul>
        </div>
        <div className="dropdown dropdown-hover dropdown-end min-[900px]:hidden ml-auto">
          <label tabIndex={0} className="btn m-1 bg-transparent border-[0px]">
            <HiMenu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[150px]"
          >
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mb-5 w-[100px]">
                    Man
                  </h1>
                </Link>
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white mb-5  w-[100px]">
                    Woman
                  </h1>
                </Link>
                <Link to="/shoe">
                  <h1 className="btn bg-transparent text-black border-[0px] hover:text-white w-[100px]">
                    New
                  </h1>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
