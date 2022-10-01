import React from "react";

const Steps = ({ one, oneDes, two, twoDes, three, threeDes }) => {
  return (
    <div id="singleFeatures">
      <section id="steps">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="group">
                <p class="value-stats">{one}</p>
                <p>{oneDes}</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="group">
                <p class="value-stats">{two}</p>
                <p>{twoDes}</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="group">
                <p class="value-stats">{three}</p>
                <p>{threeDes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
