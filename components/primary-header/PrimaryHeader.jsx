"use client";
import React, { useState, useEffect } from "react";
import "./index.css";
import Image from "next/image";
import downArrowImg from "../../assets/headerPics/down.svg";
import phoneImg from "../../assets/headerPics/phone.svg";
import searchImg from "../../assets/headerPics/Search.svg";
import { type } from "./../../redux-setup/store";
import loginIcon from "../../assets/login-icon.svg";
import signIcon from "../../assets/headerPics/Sign-up.svg";
import { usePathname, useRouter } from "next/navigation";
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
const PrimaryHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [screenSize, setScreenSize] = useState(992);
  const [position, setPosition] = React.useState("bottom");

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <Button variant="ghost" className="tap_annument">
                  What we Offer
                  <span>
                    <Image
                      src={downArrowImg}
                      alt="down arrow"
                      width={9}
                      height={9}
                    />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 annument-dropdown">
               <DropdownMenuRadioItem value="top" className="shop_submenu">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom" className="shop_submenu">
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right" className="shop_submenu">
                    Right
                  </DropdownMenuRadioItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="container_right">
          <div className="search_container">
            <Image src={searchImg} alt="down arrow" width={16} height={16} />

            <input type="text" placeholder="Search for product..." />
          </div>
          <div className="login-signup" onClick={() => router.push("/login")}>
            {screenSize > 991 && <button>Login</button>}
            {screenSize <= 991 && (
              <span>
                <button>
                  <Image src={loginIcon} alt="login" width={13} height={13} />
                </button>
              </span>
            )}
          </div>

          <div
            className="cursor-pointer"
            onClick={() => router.push("/register")}
          >
            {screenSize > 991 && <button>SignUp</button>}
            {screenSize <= 991 && (
              <span>
                <button>
                  <Image src={signIcon} alt="Register" width={18} height={18} />
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
