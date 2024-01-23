"use client";
import React from "react";
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
const SecondaryHeader = () => {
  const [position, setPosition] = React.useState("bottom");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="main_container">
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
                <Button variant="ghost">
                  Shop
                  <span>
                    <Image src={downIcon} width={8} height={8} alt="search" />
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

          <div className="text_with_down_icon">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  About
                  <span>
                    <Image src={downIcon} width={8} height={8} alt="search" />
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Contact</Button>
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
        <div className="container_3">
          <div className="">
            <Image src={flag} width={67} height={35} alt="like" />
          </div>
          <div className="">
            <Image src={searchImg} width={24} height={24} alt="search" />
          </div>
          <div className="">
            <Image src={heartImg} width={29} height={29} alt="like" />
          </div>
          <div className="" onClick={() => router.push("/cart")}>
            <Image src={cartImg} width={27} height={27} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
