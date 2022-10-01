import React from "react";

const Top = ({ headingFeatures, headingFeaturesp, TopImg }) => {
  // console.log(headingFeatures);
  return (
    <section id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 features-top">
            <div className="wrapper">
              <h1 className="heading-features">{headingFeatures}</h1>
              <p>{headingFeaturesp}</p>
              <div className="form">
                <form className="inline-form-tc">
                  <div className="form-wrapper">
                    <div className="button-wrapper">
                      <input
                        type="email"
                        name="email"
                        placeholder="Add Your Email"
                      />
                      <button className="btn-filled green form-home-bottom">
                        Start tracking time
                      </button>
                      <div className="button-wrapper__google">
                        <span>Or sign up with: </span>
                        <a href="/">
                          <img
                            src="https://cdn-m.timecamp.com/img/logos/google.svg"
                            alt=""
                          />
                        </a>
                        <p className="terms-submission">
                          <label>
                            By signing up you agree to our
                            <a
                              href="/terms-conditions/"
                              rel="nofollow noopener noreferrer"
                              target="_blank"
                            >
                              Terms and Conditions
                            </a>
                            and
                            <a
                              href="/privacy-policy/"
                              rel="nofollow noopener noreferrer"
                              target="_blank"
                            >
                              Privacy Policy
                            </a>
                            .
                          </label>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="wrapper">
              <div className="image-content">
                <img src={TopImg} alt="features time tacking timesheets"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
