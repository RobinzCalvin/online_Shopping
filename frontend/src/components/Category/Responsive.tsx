import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from 'react-icons/hi';
const ResponsiveCategory: React.FC = () => {
  return (
    <>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content max-[350px]:p-0 max-[350px]:w-[170px]">
        <li tabIndex={0} className="mt-10 max-[350px]:w-[150px]">
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16 max-[350px]:pl-5 max-[350px]:pr-5">
            Parent
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <Link to="/">Submenu 1</Link>
            </li>
            <li>
              <Link to="/">Submenu 2</Link>
            </li>
            <li>
              <Link to="/">Submenu 3</Link>
            </li>
          </ul>
        </li>
        
        <li tabIndex={0} className="max-[350px]:w-[150px]">
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16 max-[350px]:pl-5 max-[350px]:pr-5">
            Parent
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <Link to="/">Submenu 1</Link>
            </li>
            <li>
              <Link to="/">Submenu 2</Link>
            </li>
            <li>
              <Link to="/">Submenu 3</Link>
            </li>
          </ul>
        </li>
        
        <li tabIndex={0} className="max-[350px]:w-[150px]">
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16 max-[350px]:pl-5 max-[350px]:pr-5">
            Parent
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <Link to="/">Submenu 1</Link>
            </li>
            <li>
              <Link to="/">Submenu 2</Link>
            </li>
            <li>
              <Link to="/">Submenu 3</Link>
            </li>
          </ul>
        </li>
        
        <li tabIndex={0} className="max-[350px]:w-[150px]">
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16 max-[350px]:pl-5 max-[350px]:pr-5">
            Parent
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <Link to="/">Submenu 1</Link>
            </li>
            <li>
              <Link to="/">Submenu 2</Link>
            </li>
            <li>
              <Link to="/">Submenu 3</Link>
            </li>
          </ul>
        </li>
        
        <li tabIndex={0} className="max-[350px]:w-[150px]">
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16 max-[350px]:pl-5 max-[350px]:pr-5">
            Parent
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <Link to="/">Submenu 1</Link>
            </li>
            <li>
              <Link to="/">Submenu 2</Link>
            </li>
            <li>
              <Link to="/">Submenu 3</Link>
            </li>
          </ul>
        </li>
        
        <li tabIndex={0} className="max-[350px]:w-[150px]">
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16 max-[350px]:pl-5 max-[350px]:pr-5">
            Parent
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <Link to="/">Submenu 1</Link>
            </li>
            <li>
              <Link to="/">Submenu 2</Link>
            </li>
            <li>
              <Link to="/">Submenu 3</Link>
            </li>
          </ul>
        </li>
        
      </ul>
    </>
  );
};

export default ResponsiveCategory;
