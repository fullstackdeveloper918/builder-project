"use client";
import React, { useState, useEffect } from "react";
import "./index.css";
import cartImg from "../../assets/headerPics/cart.svg";
import searchImg from "../../assets/headerPics/Search-black.svg";
import heartImg from "../../assets/headerPics/Heart.svg";
import downIcon from "../../assets/headerPics/down-black.svg";
import logo from "../../assets/headerPics/logo.svg";
import Usa from "../../assets/headerPics/use_flag.svg";
import Canada from "../../assets/headerPics/canada-flag.svg";
import CrossIcon from "../../assets/headerPics/corss.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const countries = [
  {
    id: 1,
    country: "usa",
    imageSrc: Usa,
  },
  {
    id: 2,
    country: "canada",
    imageSrc: Canada,
  },
];

const SecondaryHeader = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [country, setCountry] = useState("usa");

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

  return (
    <div className="main_container header">
      <div className="container">
        {screenSize <= 767 && (
          <Image src={downIcon} width={34} height={34} alt="search" />
        )}

        <div className="container_1">
          <div className="">
            <Image src={logo} width={220} height={50} alt="search" />
          </div>
        </div>
        {screenSize > 767 && (
          <>
            <div className="container_2">
              <div className="text_with_down_icon">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="shop_menu">
                      Shop
                      <span>
                        <Image
                          src={downIcon}
                          width={8}
                          height={8}
                          alt="search"
                        />
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 header-menu">
                    <DropdownMenuRadioItem value="top" className="shop_submenu">
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      value="bottom"
                      className="shop_submenu"
                    >
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      value="right"
                      className="shop_submenu"
                    >
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
                        <Image
                          src={downIcon}
                          width={8}
                          height={8}
                          alt="search"
                        />
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 header-menu">
                    <DropdownMenuRadioItem value="top" className="shop_submenu">
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      value="bottom"
                      className="shop_submenu"
                    >
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      value="right"
                      className="shop_submenu"
                    >
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button variant="ghost" className="shop_menu">
                Contact
              </Button>
            </div>
          </>
        )}

        <div className="container_3">
          {screenSize > 767 && (
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="language-dropdown">
                    <span className="flag-img">
                      <Image
                        src={country === "canada" ? Canada : Usa}
                        width={30}
                        height={22}
                        alt="like"
                      />
                    </span>
                    <span className="dropdown-icon">
                      <Image
                        src={downIcon}
                        width={14}
                        height={14}
                        alt="search"
                      />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 language-wrapdropdown">
                  <DropdownMenuRadioGroup
                    value={country}
                    onValueChange={setCountry}
                  >
                    {countries.map((c) => {
                      return (
                        <DropdownMenuRadioItem
                          value={c.country}
                          // style={{ display: "none" }}
                        >
                          <Image
                            src={c.imageSrc}
                            width={30}
                            height={22}
                            alt="like"
                          />
                        </DropdownMenuRadioItem>
                      );
                    })}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          <div className="header-searchicon">
            {showSearchInput ? (
              <div className="header-search">
                <div>
                  <Input placeholder="Search our store" />
                  <Image
                    src={searchImg}
                    width={24}
                    height={24}
                    alt="search"
                    onClick={() => {
                      setShowSearchInput(!showSearchInput);
                    }}
                  />
                  <span>
                    <Image
                      src={CrossIcon}
                      width={20}
                      height={20}
                      alt="search"
                      onClick={() => {
                        setShowSearchInput(false);
                      }}
                    />
                  </span>
                </div>
              </div>
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

          {screenSize > 767 && (
            <div className="">
              <Image
                src={heartImg}
                width={29}
                height={29}
                alt="like"
                className="cursor-pointer"
              />
            </div>
          )}
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
