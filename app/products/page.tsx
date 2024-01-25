"use client";
import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import Image from "next/image";
import images from "@/constants/images";
import Pagination from "../../components/Pagination/Pagination";
import Products from "../../components/Products/Products";

const page = () => {
  const [activeFilter, setActiveFilter] = useState(false);

  return (
    <>
      <section className={`container ${activeFilter ? "category-section" : ""}`}>
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <Products />
        <Pagination />
      </section>
    </>
  );
};

export default page;
