import React from "react";

const QuickLook = () => {
  return (
    <section id="quick-look">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="circle">
              <p class="blue">1</p>
            </div>
            <p class="value-list">One-click time tracker</p>
            <p>
              Fully automated time tracker that keeps track so you can focus
              more on your work.
            </p>
          </div>
          <div class="col-lg-3">
            <div class="circle">
              <p class="blue">2</p>
            </div>
            <p class="value-list">App integrations</p>
            <p>
              Integrate your work software with TimeCamp and maintain your
              current workflow
            </p>
          </div>
          <div class="col-lg-3">
            <div class="circle">
              <p class="blue">3</p>
            </div>
            <p class="value-list">Graphic timesheet</p>
            <p>
              Add, adjust and delete time entries in an easy and readable way.
            </p>
          </div>
          <div class="col-lg-3">
            <div class="circle">
              <p class="blue">4</p>
            </div>
            <p class="value-list">Keyword based tracking</p>
            <p>
              Setup task and project-specific keywords so that you won't have to
              switch between projects manually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLook;
