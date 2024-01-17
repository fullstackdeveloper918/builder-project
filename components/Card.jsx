import images from "@/constants/images";
import Image from "next/image";
import React from "react";

const Card = ({ desc, price }) => {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <div class="max-w-[350px] bg-white">
          <div className="w-[80%] bg-[#fff] border border-solid border-[#ccc] rounded-[30px] shadow border-gray-200">
            <Image class="rounded-t-lg" src={images.shirt} alt="shirt" />
          </div>
          <div className="flex flex-col w-[70%] text-wrap">
            <span class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              {/* Tentree® Long Sleeve Classic Henley - Men&apos;s 😀😀😀🐝♻💚🐟 */}
              {desc}
            </span>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              as low as $ {price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
