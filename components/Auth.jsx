"use client";
import Image from "next/image";
import React, { useState } from "react";
import images from "../constants/images";
import { useSelector, useDispatch } from 'react-redux'

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
    const passRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
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
      (!isValidEmail || value.length < 1)  ? setErrorState("email", "Invalid Email") : clearErrorState("email")
    }
  
    if (name === "password") {
      (!isValidPass || value.length < 1)
        
        ? setErrorState(
            "password",
            "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!"
          )
          : clearErrorState("password")
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
    const passRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const isValidEmail = emailRegex.test(values.email);
    const isValidPass = passRegex.test(values.password);
    if((values.email).length < 6 ||  !isValidEmail) {
      setIsBlur(true);
      setError(prev => ({...prev, email: "Invalid Email"}))
    }
    else if((values.password).length < 8 || !isValidPass) {
      setIsBlur(true);
      setError(prev => ({...prev, password: "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!"}))
    }
    else {
      alert("success user")
    }


  }

  return (
    <div className="login_warpper min-w-[100vw] min-h-[100vh] bg-[#f1f1f1] mx-auto flex justify-center items-center">
      <div className="login_container w-[713px] h-[534px] bg-[#fff] rounded-[30px] pt-[66px]">
        <div className="login_content w-[591px] mx-auto ">
          <Image
            src={images.ethical_swag}
            alt="ethical_swag_logo"
            width={255}
            height={53}
            className="mx-auto"
          />
          <form onSubmit={handleSubmit}>
            <input
              className="w-full h-[60px] bg-[#f1f1f1] rounded-[30px] border border-solid border-[#cacaca] pl-5 mt-5"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={values.email}
            />
            {isBlur && (<span className="text-red-600">{error.email}</span>)}
            <input
              className="w-full h-[60px] bg-[#f1f1f1] rounded-[30px] border border-solid border-[#cacaca] pl-5 mt-5"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={values.password}
            />
            {isBlur && <span className="text-red-600">{error.password}</span>}
            <div className="flex justify-start gap-6 items-center mt-6">
              <p className="underline cursor-pointer">Forgot Password ?</p>
            </div>
            <button
              type="submit"
              className="w-[186px] h-[57px] text-[#FFF] leading-[normal] -tracking-[-0.5px] bg-[#a2d061] mt-5 rounded-[130px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
