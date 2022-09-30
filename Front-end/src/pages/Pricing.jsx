import React from "react";
import Top from "../components/pricing/Top";
import Navbar from "../HomeCompo/Navbar/Navbar";
import "../components/pricing/css/price.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <Navbar />
      <Top />
    </div>
  );
};

export default Pricing;
