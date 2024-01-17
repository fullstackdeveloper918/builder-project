"use client";
import DashBoard from "@/components/DashBoard";
import Image from "next/image";
import Card from "./../components/Card";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main>
      <section className="min-h-[100vh] w-[100%]">
        {/* <section>hellokjmh</section> */}
        {/* <DashBoard /> */}
        <Card />
      </section>
    </main>
  );
}
