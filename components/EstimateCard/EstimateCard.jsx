import React, { useState } from "react";
import "./EstimateCard.css";
import images from "../../constants/images";
import Image from "next/image";

const EstimateCard = () => {
  const [quantity, setQuantity] = useState(2);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  let arr = ["a", "b", "c", "d", "e"];
  return (
    <>
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
    </>
  );
};

export default EstimateCard;
