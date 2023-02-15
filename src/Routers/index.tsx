import React from "react";
import {Routes, Route} from 'react-router-dom';

import RegistrationPage from "../pages/RegistrationPage";
import Welcome from "../pages/Welcome";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/welcome" element={<Welcome />} />
        </Routes>
    )
}

export default Routers;