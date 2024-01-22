"use client";
import React, { useState } from "react";
import "./Estimate.css";
import Image from "next/image";
import images from "../../constants/images";

const Estimate = () => {
  const [quantity, setQuantity] = useState(2);
  let arr = ["a", "b", "c", "d", "e"];

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <section className="cart_section">
        {/* Left Section  */}
        <div className="cart_left">
          <h4>Home {">"} Submit Quotation Request</h4>
          <div className="horizontal_line"></div>
          <p className="cart_left_desc">Are you a...</p>
          <div className="cart_left_radio_buttons">
            <div className="cart_left_btn">
              <input type="radio" className="cart_left_radio_btn" />
              <span className="cart_left_text">Existing Client</span>
            </div>
            <div className="cart_left_btn">
              <input type="radio" className="cart_left_radio_btn" />
              <span className="cart_left_text">New Client</span>
            </div>
          </div>
          <form className="form">
            <div className="form_inputs">
              <input type="text" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
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
            <div className="cart_left_swift">
              <p>Swift swag?</p>
              <div className="cart_left_swift_content">
                <input type="radio" name="" id="" />
                <p>
                  Checking this box will override the date selected above to
                  within 10 business days if you have gone through the Swift
                  Swag process. Please note additional charges will apply.
                </p>
              </div>
            </div>
            <div className="cart_left_need">
              <p>Notes about your order:</p>
              <textarea
                placeholder="notes about your order"
                className="cart_left_need_textarea"
              ></textarea>
            </div>
            <div className="cart_left_interested_section">
              <p>Are you interested in additional services?</p>
              <div className="cart_left_interested_section_inputs">
                <div>
                  <input type="radio" name="" id="" />
                  <h6>Swag Pack Kitting</h6>
                </div>
                <div>
                  <input type="radio" name="" id="" />
                  <h6>Warehousing</h6>
                </div>
                <div>
                  <input type="radio" name="" id="" />
                  <h6>Graphic Design</h6>
                </div>
                <div>
                  <input type="radio" name="" id="" />
                  <h6>Pick and Pack</h6>
                </div>
                <div>
                  <input type="radio" name="" id="" />
                  <h6>Not Sure</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section  */}
        <div className="cart_right">
          <div className="estimate_wrapper">
            <h3 className="estimate_title">Estimate</h3>
            <div className="estimate_horizontal_line"></div>
            <div className="estimate_container">
              <div className="estimate_container_top">
                {arr.map((item, index) => (
                  <>
                    <div className="estimate_content" key={index}>
                      <div className="estimate_content_imgContent">
                        <Image
                          src={images.cart_image}
                          width={49}
                          height={66}
                          alt="product_image"
                        />
                      </div>
                      <div className="estimate_content_textContent">
                        <h4 className="title">
                          Tentree® Men’s Kangaroo Organic Cotton Hoodie
                        </h4>
                        <span className="price">Price : Starting at $80</span>
                        <div className="amountwrapper">
                          <div className="amountContainer">
                            <div
                              className="decrease_amount"
                              onClick={() => handleQuantity("dec")}
                            >
                              -
                            </div>
                            <div className="amount_number">{quantity}</div>
                            <div
                              className="increase_amount"
                              onClick={() => handleQuantity("inc")}
                            >
                              +
                            </div>
                          </div>
                          <div style={{ cursor: "pointer" }}>
                            <Image
                              src={images.delete_icon}
                              width={14}
                              height={16}
                              alt="delete_icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="estimate_container_bottom">
                <div className="estimate_horizontal_line"></div>
                <div className="total_amount_container">
                  <span className="text">Total Estimate</span>
                  <span className="price">$11670</span>
                </div>
                <button className="estimate_bottom_btn">
                  Submit Estimate Request
                </button>
                <div className="estimate_clear_content">
                  <p className="estimate_clear_btn">Clear Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Estimate;
