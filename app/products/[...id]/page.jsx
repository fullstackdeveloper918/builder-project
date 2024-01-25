"use client";
import React, { useEffect } from "react";
import Product from "../../../components/Product/Product";
import { useRouter, useParams } from "next/navigation";
import useFetch from "../../../lib/useFetch";

const page = () => {
  const params = useParams();

  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products/${params?.id[0]}`,
    {
      method: "get",
    }
  );

  useEffect(() => {
    loadQuery();
  }, []);

  

  return (
    <>
      <Product product={response?.data} />
    </>
  );
};

export default page;
