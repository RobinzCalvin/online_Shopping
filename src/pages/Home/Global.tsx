import React from "react";
import brand_img from "../../assets/img/brand.jpg";
import "./home.scss";
const Global: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-wrap scroll-pl-6 snap-y h-[80%] mt-5">
        <div className="card border-[5px] border-[#8AB789] rounded-[30px] p-5 flex justify-center items-center m-3 flex-col shadow-sm">
          <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[600px]:w-[125px]"
          />
          <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">
            Adidas
          </h1>
        </div>
        <div className="card border-[5px] border-[#8AB789] rounded-[30px] p-5 flex justify-center items-center m-3 flex-col shadow-sm">
          <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[600px]:w-[125px]"
          />
          <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">
            Adidas
          </h1>
        </div>
        <div className="card border-[5px] border-[#8AB789] rounded-[30px] p-5 flex justify-center items-center m-3 flex-col shadow-sm">
          <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[600px]:w-[125px]"
          />
          <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">
            Adidas
          </h1>
        </div>
        <div className="card border-[5px] border-[#8AB789] rounded-[30px] p-5 flex justify-center items-center m-3 flex-col shadow-sm">
          <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[600px]:w-[125px]"
          />
          <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">
            Adidas
          </h1>
        </div>
        <div className="card border-[5px] border-[#8AB789] rounded-[30px] p-5 flex justify-center items-center m-3 flex-col shadow-sm">
          <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[30px] max-[600px]:w-[125px]"
          />
          <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">
            Adidas
          </h1>
        </div>
    </div>
  );
};

export default Global;
