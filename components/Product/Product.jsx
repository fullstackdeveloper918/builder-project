import React from "react";
import "./Product.css";
import Image from "next/image";
import images from "@/constants/images";

const Product = () => {
  return (
    <>
      <div className="detail_page_wrapper">
        <div className="detail_page_container">
          <div className="detail_page_left_top">
            <div className="detail_page_image_content">
              <Image
                src={images.shirt_small}
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
            <div className="tag">
              <p>Certified B Corporation</p>
            </div>
            <div className="title">
              <h4>
                Tentree® Men’s Kangaroo Organic <br />
                Cotton Hoodie
              </h4>
            </div>
            <div className="reviews">
              <div className="star_review">
                <span className="star_review_images">
                  <Image
                    src={images.star}
                    width={20}
                    height={20}
                    alt="review_images"
                  />
                </span>
                <span className="star_review_images">
                  <Image
                    src={images.star}
                    width={20}
                    height={20}
                    alt="review_images"
                  />
                </span>
                <span className="star_review_images">
                  <Image
                    src={images.star}
                    width={20}
                    height={20}
                    alt="review_images"
                  />
                </span>
                <span className="star_review_images">
                  <Image
                    src={images.star}
                    width={20}
                    height={20}
                    alt="review_images"
                  />
                </span>
              </div>
              <div className="text_review">
                <span className="text_review_content">527 Reviews</span>
              </div>
            </div>
            <div className="text_content">
              <p>
                Say hello to your favorite new kangaroo-style classic hoodie!
                Your new go-to hoodie is made with Tentree® Fairtrade certified
                100% organic cotton, and it{" '"}s Cradle to Cradle Certified™
                Gold, which means it can go safely back into the earth once you
                {" '"}re finished <br /> loving it.
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
              <input type="text" placeholder="50" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
