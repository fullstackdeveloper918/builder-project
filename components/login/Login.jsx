"use client";
import Image from "next/image";
import React, { useState } from "react";
import images from "../../constants/images";
import { toast } from "react-toastify";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-[#f1f1f1] mx-auto flex justify-center items-center">
      <div className="w-[713px] h-[534px] bg-[#fff] rounded-[30px] pt-[66px]">
        <div className="w-[591px] mx-auto">
          <Image
            src={images.ethical_swag}
            alt="ethical_swag_logo"
            width={255}
            height={53}
            className="mx-auto"
          />
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "password  is Required";
              } else if (values.password.length < 8) {
                errors.password =
                  "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              toast.success("login Successful", {
                position: "bottom-center",
                autoClose: 2000,
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full h-[60px] bg-[#f1f1f1] rounded-[30px] border border-solid border-[#cacaca] pl-5 mt-5"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="text-red-600">
                  {errors.email && touched.email && errors.email}
                </span>
                <input
                  className="w-full h-[60px] bg-[#f1f1f1] rounded-[30px] border border-solid border-[#cacaca] pl-5 mt-5"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span className="text-red-600">
                  {errors.password && touched.password && errors.password}
                </span>
                <div className="flex justify-start gap-6 items-center mt-6">
                  <p className="underline cursor-pointer">Forgot Password ?</p>
                </div>
                <button
                  type="submit"
                  className="w-[186px] h-[57px] text-[#FFF] leading-[normal] -tracking-[-0.5px] bg-[#a2d061] mt-5 rounded-[130px]"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
