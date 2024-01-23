"use client";
import React, { useState, useEffect } from "react";
import "./index.css";
import Image from "next/image";
import downArrowImg from "../../assets/headerPics/down.svg";
import phoneImg from "../../assets/headerPics/phone.svg";
import searchImg from "../../assets/headerPics/Search.svg";
import { type } from "./../../redux-setup/store";
import loginIcon from "../../assets/login-icon.svg";
import signIcon from "../../assets/headerPics/Sign-up.svg";

const PrimaryHeader = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(screenSize, "window.innerWidth");

  return (
    <div className="main_container top-bar">
      <div className="container">
        <div className="container_left">
          <div className="offer_container">
            <div className="">
              <Image src={phoneImg} alt="down arrow" width={16} height={15} />
            </div>
            <div className="">1-877-256-6998</div>
          </div>
          <div className="offer_container">
            <div className="">What we Offer</div>
            <div className="">
              <Image src={downArrowImg} alt="down arrow" width={9} height={9} />
            </div>
          </div>
        </div>
        <div className="container_right">
          <div className="search_container">
            <Image src={searchImg} alt="down arrow" width={16} height={16} />

            <input type="text" placeholder="Search for product..." />
          </div>
          <div className="login-signup">
            {screenSize > 991 && "Login"}
            {screenSize <= 991 && (
              <span>
                <Image src={loginIcon} alt="login" width={13} height={13} />
              </span>
            )}
          </div>

          <div className="login-signup">
            {screenSize > 991 && "SignUp"}
            {screenSize <= 991 && (
              <span>
                <Image src={signIcon} alt="login" width={18} height={18} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
