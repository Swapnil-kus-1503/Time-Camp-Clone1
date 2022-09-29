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
      <ExtraHeader />
      <Integrations />
    </>
  );
};

export default TimeTracking;
