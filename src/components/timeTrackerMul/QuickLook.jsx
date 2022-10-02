import React from "react";

const QuickLook = ({
  one,
  oneDes,
  two,
  twoDes,
  three,
  threeDes,
  four,
  fourDes,
}) => {
  return (
    <section id="quick-look">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="circle">
              <p class="blue">1</p>
            </div>
            <p class="value-list">{one}</p>
            <p>{oneDes}</p>
          </div>
          <div class="col-lg-3">
            <div class="circle">
              <p class="blue">2</p>
            </div>
            <p class="value-list">{two}</p>
            <p>{twoDes} </p>
          </div>
          <div class="col-lg-3">
            <div class="circle">
              <p class="blue">3</p>
            </div>
            <p class="value-list">{three}</p>
            <p>{threeDes} </p>
          </div>
          <div class="col-lg-3">
            <div class="circle">
              <p class="blue">4</p>
            </div>
            <p class="value-list">{four}</p>
            <p>{fourDes} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLook;
