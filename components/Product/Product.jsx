import React, { useState, useEffect } from "react";
import "./Product.css";
import Image from "next/image";
import images from "@/constants/images";
import { useSelector, useDispatch } from "react-redux";
import Loaders from "../../components/loaders/Loaders";
import Dot from "../custom-colored-dot/Dot";

const Product = ({ product, loading, error }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [productData, setProductData] = useState(null);

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

  const setQuantity = (e) => {
    e.preventDefault();
    setOrderQuantity(e.target.value);
  };

  const country = useSelector((state) => state.country.country);

  useEffect(() => {
    fetchPrice();
  }, [orderQuantity, product, country]);

  const fetchPrice = () => {
    if (orderQuantity <= product?.column_1_qty) {
      setPrice(
        country === "usa"
          ? product?.column_1_retail_price_usd
          : product?.column_1_retail_price_cad
      );
    } else if (orderQuantity <= product?.column_2_qty) {
      setPrice(
        country === "usa"
          ? product?.column_2_retail_price_usd
          : product?.column_2_retail_price_cad
      );
    } else if (orderQuantity <= product?.column_3_qty) {
      setPrice(
        country === "usa"
          ? product?.column_3_retail_price_usd
          : product?.column_3_retail_price_cad
      );
    } else if (orderQuantity <= product?.column_4_qty) {
      setPrice(
        country === "usa"
          ? product?.column_4_retail_price_usd
          : product?.column_4_retail_price_cad
      );
    } else if (orderQuantity > product?.column_4_q) {
      setPrice(
        country === "usa"
          ? product?.column_5_retail_price_usd
          : product?.column_5_retail_price_cad
      );
    }
  };

  const colors = product?.colours?.split(",");

  return (
    <>
      {loading ? (
        <div>
          <Loaders />
        </div>
      ) : (
        !error && (
          <div className="detail_page_wrapper">
            <div className="detail_page_container">
              <div className="detail_page_left_top">
                <div className="detail_page_image_content">
                  <Image
                    src={slides[currentIndex].url}
                    width={400}
                    height={560}
                    alt="Single_Product_Image"
                  />
                </div>
                <div className="images_container">
                  <div className="img">
                    <Image
                      src={images.shirt_small}
                      alt="Single_Product_Small_Images"
                      width={61}
                      height={81}
                    />
                  </div>
                  <div className="img">
                    <Image
                      src={images.shirt_small}
                      alt="Single_Product_Small_Images"
                      width={61}
                      height={81}
                    />
                  </div>
                  <div className="img">
                    <Image
                      src={images.shirt_small}
                      alt="Single_Product_Small_Images"
                      width={61}
                      height={81}
                    />
                  </div>
                  <div className="img">
                    <Image
                      src={images.shirt_small}
                      alt="Single_Product_Small_Images"
                      width={61}
                      height={81}
                    />
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
                <div className="select_color_section">
                  <p>Select Color</p>
                  <div className="colors_container">
                    {colors &&
                      colors.map((color, index) => (
                        <>
                          <Dot color={color} key={index} />
                        </>
                      ))}
                  </div>
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
                    How many areas of the product would you like to add a logo
                    to?
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
                    disabled={!product}
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
                <div>
                  <p className="total_estimate_container_text">
                    Total estimate doesn't include taxes and shipping fees.
                    Payment is made after mockups are approved.
                  </p>
                </div>
                <div className="bottom_icons">
                  <div className="container">
                    <div className="content">
                      <span>
                        <Image
                          src={images.Fast_Delivery_Icon}
                          width={30}
                          height={30}
                          alt="Fast_Delivery_Icon"
                        />
                      </span>
                      <span>Fast Delivery</span>
                    </div>
                    <div className="content">
                      <span>
                        <Image
                          src={images.Replacement_Icon}
                          width={30}
                          height={30}
                          alt="Replacement_Icon"
                        />
                      </span>
                      <span>30 Days Replacement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Product;
