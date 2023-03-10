import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Adidas from "../pages/Adidas";
import Detail from "../pages/Adidas/Detail";
import Ashirt from "../pages/Adidas/Sub/Ashirt";
import ProductList from "../pages/AllProductsView";
import Bag from "../pages/Bag";
import Delivery from "../pages/Delivery";
import Home from "../pages/Home";
// import NewArrivalPage from "../pages/AllProductsView";

import RegistrationPage from "../pages/RegistrationPage";
import Welcome from "../pages/Welcome";
const Routers = () => {
    const [logoBrand, setLogoBrand] = useState('flase');
    return (
        <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home logoBrandSet = {setLogoBrand} logoBrand = {logoBrand} />} />
            <Route path="/adidas" element={<Adidas />} />
            <Route path="/adidas/shirt" element={<Ashirt />} />
            <Route path="/NewArrivalPage" element={<ProductList />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="/Bag" element={<Bag />} />
            <Route path="/Delivery" element={<Delivery />} />

        </Routes>
    )
}

export default Routers;