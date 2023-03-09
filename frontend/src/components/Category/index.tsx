import React from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiMenu } from "react-icons/hi";
const Category:React.FC = () => {
    return (
        <>
          <div className="flex justify-center items-center mt-10 flex-wrap max-[800px]:hidden mb-5">
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1 btn-outline w-[250px] flex flex-wrap justify-start pl-5 pr-5">
                Sort
              <HiChevronDown className="ml-auto h-5 w-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1 btn-outline w-[250px] flex flex-wrap justify-start pl-5 pr-5">
                Product Type
              <HiChevronDown className="ml-3 h-5 w-5 " />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1 btn-outline w-[250px] flex flex-wrap justify-start pl-5 pr-5">
                Brand
              <HiChevronDown className="ml-3 h-5 w-5 " />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1 btn-outline w-[250px] flex flex-wrap justify-start pl-5 pr-5">
                Style
              <HiChevronDown className="ml-3 h-5 w-5 " />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1 btn-outline w-[250px] flex flex-wrap justify-start pl-5 pr-5">
                Size
              <HiChevronDown className="ml-3 h-5 w-5 " />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1 btn-outline w-[250px] flex flex-wrap justify-start pl-5 pr-5">
                Range
              <HiChevronDown className="ml-3 h-5 w-5 " />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1 btn-outline w-[250px] flex flex-wrap justify-start pl-5 pr-5">
                Price Range
              <HiChevronDown className="ml-3 h-5 w-5 " />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1 btn-outline w-[250px] flex flex-wrap justify-start pl-5 pr-5">
                Leather/ Non Leather
              <HiChevronDown className="ml-3 h-5 w-5 " />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Item 1
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
    );
}

export default Category;  