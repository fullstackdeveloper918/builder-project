"use client";
import React, { useState } from "react";
import QuotationSubmissionHeader from "../../components/QuotationSubmissionHeader/QuotationSubmissionHeader";
import EstimateCard from "@/components/EstimateCard/EstimateCard";

const page = () => {
  return (
    <>
      <section className="container">
        <div className="left_section">
          <QuotationSubmissionHeader />
        </div>
        <div className="right_section">
          <EstimateCard />
        </div>
      </section>
    </>
  );
};

export default page;
