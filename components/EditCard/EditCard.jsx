"use client";

import React, { useEffect } from "react";
import "./EditCard.css";
import useFetch from "@/lib/useFetch";

const EditCard = () => {
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
      <div className="Edit_Card_wrapper">{}</div>
    </>
  );
};

export default EditCard;
