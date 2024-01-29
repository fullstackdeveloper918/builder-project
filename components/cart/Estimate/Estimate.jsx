"use client";
import React, { useState } from "react";
import ClientTypeSelector from "../../ClientTypeSelector/ClientTypeSelector";
import QuotationSubmissionHeader from "../../QuotationSubmissionHeader/QuotationSubmissionHeader";
import "./Estimate.css";
import Button from "../../../components/Button/Button";
import EstimateCard from "../../EstimateCard/EstimateCard";

const Estimate = () => {
  return (
    <>
      <section className="cart_section">
        {/* Left Section  */}
        <div className="cart_left">
          <QuotationSubmissionHeader />
          <ClientTypeSelector />
          <form className="form">
            <div className="form_inputs">
              <input
                type="text"
                placeholder="Email Address"
                required
                autocomplete="off"
              />
              <input
                type="password"
                placeholder="Password"
                required
                autocomplete="off"
              />
            </div>
            <div className="form_inputs">
              <button className="form_button">Login</button>
            </div>
            <div className="horizontal_line last"></div>
          </form>
          <div className="cart_left_FAQ">
            <h3>1. Tell us about your Swag Project</h3>
            <div className="cart_left_faqInput">
              <p>When do you need this order? *</p>
              <input type="date" value="2023-03-12" />
            </div>
            {/* swift swag commented */}
            {/* <div className="cart_left_swift">
              <p>Swift swag?</p>
              <div className="cart_left_swift_content">
                <input type="radio" name="" id="" />
                <p>
                  Checking this box will override the date selected above to
                  within 10 business days if you have gone through the Swift
                  Swag process. Please note additional charges will apply.
                </p>
              </div>
            </div> */}
            <div className="cart_left_need">
              <p>Notes about your order:</p>
              <textarea
                placeholder="notes about your order"
                className="cart_left_need_textarea"
              ></textarea>
            </div>
            <div className="cart_left_interested_section">
              <p>Are you interested in additional services?</p>
              <div className="cart_left_interested_section_fields">
                <div className="inputs">
                  <input type="radio" name="services" id="" />
                  <h6>Swag Pack Kitting</h6>
                </div>
                <div className="inputs">
                  <input type="radio" name="services" id="" />
                  <h6>Warehousing</h6>
                </div>
                <div className="inputs">
                  <input type="radio" name="services" id="" />
                  <h6>Graphic Design</h6>
                </div>
                <div className="inputs">
                  <input type="radio" name="services" id="" />
                  <h6>Pick and Pack</h6>
                </div>
                <div className="inputs">
                  <input type="radio" name="services" id="" />
                  <h6>Not Sure</h6>
                </div>
              </div>
            </div>
            {/* Button Compoenent starts here  */}
            <Button />
            {/* Button component ends here */}
          </div>
        </div>

        {/* Right Section  */}
        <div className="cart_right">
          {/* Estimate Component */}
          <EstimateCard />
        </div>
      </section>
    </>
  );
};

export default Estimate;
