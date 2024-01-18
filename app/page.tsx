"use client";
import DashBoard from "@/components/DashBoard";
import Card from "./../components/Card";
import { useEffect, useState } from "react";
import AdditionalServicesCard from "./../components/AdditionalServicesCard/AdditionalServicesCard";

export default function Home() {
  return (
    <>
      <div>
        <AdditionalServicesCard />
      </div>
      <main>
        <Card />
        <section className="min-h-[100vh] w-[100%]">
          {/* <section>hellokjmh</section> */}
          <DashBoard />
          <div className="flex items-center justify-between"></div>
        </section>
      </main>
    </>
  );
}
