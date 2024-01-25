import React, { useState, useEffect } from "react";
import "./Product.css";
import Image from "next/image";
import images from "@/constants/images";
import { LIST } from "@/constants/data";
import Dot from "../custom-colored-dot/Dot";

const Product = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: images.shirt_small },
    { url: images.Cup1 },
    { url: images.Stack_Card2 },
    { url: images.Stack_Card1 },
  ];

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [orderQuantity, setOrderQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const setQuantity = (e) => {
    e.preventDefault();
    setOrderQuantity(e.target.value);
  };

  useEffect(() => {
    fetchPrice;
  }, [orderQuantity]);

  const fetchPrice = () => {
    if (orderQuantity <= product?.column_1_qty) {
      setPrice(product?.column_1_retail_price_usd);
    } else if (
      orderQuantity > product?.column_1_qty &&
      orderQuantity <= product?.column_2_qty
    ) {
      setPrice(product?.column_2_retail_price_usd);
    }
  };

  return (
    <>
      <div className="detail_page_wrapper">
        <div className="detail_page_container">
          <div className="detail_page_left_top">
            <div className="detail_page_image_content">
              <div>
                <Image
                  src={slides[currentIndex].url}
                  width={400}
                  height={560}
                  alt="Single_Product_Image"
                />
              </div>
              <div className="slider_container">
                <p onClick={goToPrev}>Prev</p>
                {slides &&
                  slides.map((img) => {
                    <>
                      <div className="thumbnail_container">
                        <Image
                          src={img.url}
                          width={61}
                          height={81}
                          alt="thumbnail_images"
                        />
                      </div>
                    </>;
                  })}
                <p onClick={goToNext}>Next</p>
              </div>
            </div>
          </div>

          <div className="detail_page_right_section">
            {product?.certBy && (
              <div className="tag">
                <p>Certified B Corporation</p>
              </div>
            )}
            <div className="title">
              <h4>{product?.title}</h4>
            </div>
            <div className="reviews">
              <div className="star_review">
                {/* <span className="star_review_images">
                    <Image
                      src={images.star}
                      width={20}
                      height={20}
                      alt="review_images"
                    />
                </span> */}
                <span className="star_review_images">
                  {product?.emoji_ratings}
                </span>
              </div>
              <div className="text_review">
                <span className="text_review_content">527 Reviews</span>
              </div>
            </div>
            <div className="text_content">
              <p>
                {product?.product_description}
                <span className="read_more">Read More</span>
              </p>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" name="" id="" />
              <span>Is this a sample ?</span>
            </div>
            <div className="customization_text">
              <p>Select Customization</p>
              <div className="buttons">
                <button className="btn">Embroidery</button>
                <button className="btn">Full Color Decoration</button>
                <button className="btn">No Decoration</button>
              </div>
            </div>
            <div className="para_text">
              <p>
                How many areas of the product would you like to add a logo to?
              </p>
              <input type="text" className="input" placeholder="3" />
            </div>
            <div className="para_text">
              <p>Select location from the dropdown below</p>
              <div className="inputs">
                <div className>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">Front</label>
                </div>
                <div>
                   
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                    <label for="css">Back</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="javascript"
                    name="fav_language"
                    value="JavaScript"
                  />
                    <label for="javascript">Left Sleeve</label>
                </div>
              </div>
            </div>
            <div className="para_text">
              <p>Upload Logo/ Artwork (.AI or .EPS vector format)</p>
              <div className="upload_logo">
                <label htmlFor="file">
                  <p> Drop your front design</p>
                  <p>or browse your files</p>
                  <input type="file" name="" id="file" />
                </label>
                <label htmlFor="file">
                  <p>Drop your back design</p>
                  <p>or browse your files</p>
                  <input type="file" name="" id="file" />
                </label>
              </div>
            </div>
            <div className="number_of_units">
              <p>Enter the number of units you need?</p>
              <button>Price break</button>
            </div>
            <div className="input_data_required">
              <input
                type="number"
                placeholder="50"
                name="orderQuantity"
                value={orderQuantity}
                onChange={setQuantity}
              />
              <span>(minimum 50 units required)</span>
            </div>
            <div className="select_size_quantity">
              <p>Select sizes quantity</p>
              <div className="inputs">
                <input type="text" placeholder="XS" />
                <input type="text" placeholder="S" />
                <input type="text" placeholder="M" />
                <input type="text" placeholder="L" />
                <input type="text" placeholder="XL" />
                <input type="text" placeholder="2XL" />
              </div>
            </div>
            <div className="standard_business_section">
              <p>Production time</p>
              <p>Standard - 15 Business days</p>
            </div>
            <div className="standard_down_line"></div>
            <div className="price_section">
              <p>Price ${price}/unit</p>
              <p>$1000.00</p>
            </div>
            <div className="add_to_bulk_container">
              <button>Add to bulk estimate</button>
            </div>
            <div className="estimate_text_content">
              <p>
                Total estimate doesn't include taxes and shipping fees. Payment
                is made after mockups are approved.
              </p>
            </div>
            <div className="bottom_icons">
              <div className="first_content">
                <span>
                  <Image
                    src={images.Fast_Delivery_Icon}
                    width={30}
                    height={30}
                    alt="fast_delivery_icon"
                  />
                </span>
                <span>Fast Delivery</span>
              </div>
              <div className="second_content">
                <span>
                  <Image
                    src={images.Replacement_Icon}
                    width={30}
                    height={30}
                    alt="Replacement_Icon"
                  />
                </span>
                <span>30 Day Replacemnet</span>
              </div>
            </div>
          </div>
          <div className="horizontal_line"></div>
        </div>
        <div className="swag_added_section">
          <h2>Newly Added Swag</h2>
          <button>View All</button>
        </div>
        {LIST.map((item) => {
          <>
            <div className="collection_items">
              <Image
                src={images.Shirt}
                width={278}
                height={311}
                alt="products_images"
              />
              <div className="product_content">
                <h4 className="title"></h4>
                <div className="small_text">as low as</div>
                <div className="colors"></div>
              </div>

              <div className="hidden_icons">
                <button className="btn">View Product</button>
              </div>
            </div>
          </>;
        })}
      </div>
    </>
  );
};

export default Product;
