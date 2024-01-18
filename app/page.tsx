"use client";
import DashBoard from "@/components/DashBoard";
import Card from "./../components/Card";
import { useEffect, useState } from "react";
import AdditionalServicesCard from "./../components/AdditionalServicesCard/AdditionalServicesCard";
import PrimaryHeader from "./../components/primary-header/PrimaryHeader";

export default function Home() {
  return (
    <>
      <div className="">
        <PrimaryHeader />
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
