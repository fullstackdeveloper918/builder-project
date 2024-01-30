import Image from "next/image";
import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { LIST, PRODUCT_TYPE_LIST } from "@/constants/data";
import { Label } from "@radix-ui/react-dropdown-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSelector, useDispatch } from "react-redux";
import { filterPrice } from "@/redux-setup/FiltersSlice";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const [inputSlider, setInputSlider] = useState(0);

  const [addList, setAddList] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
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

  useEffect(() => {
    dispatch(filterPrice(inputSlider));
  }, [inputSlider]);

  const handleCheckboxChange = (e, checkboxName) => {
    const { name, checked } = e.target;

    setIsChecked((prev) => ({
      ...prev,
      [checkboxName]: checked,
    }));
  };

  const handleSliderChange = (e) => {
    setPrice(e.target.value);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(index);
  };

  const handleAddLists = (text) => {
    setAddList((prev) => ({
      ...prev,
    }));
  };

  return (
    <>
      <div className="filterPanel">
        <div className="filterPanel_top">
          <h4 className="filterPanel_title">Clear All</h4>
        </div>
        <div className="filterPanel_Product_Section"></div>
        <div className="filterPanel_ProductCollection_list">
          {LIST.map((item, index) => (
            <>
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${item.id}`}>
                  <div className="horizontal"></div>
                  <AccordionTrigger onClick={() => toggleAccordion(index)}>
                    {item.label}
                  </AccordionTrigger>

                  {openIndex === index &&
                    item.children.map((child) => (
                      <>
                        {item.label === "Price" ? (
                          <>
                            <AccordionContent>
                              <div className="filter_panel_price_input_section">
                                <input
                                  type="range"
                                  className="filter_panel_price_input"
                                  min={child.minPrice}
                                  max={child.maxPrice}
                                  value={inputSlider}
                                  onChange={(e) =>
                                    setInputSlider(e.target.value)
                                  }
                                />
                                <div className="filter_panel_textInput">
                                  <input
                                    type="text"
                                    value={inputSlider}
                                    onChange={(e) =>
                                      setInputSlider(e.target.value)
                                    }
                                  />
                                  <p>${child.maxPrice}</p>
                                </div>
                              </div>
                            </AccordionContent>
                          </>
                        ) : (
                          <>
                            <AccordionContent>
                              <li
                                key={item.id}
                                className="filterPanel_list_item"
                              >
                                <input
                                  type="checkbox"
                                  id="checkbox_id"
                                  name={child.label}
                                  checked={isChecked[item.label]}
                                  onChange={handleCheckboxChange}
                                />
                                <label
                                  htmlFor="checkbox_id"
                                  onClick={() => handleAddLists(child.label)}
                                >
                                  {child.label}
                                </label>
                                {/* <span>{child.price ? child.price : ""}</span> */}
                              </li>
                            </AccordionContent>
                          </>
                        )}
                      </>
                    ))}
                </AccordionItem>
              </Accordion>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterPanel;
