import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./LoginPage/Home";
import Protected from "./LoginPage/Protected";
import LoginInPage from "./LoginPage/LoginPage";
import Singup from "./SignUpPage/Singup";
import TimeTracking from "./pages/TimeTracking";
import DummyDashboard from "./DummyDashboard";
import Pricing from "./pages/Pricing";

import Dashboard from "./Dashboard/DashboardComponents/Dashboard/Dashboard";

import TimeTrackingMul from "./pages/TimeTrackingMul";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginInPage />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/time-tracking" element={<TimeTracking />} />
        <Route path="/time-tracking/:id" element={<TimeTrackingMul />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default Allroutes;
