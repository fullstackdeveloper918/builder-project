import images from "@/constants/images";
import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar_container flex-[2] max-w-[303px] h-[100vh] bg-[#fff] rounded-[30px]">
      <Image src={images.ethical_swag} alt="" width={255} height={53} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="271"
        height="2"
        viewBox="0 0 271 2"
        fill="none"
        className="mt-[33px]"
      >
        <path d="M271 0.999976L0 1" stroke="black" strokeOpacity="0.1" />
      </svg>
      <ul className="mt-[10px]">
        <li className="flex justify-start w-[271px] h-[71px]">
          <div className="w-[45px] h-[44px] rounded-[9px] bg-[#a2d061] flex justify-center items-center shadow-[0_5.677px_8.516px_0_#A2D061]">
            <Image
              src={images.Livello_1}
              width={21}
              height={21}
              alt="home_logo"
            />
          </div>
          <span>Dashboard</span>
        </li>
        <li className="flex justify-start w-[271px] h-[71px]">
          <div className="w-[45px] h-[44px] rounded-[9px] bg-[#fff] flex justify-center items-center shadow-[0_4px_6px_0_rgba(0, 0, 0, 0.07)]">
            <Image
              src={images.Rectangle}
              width={21}
              height={21}
              alt="home_logo"
            />
          </div>
          <span>Dashboard</span>
        </li>
        <li className="flex justify-start w-[271px] h-[71px]">
          <div className="w-[45px] h-[44px] rounded-[9px] bg-[#a2d061] flex justify-center items-center shadow-[0_5.677px_8.516px_0_#A2D061]">
            <Image
              src={images.Livello_1}
              width={21}
              height={21}
              alt="home_logo"
            />
          </div>
          <span>Dashboard</span>
        </li>
        <li className="flex justify-start w-[271px] h-[71px]">
          <div className="w-[45px] h-[44px] rounded-[9px] bg-[#a2d061] flex justify-center items-center shadow-[0_5.677px_8.516px_0_#A2D061]">
            <Image
              src={images.Livello_1}
              width={21}
              height={21}
              alt="home_logo"
            />
          </div>
          <span>Dashboard</span>
        </li>
        <li className="flex justify-start w-[271px] h-[71px]">
          <div className="w-[45px] h-[44px] rounded-[9px] bg-[#a2d061] flex justify-center items-center shadow-[0_5.677px_8.516px_0_#A2D061]">
            <Image
              src={images.Livello_1}
              width={21}
              height={21}
              alt="home_logo"
            />
          </div>
          <span>Dashboard</span>
        </li>
        <li className="flex justify-start w-[271px] h-[71px]">
          <div className="w-[45px] h-[44px] rounded-[9px] bg-[#a2d061] flex justify-center items-center shadow-[0_5.677px_8.516px_0_#A2D061]">
            <Image
              src={images.Livello_1}
              width={21}
              height={21}
              alt="home_logo"
            />
          </div>
          <span>Dashboard</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
