"use client";
import React, { useState } from "react";
import "./index.css";
import cartImg from "../../assets/headerPics/cart.svg";
import searchImg from "../../assets/headerPics/Search-black.svg";
import heartImg from "../../assets/headerPics/Heart.svg";
import downIcon from "../../assets/headerPics/down-black.svg";
import logo from "../../assets/headerPics/logo.svg";
import flag from "../../assets/headerPics/flag.svg";
import Image from "next/image";
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
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const SecondaryHeader = () => {
  const [position, setPosition] = React.useState("bottom");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="main_container header">
      <div className="container">
        <div className="container_1">
          <div className="">
            <Image src={logo} width={220} height={50} alt="search" />
          </div>
        </div>
        <div className="container_2">
          <div className="text_with_down_icon">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="shop_menu">
                  Shop
                  <span>
                    <Image src={downIcon} width={8} height={8} alt="search" />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 header-menu">
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

          <div className="text_with_down_icon">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="shop_menu">
                  About
                  <span>
                    <Image src={downIcon} width={8} height={8} alt="search" />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 header-menu">
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
          <Button variant="ghost" className="shop_menu">Contact</Button>
        </div>
        <div className="container_3">
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Image src={flag} width={67} height={35} alt="like" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="">
            {showSearchInput ? (
              <span>
                <Input />
                <Image
                  src={searchImg}
                  width={24}
                  height={24}
                  alt="search"
                  onClick={() => {
                    setShowSearchInput(!showSearchInput);
                  }}
                />
              </span>
            ) : (
              <Image
                src={searchImg}
                width={24}
                height={24}
                alt="search"
                onClick={() => {
                  setShowSearchInput(!showSearchInput);
                }}
              />
            )}
          </div>
          <div className="">
            <Image
              src={heartImg}
              width={29}
              height={29}
              alt="like"
              className="cursor-pointer"
            />
          </div>
          <div className="" onClick={() => router.push("/cart")}>
            <Image
              src={cartImg}
              width={27}
              height={27}
              alt="cart"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
