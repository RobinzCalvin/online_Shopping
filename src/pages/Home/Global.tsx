import React from "react";
import { Link } from "react-router-dom";
import brand_img from "../../assets/img/brand.jpg";
import "./home.scss";

interface GlobalProps {
  logobrand: React.Dispatch<React.SetStateAction<string>>
}

const Global: React.FC<GlobalProps> = ({logobrand}) => {
  const logoBrandSet = () =>{
    logobrand('true');
  }
  // let string  = props.name;
  return (
    <>
    
    <div className="flex justify-center items-center flex-wrap scroll-pl-6 snap-y h-[80%] mt-5">
      <Link to="/adidas">
        <div className="cus-card border-[1px] border-[#565656] rounded-[20px]  flex justify-center items-center m-3 flex-col shadow-sm max-[500px]:m-2 max-[370px]:rounded-[15px]" onClick={logoBrandSet} >
            <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[20px] max-[900px]:w-[175px] max-[600px]:w-[125px] max-[450px]:w-[100px] max-[370px]:rounded-[15px] max-[370px]:w-[75px]"
            />
            <h1 className="text-2xl text-center max-[600px]:w-[100px] max-[600px]:text-sm max-[500px]:w-[65px] mb-3">
            Adidas
            </h1>
        </div>
      </Link>
      <Link to="/adidas">
        <div className="cus-card border-[1px] border-[#565656] rounded-[20px]  flex justify-center items-center m-3 flex-col shadow-sm max-[500px]:m-2 max-[370px]:rounded-[15px]" >
            <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[20px] max-[900px]:w-[175px] max-[600px]:w-[125px] max-[450px]:w-[100px] max-[370px]:rounded-[15px] max-[370px]:w-[75px]"
            />
            <h1 className="text-2xl text-center max-[600px]:w-[100px] max-[600px]:text-sm max-[500px]:w-[65px] mb-3">
            Adidas
            </h1>
        </div>
      </Link>
      <Link to="/adidas">
        <div className="cus-card border-[1px] border-[#565656] rounded-[20px]  flex justify-center items-center m-3 flex-col shadow-sm max-[500px]:m-2 max-[370px]:rounded-[15px]" >
            <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[20px] max-[900px]:w-[175px] max-[600px]:w-[125px] max-[450px]:w-[100px] max-[370px]:rounded-[15px] max-[370px]:w-[75px]"
            />
            <h1 className="text-2xl text-center max-[600px]:w-[100px] max-[600px]:text-sm max-[500px]:w-[65px] mb-3">
            Adidas
            </h1>
        </div>
      </Link>
      <Link to="/adidas">
        <div className="cus-card border-[1px] border-[#565656] rounded-[20px]  flex justify-center items-center m-3 flex-col shadow-sm max-[500px]:m-2 max-[370px]:rounded-[15px]" >
            <img
            src={brand_img}
            width={250}
            height={250}
            alt="adidas"
            className="mb-5 rounded-[20px] max-[900px]:w-[175px] max-[600px]:w-[125px] max-[450px]:w-[100px] max-[370px]:rounded-[15px] max-[370px]:w-[75px]"
            />
            <h1 className="text-2xl text-center max-[600px]:w-[100px] max-[600px]:text-sm max-[500px]:w-[65px] mb-3">
            Adidas
            </h1>
        </div>
      </Link>
    </div>
    </>
  );
};

export default Global;
