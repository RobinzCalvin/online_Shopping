import React from "react";
import { HiChevronRight } from 'react-icons/hi';
const ResponsiveCategory: React.FC = () => {
  return (
    <>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li tabIndex={0} className="mt-10">
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16">
            Parent
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </li>
        <li tabIndex={1}>
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16">
            Product Type
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </li>
        <li tabIndex={2}>
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16">
            BRAND
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </li>
        <li tabIndex={3}>
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16">
            STYLE
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </li>
        <li tabIndex={4}>
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16">
            SIZE
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </li>
        <li tabIndex={5}>
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16">
            RANGE
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </li>
        <li tabIndex={6}>
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16">
            PRICE RANGE
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </li>
        <li tabIndex={7}>
          <span className="btn btn-outline border-[0px] flex justify-start items-center  pl-16 pr-16">
            LEATHER/NON
            <HiChevronRight className="h-5 w-5 ml-auto" />
          </span>
          <ul className="rounded-box p-2 bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Submenu 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default ResponsiveCategory;
