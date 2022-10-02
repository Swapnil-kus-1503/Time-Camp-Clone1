import React from "react";

const BottomCta = () => {
  return (
    <section id="bottomCta">
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
            <h2>One simple tool to measure everything your business needs.</h2>
          </div>
          <div class="col-sm-12">
            <p>
              Remember, you can't improve something if you're not measuring it!
              If you're tired of the constant guessing, give TimeCamp a go!
            </p>
          </div>
          <div class="col-sm-12">
            <div class="button-container cta-simple-bottom">
              <a href="https://app.timecamp.com/auth/register">
                <button class="btn btn-filled yellow">
                  Try TimeCamp for free
                </button>
              </a>
              <a href="https://www.timecamp.com/free-demo/?ref=bottom-cta/">
                <button class="btn btn-highlighted">Contact sales</button>
              </a>
            </div>
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

export default BottomCta;
