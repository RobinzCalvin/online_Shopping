import React from "react";
import {Routes, Route} from 'react-router-dom';
import Adidas from "../pages/Adidas";
import Ashirt from "../pages/Adidas/Sub/Ashirt";
import Home from "../pages/Home";

import RegistrationPage from "../pages/RegistrationPage";
import Welcome from "../pages/Welcome";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/adidas" element={<Adidas />} />
            <Route path="/adidas/shirt" element={<Ashirt />} />
        </Routes>
    )
}

export default Routers;