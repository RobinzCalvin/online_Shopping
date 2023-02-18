import React from "react";
import { Link } from "react-router-dom";
import brand_img from "../../assets/img/brand.jpg";
import "./home.scss";
const Global: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-wrap scroll-pl-6 snap-y h-[80%] mt-5">
      <Link to="/adidas">
        <div className="cus-card border-[5px] border-[#8AB789] rounded-[30px] max-[900px]:p-2 p-5 flex justify-center items-center m-3 flex-col shadow-sm max-[500px]:m-2">
            <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[900px]:w-[150px] max-[500px]:w-[75px]"
            />
            <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm max-[500px]:w-[65px]">
            Adidas
            </h1>
        </div>
      </Link>
      <Link to="/adidas">
        <div className="cus-card border-[5px] border-[#8AB789] rounded-[30px] max-[900px]:p-2 p-5 flex justify-center items-center m-3 flex-col shadow-sm max-[500px]:m-2">
            <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[900px]:w-[150px] max-[500px]:w-[75px]"
            />
            <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm max-[500px]:w-[65px]">
            Adidas
            </h1>
        </div>
      </Link>
      <Link to="/adidas">
        <div className="cus-card border-[5px] border-[#8AB789] rounded-[30px] max-[900px]:p-2 p-5 flex justify-center items-center m-3 flex-col shadow-sm max-[500px]:m-2">
            <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[900px]:w-[150px] max-[500px]:w-[75px]"
            />
            <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm max-[500px]:w-[65px]">
            Adidas
            </h1>
        </div>
      </Link>
      <Link to="/adidas">
        <div className="cus-card border-[5px] border-[#8AB789] rounded-[30px] max-[900px]:p-2 p-5 flex justify-center items-center m-3 flex-col shadow-sm max-[500px]:m-2">
            <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[900px]:w-[150px] max-[500px]:w-[75px]"
            />
            <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm max-[500px]:w-[65px]">
            Adidas
            </h1>
        </div>
      </Link>
    </div>
  );
};

export default Global;
