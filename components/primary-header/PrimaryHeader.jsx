"use client";
import React, { useState, useEffect } from "react";
import "./index.css";
import Image from "next/image";
import downArrowImg from "../../assets/headerPics/down.svg";
import phoneImg from "../../assets/headerPics/phone.svg";
import searchImg from "../../assets/headerPics/Search.svg";
import { type } from "./../../redux-setup/store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import loginIcon from "../../assets/login-icon.svg";
import signIcon from "../../assets/headerPics/Sign-up.svg";
import { usePathname, useRouter } from "next/navigation";
const PrimaryHeader = () => {
  const [position, setPosition] = React.useState("bottom");

  const router = useRouter();
  const pathname = usePathname();
  const [screenSize, setScreenSize] = useState(992);
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(screenSize, "window.innerWidth");

  return (
    <div className="main_container top-bar">
      <div className="container">
        <div className="container_left">
          <div className="offer_container">
            <div className="">
              <Image src={phoneImg} alt="down arrow" width={16} height={15} />
            </div>
            <div className="">1-877-256-6998</div>
          </div>
          <div className="offer_container">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  What we Offer
                  <span>
                    <Image
                      src={downArrowImg}
                      width={8}
                      height={8}
                      alt="search"
                    />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    What we Offer
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className=""></div>
          </div>
        </div>
        <div className="container_right">
          <div className="search_container">
            <Image src={searchImg} alt="down arrow" width={16} height={16} />

            <input
              type="text"
              placeholder="Search for product..."
              className="cursor-pointer"
            />
          </div>
          <div className="login-signup" onClick={() => router.push("/login")}>
            {screenSize > 991 && "Login"}
            {screenSize <= 991 && (
              <span className="cursor-pointer">
                <Image src={loginIcon} alt="login" width={13} height={13} />
              </span>
            )}
          </div>

          <div
            className="login-signup cursor-pointer"
            onClick={() => router.push("/register")}
          >
            {screenSize > 991 && "SignUp"}
            {screenSize <= 991 && (
              <span>
                <Image src={signIcon} alt="login" width={18} height={18} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
