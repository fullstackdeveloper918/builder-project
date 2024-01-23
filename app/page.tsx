"use client";
import DashBoard from "@/components/DashBoard";
import Card from "./../components/Card";
import { useEffect, useState } from "react";
import AdditionalServicesCard from "./../components/AdditionalServicesCard/AdditionalServicesCard";
import PrimaryHeader from "./../components/primary-header/PrimaryHeader";
import SecondaryHeader from "./../components/secondary-header/SecondaryHeader";
import Footer from "./../components/footer/Footer";
import Pagination from "@/components/Pagination/Pagination";

export default function Home() {
  return (
    <>
      <div className="">
        <PrimaryHeader />
        <SecondaryHeader />
      </div>
      <div className="h-[300px] flex justify-center">just space btw</div>
      <div className="">{/* <Pagination /> */}</div>
      <div className="">
        <Footer />
      </div>
      {/* <div>
        <AdditionalServicesCard />
      </div>
      <main>
        <Card />
        <section className="min-h-[100vh] w-[100%]">
          <DashBoard />
          <div className="flex items-center justify-between"></div>
        </section>
      </main> */}
    </>
  );
}
