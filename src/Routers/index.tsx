import React from "react";
import {Routes, Route} from 'react-router-dom';

import RegistrationPage from "../pages/RegistrationPage";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<RegistrationPage />} />
        </Routes>
    )
}

export default Routers;