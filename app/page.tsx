"use client";
import DashBoard from "@/components/DashBoard";
import Card from "./../components/Card";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main>
      <Card />
      <section className="min-h-[100vh] w-[100%]">
        {/* <section>hellokjmh</section> */}
        <DashBoard />
        <div className="flex items-center justify-between">
          {/* {users
            ?.map((user: any) => {
              return (
                <>
                  <Card
                    desc={user?.company?.catchPhrase}
                    key={user?.id}
                    price={user?.address?.zipcode}
                  />
                </>
              );
            })
            .slice(0, 5)} */}
        </div>
      </section>
    </main>
  );
}
