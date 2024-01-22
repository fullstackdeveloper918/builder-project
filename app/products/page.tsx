"use client";
import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import Image from "next/image";
import images from "@/constants/images";
import Pagination from "../../components/Pagination/Pagination";
import Products from "../../components/Products/Products";

const Page = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <section className="filter_Section">
        <Filter />
        <Products />
        <Pagination />
      </section>
    </>
  );
};

export default Page;
