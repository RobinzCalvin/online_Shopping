import React from "react";

import brand_img from "../../assets/img/brand.jpg";
const Home: React.FC = () => {
    return (
        <div className="m-10 border-tean-50 border-[1px] flex justify-center flex-col p-10">
            <div className="h-[60px] flex">
                <h1 className="text-2xl">WebsiteName and Logo</h1>
            </div>
            <div className="flex justify-center items-center flex-wrap scroll-pl-6 snap-y h-[80%]">
                <div className="card bg-[#B5B5B5] rounded-md p-5 flex justify-center items-center m-5  max-[450px]:flex-col">
                    <img src={brand_img} width={250} height={150} alt="adidas" className="min-[450px]:mr-5  max-[450px]:mb-5 rounded-md max-[600px]:w-[125px]"/>
                    <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">Products from Adidas</h1>
                </div>
                <div className="card bg-[#B5B5B5] rounded-md p-5 flex justify-center items-center m-5  max-[450px]:flex-col">
                    <img src={brand_img} width={250} height={150} alt="adidas" className="min-[450px]:mr-5  max-[450px]:mb-5 rounded-md max-[600px]:w-[125px]"/>
                    <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">Products from Adidas</h1>
                </div>
                <div className="card bg-[#B5B5B5] rounded-md p-5 flex justify-center items-center m-5  max-[450px]:flex-col">
                    <img src={brand_img} width={250} height={150} alt="adidas" className="min-[450px]:mr-5  max-[450px]:mb-5 rounded-md max-[600px]:w-[125px]"/>
                    <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">Products from Adidas</h1>
                </div>
                <div className="card bg-[#B5B5B5] rounded-md p-5 flex justify-center items-center m-5  max-[450px]:flex-col">
                    <img src={brand_img} width={250} height={150} alt="adidas" className="min-[450px]:mr-5  max-[450px]:mb-5 rounded-md max-[600px]:w-[125px]"/>
                    <h1 className="text-2xl w-[200px] text-center max-[600px]:w-[100px] max-[600px]:text-sm">Products from Adidas</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;