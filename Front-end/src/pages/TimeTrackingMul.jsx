import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DemoCta from "../components/timeTracker/DemoCta";
import FeatureSection from "../components/timeTrackerMul/FeatureSection";
import SocialProof from "../components/timeTracker/SocialProof";
import QuickLook from "../components/timeTrackerMul/QuickLook";
import Top from "../components/timeTrackerMul/Top";
import { dataa } from "../Data/featuresData";
import Footer from "../HomeCompo/Footer/Footer";
import Navbar from "../HomeCompo/Navbar/Navbar";
import Steps from "../components/timeTrackerMul/Steps";
import BottomCta from "../components/timeTrackerMul/BottomCta";
import Reviews from "../components/timeTrackerMul/Reviews";

const TimeTrackingMul = () => {
  const { id } = useParams();
  const [data, setData] = useState(dataa[id]);
  //   console.log(data.headingFeatures);
  return (
    <>
      <Navbar />
      <Top {...data} />
      <SocialProof />
      <QuickLook {...data.QuickLook} />
      <DemoCta />
      <FeatureSection {...data.features} />
      <Steps {...data.steps} />
      <Reviews />
      <BottomCta />
      <Footer />
    </>
  );
};

export default TimeTrackingMul;
