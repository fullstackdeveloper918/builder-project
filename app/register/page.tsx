"use client";
import React, { useEffect } from "react";
import Register from "./../../components/Register";

const page = () => {
  useEffect(() => {
    fetch("https://test.cybersify.tech/Eswag/public/api/collection").then(
      (res) => console.log(res)
    );
    console.log("hello");
  }, []);
  return (
    <div>
      <h2 className="">hello</h2>
      <Register />
    </div>
  );
};

export default page;

//https://test.cybersify.tech/Eswag/public/api/collection
