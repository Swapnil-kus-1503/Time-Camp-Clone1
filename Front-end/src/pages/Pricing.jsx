import React from "react";
import Top from "../components/pricing/Top";
import Navbar from "../HomeCompo/Navbar/Navbar";
import "../components/pricing/css/price.css";
import YourTimeCostsMore from "../HomeCompo/YourTimeCostsMore/YourTimeCostsMore";
import SocialProof from "../components/timeTracker/SocialProof";
import BottomCta from "../components/timeTracker/BottomCta";
import CustomerStory from "../components/pricing/CustomerStory";

const Pricing = () => {
  return (
    <div className="pricing">
      <Navbar />
      <Top />
      <YourTimeCostsMore />
      <SocialProof />
      <BottomCta />
      <CustomerStory />
    </div>
  );
};

export default Pricing;
