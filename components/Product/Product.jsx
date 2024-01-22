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
                width={479}
                height={629}
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
                100% organic cotton, and it 's Cradle to Cradle Certified™ Gold,
                which means it can go safely back into the earth once you 're
                finished <br /> loving it.
                <span className="read_more">Read More</span>
              </p>
            </div>
            <div className="input-checkbox">
              <input type="checkbox" name="" id="" />
              <span>Is this a sample ?</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
