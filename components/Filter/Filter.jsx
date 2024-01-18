"use client";
import React, { useState } from "react";
import "./Filter.css";
import Image from "next/image";
import FilterPanel from './FilterPanel'
import images from "../../constants/images";
import { LIST, PRODUCT_TYPE_LIST } from "../../constants/data";

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState(false);

  return (
    <>
    {/* Filter Section */}
      <div className="filter_Container">
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
          <select name="" id="">
            <option value="">Select an option</option>
          </select>
        </div>
      </div>
      <div>

      {activeFilter && <FilterPanel />}
      </div>
      

    
    </>
  );
};

export default Filter;
