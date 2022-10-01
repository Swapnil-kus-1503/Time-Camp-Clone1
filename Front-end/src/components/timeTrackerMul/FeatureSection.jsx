import React from "react";

const FeatureSection = ({
  one,
  oneDes,
  oneImg,
  two,
  twoDes,
  twoImg,
  three,
  threeDes,
  threeImg,
  four,
  fourDes,
  fourImg,
}) => {
  return (
    <section id="feature-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-sm-12">
            <div class="text">
              <h2>{one}</h2>
              <p>{oneDes} </p>
            </div>
          </div>
          <div class="col-lg-7 col-sm-12 right">
            <img src={oneImg} alt="automatic time tracking graphic" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 col-sm-12 left">
            <img src={twoImg} alt="Productivity tracking report" />
          </div>
          <div class="col-lg-5 col-sm-12">
            <div class="text">
              <h2>{two}</h2>
              <p>{twoDes} </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5 col-sm-12">
            <div class="text">
              <h2>{three}</h2>
              <p>{threeDes} </p>
            </div>
          </div>
          <div class="col-lg-7 col-sm-12 right">
            <img src={threeImg} alt="TimeCamp report bar chart" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 col-sm-12 left">
            <img src={fourImg} alt="TimeCamp billing feature" />
          </div>
          <div class="col-lg-5 col-sm-12">
            <div class="text">
              <h2>{four}</h2>
              <p>{fourDes} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
