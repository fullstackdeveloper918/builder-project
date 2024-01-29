"use client";
import React, { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import Products from "../../components/Products/Products";
import { useRouter, useParams } from "next/navigation";
import useFetch from "../../lib/useFetch";
import Loaders from "../../components/loaders/Loaders";

const page = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  const router = useRouter();
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
    {loading ?  <div> <Loaders /></div> : 
     <section className={`container ${activeFilter ? "category-section" : ""}`}>
     <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
     <Products response={response} loading={loading} error={error} />
     {/* <Pagination /> */}
   </section>
    }
     
    </>
  );
};

export default page;
