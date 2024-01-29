"use client";
import "./Auth.css";
import Image from "next/image";
import React, { useState } from "react";
import images from "../../constants/images";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    radio: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [isBlur, setIsBlur] = useState(false);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passRegex =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const isValidEmail = emailRegex.test(value);
    const isValidPass = passRegex.test(value);

    const setErrorState = (fieldName, errorText) => {
      setIsBlur(true);
      setError((prev) => ({ ...prev, [fieldName]: errorText }));
    };

    const clearErrorState = (fieldName) => {
      setIsBlur(false);
      setError((prev) => ({ ...prev, [fieldName]: "" }));
    };

    if (name === "email") {
      !isValidEmail || value.length < 1
        ? setErrorState("email", "Invalid Email")
        : clearErrorState("email");
    }

    if (name === "password") {
      !isValidPass || value.length < 1
        ? setErrorState(
            "password",
            "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!"
          )
        : clearErrorState("password");
    }
  };

  const handleFocus = (e) => {
    setIsBlur(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passRegex =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const isValidEmail = emailRegex.test(values.email);
    const isValidPass = passRegex.test(values.password);
    if (values.email.length < 6 || !isValidEmail) {
      setIsBlur(true);
      setError((prev) => ({ ...prev, email: "Invalid Email" }));
    } else if (values.password.length < 8 || !isValidPass) {
      setIsBlur(true);
      setError((prev) => ({
        ...prev,
        password:
          "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      }));
    } else {
      alert("success user");
    }
  };
  return (
    <div className="login_wrapper">
      <div className="login_container">
        <div className="login_content">
          <div className="login_img_content">
            <Image
              src={images.ethical_swag}
              alt="ethical_swag_logo"
              width={255}
              height={53}
            />
          </div>
          <form className="login_form">
            <div class="input_box">
              <input
                type="text"
                placeholder="Enter email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={values.email}
              />
              {isBlur && <span className="error">{error.email}</span>}
            </div>
            <div class="input_box">
              <input
                type="password"
                placeholder="Enter password"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={values.password}
              />
              {isBlur && <span className="error">{error.password}</span>}
            </div>
            <div className="input_radio_content">
              <input type="radio" onChange={handleChange} />
              <p>
                I agree to the <a>terms & conditions | privacy policy</a>
              </p>
            </div>
            <div class="input_box button">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
