"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import useFetch from "../../lib/useFetch";

const page = () => {
  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products`,
    {
      method: "get",
    }
  );
  useEffect(() => {
    loadQuery();
  }, []);

  return (
    <>
      <div className="admin_css">
        {response?.data?.data.map((item) => (
          <>
            <ProductCard item={item} key={item.id} />
          </>
        ))}
      </div>
    </>
  );
};

export default page;
