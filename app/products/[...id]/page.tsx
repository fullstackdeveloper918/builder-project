"use client";
import React, { useEffect } from "react";
import Product from "../../../components/Product/Product";
import { useRouter, useParams } from "next/navigation";
import useFetch from "../../../lib/useFetch";

const page = () => {
  const params = useParams();
  console.log(params?.id[0], "papapa");

  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products/${params?.id[0]}`,
    {
      method: "get",
    }
  );

  useEffect(() => {
    loadQuery();
  }, []);

  console.log(response, "single data");
  return (
    <>
      <Product />
    </>
  );
};

export default page;
