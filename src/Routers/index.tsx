import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";

import RegistrationPage from "../pages/RegistrationPage";
import Welcome from "../pages/Welcome";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default Routers;