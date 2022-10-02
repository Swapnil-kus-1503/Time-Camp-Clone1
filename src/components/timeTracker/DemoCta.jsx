import React from "react";

const DemoCta = () => {
  return (
    <section id="demo-cta">
      <div class="container">
        <div class="row">
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
            alt="decorating"
            class="greenSmallSkewCircle"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
            alt="decorating"
            class="redSmallCircle"
          />
          <div class="col-sm-12">
            <div class="text">
              <h2>Schedule a demo and learn more about TimeCamp</h2>
              <p>
                Hop on a call with TimeCamp's top minds to get the best possible
                introduction to our product.
              </p>
            </div>
            <a
              class="nav-link btn-filled yellow demo-cta-hop"
              href="/"
              title="sign up for free time tracker"
            >
              Book a demo
            </a>
          </div>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/blueSmallCircle.svg"
            alt="decorating"
            class="blueSmallCircle"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallCircle.svg"
            alt="decorating"
            class="greenSmallCircle"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoCta;
