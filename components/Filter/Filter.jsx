"use client";
import React, { useEffect, useState } from "react";
import "./Filter.css";
import Image from "next/image";
import downIcon from "../../assets/headerPics/down-black.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import FilterPanel from './FilterPanel'
import images from "../../constants/images";
import { LIST, PRODUCT_TYPE_LIST } from "../../constants/data";

const Filter = ({ activeFilter, setActiveFilter }) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position, you can adjust the threshold as needed
      const isScrolled = window.scrollY > 100;

      // Set the state based on the scroll position
      setScrolled(isScrolled);
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Filter Section */}
      <div className={`filter_Container ${scrolled ? 'scrolled' : ''}`}>
        <button className="filter__btn" onClick={() => setActiveFilter(!activeFilter)}>
          <span>
            <Image
              src={images.Filter_btn_icon}
              width={20}
              height={20}
              alt="filter_btn_icon"
            />
          </span>
          <span>Filter</span>
        </button>
        <div className="filter_input">
          <input type="text" />
        </div>
        <div className="filter_select">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="shop_menu">
                Select Option
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
      </div>
      <div className="filter-panel-wrap">

        {activeFilter && <FilterPanel />}
      </div>


    </>
  );
};

export default Filter;
