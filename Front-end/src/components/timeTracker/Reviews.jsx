import React from "react";

const Reviews = () => {
  return (
    <section id='reviews'>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-12'>
            <h2>Customer story</h2>
          </div>
          <div class='col-sm-12 carousel slide carousel-fade' id='myCarousel'>
            <div class='carousel-item active'>
              <div class='customer-review'>
                <img
                  src='https://cdn-m.timecamp.com/img/customer-stories/saatchi/saatchi.jpg'
                  alt='TimeCamp reviewer - Mike Spencer'
                  style={{ width: "auto", height: "339px" }}
                  loading='lazy'
                />
                <div class='text'>
                  <p class='customer-review-text'>
                    It’s very simple to use, especially fueling it with Trello,
                    it’s key here, we wanted to maintain our workflow and not
                    jump over to other pieces of software to capture the time
                    data.
                  </p>
                  <p>
                    <strong>Mike Spencer,</strong>
                    M&amp;C Saatchi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
