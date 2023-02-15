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
import "./home.scss";
import Global from "./Global";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center flex-col relative">
        <div className="sticky top-0 h-[100px]  bg-[#4D6B4A] flex justify-center items-center w-[100%]">
          <h1 className="text-2xl max-[250px]:text-center max-[250px]:p-1 max-[250px]:text-xl text-white font-mono">
            WebsiteName and Logo
          </h1>
        </div>
        <Tabs.Group
          aria-label="Tabs with icons"
          style="underline"
          className="flex justify-center bg-white shadow-md sticky top-0"
        >
          <Tabs.Item
            title="Profile"
            icon={HiOutlineHome}
            className="footer-btn"
          >
            Profile content
          </Tabs.Item>
          <Tabs.Item active={true} title="Global" icon={HiOutlineGlobeAlt}>
            <Global />
          </Tabs.Item>
          <Tabs.Item title="Local" icon={HiOutlineLocationMarker}>
            Settings content
          </Tabs.Item>
        </Tabs.Group>
      </div>
      <div className="fixed w-[100%] bottom-0 left-0">
        <div className="w-[100%] h-[50px] bg-[#4D6B4A] shadow-md flex justify-center items-center">
          <Button className="mr-3 rounded-lg footer-btn">
            <HiInbox className="mr-2 h-5 w-5" />
            Inbox
          </Button>
          <Button className="mr-3 rounded-lg footer-btn">
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Cart
          </Button>
          <Button className="mr-3 rounded-lg footer-btn">
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Buy now
          </Button>
          <Button className="mr-3 rounded-lg footer-btn">
            <HiOutlineHeart className="mr-2 h-5 w-5" />
            Favorites
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
