import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import Detail from "../../pages/Adidas/Detail";

const ShopCard: React.FC = () => {
  // setusestate
  const [productID, setProductID] = useState(true);
  const detailView = () => {
    console.log('dfs');
    alert('dfs')
  }
  
  return (
    <>
      <div className="flex mt-10 flex-wrap justify-center items-center h-[100%]">
        <div className="card cate-card bg-slate-300 w-[250px] max-[660px]:w-[150px] h-[250px] max-[460px]:h-auto flex justify-center itmes-center ml-5 mr-5 mt-8 bg-shirt bg-cover">
          <Link to={'/Detail'}>
            <h1 className="text-center text-2xl font-bold" >SHIRT</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
