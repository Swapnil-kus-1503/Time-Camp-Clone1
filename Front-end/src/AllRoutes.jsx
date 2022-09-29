import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./LoginPage/Home";
import Protected from "./LoginPage/Protected";
import LoginInPage from "./LoginPage/LoginPage";
import Singup from "./SignUpPage/Singup";
import TimeTracking from "./pages/TimeTracking";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Home />
            // <Protected>

            // </Protected>
          }
        />
        <Route path='/login' element={<LoginInPage />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/time-tracking' element={<TimeTracking />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
