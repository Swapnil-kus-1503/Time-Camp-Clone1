import React from "react";
import Top from "../components/timeTracker/Top";
import SocialProof from "../components/timeTracker/SocialProof";
import DemoCta from "../components/timeTracker/DemoCta";
import TopHeader from "../components/timeTracker/TopHeader";
import FeatureSection from "../components/timeTracker/FeatureSection";
import Reviews from "../components/timeTracker/Reviews";
import QuickLook from "../components/timeTracker/QuickLook";
import ExtraHeader from "../components/timeTracker/ExtraHeader";
import Integrations from "../components/timeTracker/Integrations";
import BottomCta from "../components/timeTracker/BottomCta";
import Navbar from "../HomeCompo/Navbar/Navbar";
import Footer from "../HomeCompo/Footer/Footer";

const TimeTracking = () => {
  return (
    <>
      <Navbar />
      <Top />
      <SocialProof />
      <QuickLook />
      <DemoCta />
      <TopHeader />
      {/* features-perks */}
      <FeatureSection />
      <Reviews />
      <ExtraHeader />
      <Integrations />
      <BottomCta />
      <Footer />
    </>
  );
};

export default TimeTracking;
