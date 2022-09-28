import React from "react";
import { Route, Routes } from "react-router-dom";
import TimeTracking from "./pages/TimeTracking";
import Home from "./SignupPage/Home";
import Protected from "./SignupPage/Protected";
import SignUpPage from "./SignupPage/SignUpPage";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path='/login' element={<SignUpPage />} />

        <Route path='/time-tracking' element={<TimeTracking />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
