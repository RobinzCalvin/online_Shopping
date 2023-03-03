import { Accordion } from "flowbite-react";

import React from "react";
import { Link } from "react-router-dom";
import "./adidas.scss";
const Detail: React.FC = () => {
  return (
    <>
      <div className="flex justify-center flex-row sticky left-0 top-0 z-10 ">
        <div className="h-[100px]  bg-[#56616a] flex justify-center items-center w-[100%] box-shadow">
          <h1 className="text-2xl text-white max-[250px]:text-center max-[250px]:p-1 max-[250px]:text-xl  font-mono text-center">
            Men's New Arrival
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-10">
        <div className="w-full md:w-3/4 flex flex-col items-center ">
          <div className="w-1/2 h-auto ">
            <img src="/img/shirts2.jpg" className="h-auto" alt="" />
          </div>
          <div className=" grid grid-cols-2 space-1 ">
            <img src="/img/shirts2.jpg" className="h-auto border border-white	 " alt="" />
            <img src="/img/shirts2.jpg" className="h-auto border border-white	" alt="" />
            <img src="/img/shirts2.jpg" className="h-auto border border-white	" alt="" />
            <img src="/img/shirts2.jpg" className="h-auto border border-white	" alt="" />
            <img src="/img/shirts2.jpg" className="h-auto border border-white	" alt="" />
            <img src="/img/shirts2.jpg" className="h-auto border border-white	" alt="" />
          </div>

          <Accordion alwaysOpen={true} className=" mt-4 p-10 border-none">
            <Accordion.Panel >
              <Accordion.Title className="w-full">What is Flowbite?</Accordion.Title>
              <Accordion.Content>
                <p className="text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    get started
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Is there a Figma file available?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What are the differences between Flowbite and Tailwind UI?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="w-full md:w-1/4 ">
          <div className="flex flex-col pr-10 font-[Helvetica]">
            <div className="text-base min-h-[24px] mt-4" >IVY PARK</div>
            <div className=" leading-10 text-4xl font-bold">
              HOODIE (ALL GENDER)
            </div>
            <div className="text-lg mt-4">$130</div>
            <div className="text-xl mt-4 mb-6">Focus Orange / Focus Orange</div>
            <div className="text-lg">
              This product is excluded from all promotional discounts and
              offers.
            </div>
            <div className="text-lg font-bold mt-5 mb-2">Sizes</div>

            <div className="text-xl ">
              <div className="grid grid-cols-3 text-center border-l">
                <div className="border border-solid border-l-0 mb-[-1px]">01</div>
                <div className="border border-solid border-l-0 mb-[-1px]">01</div>
                <div className="border border-solid border-l-0 mb-[-1px]">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
                <div className="border border-solid border-l-0 mb-[-1px] ">01</div>
              </div>
              <div className=" w-full text-center">
                <Link to={'/Bag'}>
                <button className="w-3/5 mt-4 p-4 text-white bg-[#8246af] rounded-lg shadow-lg hover:bg-black">Add to Bag</button>
                </Link>
              </div>
              <div className="text-lg m-4">Buy now and pay later with paypal</div>
            </div>
            <a href="">Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
