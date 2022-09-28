import React from "react";
import Top from "../components/timeTracker/Top";
import SocialProof from "../components/timeTracker/SocialProof";
import DemoCta from "../components/timeTracker/DemoCta";
import TopHeader from "../components/timeTracker/TopHeader";
import FeatureSection from "../components/timeTracker/FeatureSection";

const TimeTracking = () => {
  return (
    <>
      <Top />
      <SocialProof />
      <DemoCta />
      <TopHeader />
      {/* features-perks */}
      <FeatureSection />
    </>
  );
};

export default TimeTracking;
