import React from "react";
import { Button, Tabs } from "flowbite-react";
import {
  HiOutlineGlobeAlt,
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiInbox,
  HiShoppingCart,
  HiOutlineHeart,
} from "react-icons/hi";
import brand_img from "../../assets/img/brand.jpg";
import ShopCard from "../../components/Category/ShopCard";
import Header from "../Home/Header";

// import "./home.scss";
// import Global from "./Global";

const ProductList: React.FC = () => {
  return (
    <>
      <div className="flex justify-center flex-col sticky left-0 top-0 z-10 ">
        <Header/>
        <ShopCard/>
        
      </div>
      <div className="fixed w-[100%] bottom-0 left-0 z-50">
        <div className="w-[100%] h-[50px] bg-[#56616a] shadow-md flex justify-center items-center">
          <Button className="mr-3 rounded-lg footer-btn">
            <HiInbox className="min-[450px]:mr-2 h-5 w-5" />
            <span className="max-[450px]:hidden">Inbox</span>
          </Button>
          <Button className="mr-3 rounded-lg footer-btn">
            <HiShoppingCart className="min-[450px]:mr-2 h-5 w-5" />
            <span className="max-[450px]:hidden">Inbox</span>
          </Button>
          <Button className="mr-3 rounded-lg footer-btn">
            <HiOutlineHeart className="min-[450px]:mr-2 h-5 w-5" />
            <span className="max-[450px]:hidden">Inbox</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
