import React from "react";
import "./ClientTypeSelector.css";

const ClientTypeSelector = () => {
  return (
    <>
      <p className="cart_left_desc">Are you a...</p>
      <div className="cart_left_radio_buttons">
        <div className="cart_left_btn">
          <input type="radio" className="cart_left_radio_btn" name="client" />
          <span className="cart_left_text">Existing Client</span>
        </div>
        <div className="cart_left_btn">
          <input type="radio" className="cart_left_radio_btn" name="client" />
          <span className="cart_left_text">New Client</span>
        </div>
      </div>
    </>
  );
};

export default ClientTypeSelector;
