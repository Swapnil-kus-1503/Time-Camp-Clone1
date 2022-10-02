import React from "react";
import Top from "../components/pricing/Top";
import Navbar from "../HomeCompo/Navbar/Navbar";
import "../components/pricing/css/price.css";
import YourTimeCostsMore from "../HomeCompo/YourTimeCostsMore/YourTimeCostsMore";
import SocialProof from "../components/timeTracker/SocialProof";
import BottomCta from "../components/timeTracker/BottomCta";
import CustomerStory from "../components/pricing/CustomerStory";
import Table from "../components/pricing/Table";
import Footer from "../HomeCompo/Footer/Footer";
import FAQCompo from "../HomeCompo/FAQ/FAQCompo";

const Pricing = () => {
  return (
    <div className="pricing">
      <Navbar />
      <Top />
      <YourTimeCostsMore />
      <SocialProof />
      <BottomCta />
      <CustomerStory />
      <Table />
      <div className="container">
        <FAQCompo />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
