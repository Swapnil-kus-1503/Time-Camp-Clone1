import React from "react";
import Top from "../components/timeTracker/Top";
import SocialProof from "../components/timeTracker/SocialProof";
import DemoCta from "../components/timeTracker/DemoCta";
import TopHeader from "../components/timeTracker/TopHeader";
import FeatureSection from "../components/timeTracker/FeatureSection";
import Reviews from "../components/timeTracker/Reviews";
import QuickLook from "../components/timeTracker/QuickLook";

const TimeTracking = () => {
  return (
    <>
      <Top />
      <SocialProof />
      <QuickLook />
      <DemoCta />
      <TopHeader />
      {/* features-perks */}
      <FeatureSection />
      <Reviews />
    </>
  );
};

export default TimeTracking;
