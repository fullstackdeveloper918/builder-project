import Image from "next/image";
import React, { useState } from "react";
import images from "../../constants/images";
import { LIST, PRODUCT_TYPE_LIST } from "@/constants/data";
import { Label } from "@radix-ui/react-dropdown-menu";

const FilterPanel = () => {
  const [price, setPrice] = useState(50);
  const [isChecked, setIsChecked] = useState({
    backPacks: false,
    Coolers: false,
    fannyPacks: false,
    laundryBags: false,
    Pouches: false,
    toteBags: false,
    waterBottles: false,
  });

  const handleCheckboxChange = (e, checkboxName) => {
    const { name, checked } = e.target;

    setIsChecked((prev) => ({
      ...prev,
      [checkboxName]: checked,
    }));

    console.table(name, checked);
  };

  const handleSliderChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <div className="filterPanel">
        <div className="filterPanel_top">
          <h4 className="filterPanel_title">Clear All</h4>
        </div>
        <div className="horizontal"></div>
        <div className="filterPanel_Product_Section">
          <h4 className="product_heading">Product Type</h4>
          <Image
            src={images.Select_icon}
            width={20}
            height={20}
            alt="down_arrow"
          />
        </div>
        <ul className="filterPanel_list">
          {PRODUCT_TYPE_LIST.map((item, index) => (
            <>
              <li key={item.id} className="filterPanel_list_item">
                <input
                  type="checkbox"
                  name={item.label}
                  checked={isChecked[item.label]}
                  onChange={(e) => handleCheckboxChange(e, item.label)}
                />
                <label htmlFor="">{item.name}</label>
              </li>
            </>
          ))}
        </ul>
        <div className="horizontal"></div>
        <div className="filterPanel_Product_Section">
          <h4 className="product_heading">Price</h4>
          <Image
            src={images.Select_icon}
            width={20}
            height={20}
            alt="down_arrow"
          />
        </div>
        <div className="filterPanel_label">
          <p>{price}</p>
          <input
            type="range"
            className="inputRange"
            id="range"
            name="range"
            value={price}
            min="0"
            max="100"
            onChange={handleSliderChange}
          />
        </div>
        <div className="filterPanel_minRange">
          <div className="minRange_content">
            <span className="minRange_text">Min</span>
            <span>
              <Image
                src={images.Select_icon}
                width={20}
                height={20}
                alt="down-arrow"
              />
            </span>
          </div>
          <div className="minRange_content">
            <span className="minRange_value">$ 1000</span>
            <span>
              <Image
                src={images.Select_icon}
                width={20}
                height={20}
                alt="down-arrow"
              />
            </span>
          </div>
        </div>
        <div className="filterPanel_ProductCollection_list">
          {LIST.map((item) => (
            <>
              <div className="horizontal"></div>
              <div className="filterPanel__ProductCollection_list_flex">
                <span>{item.label}</span>
                <span>
                  <Image
                    src={images.Select_icon}
                    width={20}
                    height={20}
                    alt="down-arrow"
                  />
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterPanel;
