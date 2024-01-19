"use client";
import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import Collection from "../../components/collection/Collection";
import Image from "next/image";
import images from "@/constants/images";
import Pagination from "./../../components/Pagination/Pagination";

const page = () => {
  return (
    <>
      <section className="filter_Section">
        <Filter />
      </section>
      <section className="filter_Section">
        <Collection />
      </section>
      <section className="filter_Section">{/* <Pagination /> */}</section>
    </>
  );
};

export default page;
