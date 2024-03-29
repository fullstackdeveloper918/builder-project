"use client";
import React from "react";
import "./Products.css";
import Image from "next/image";
import images from "@/constants/images";
import { Collection_data } from "../../constants/data";
import Featured_product from "../../assets/headerPics/main-product.png";
import useFetch from "../../lib/useFetch";
import Dot from "./../custom-colored-dot/Dot";
import { useRouter } from "next/navigation";
import Loaders from "../../components/loaders/Loaders";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ response, error, loading }) => {
  const router = useRouter();

  return (
    <>
      <div className="collection_wrapper" style={{marginBottom: "30px"}}>
        <div className="collection_container">
          <div className="collection_Single">
            <div className="imgContent">
              <Image
                src={Featured_product}
                width={221}
                height={345}
                alt="cup"
                className="img"
              />
            </div>
            <div className="textContent">
              <h4 className="textContent_title">
                Zama Flannel Plaid Button Down Shirt - Unisex
              </h4>
              <p>as low as $60.00</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="132"
                height="21"
                viewBox="0 0 132 21"
                fill="none"
              >
                <path
                  d="M21.1201 10.0605C21.1201 15.2509 16.7603 19.4949 11.3368 19.4949C5.91327 19.4949 1.55352 15.2509 1.55352 10.0605C1.55352 4.87 5.91327 0.626032 11.3368 0.626032C16.7603 0.626032 21.1201 4.87 21.1201 10.0605Z"
                  stroke="#D0D0CC"
                  stroke-width="1.25792"
                />
                <ellipse
                  cx="11.2904"
                  cy="10.0159"
                  rx="6.91078"
                  ry="6.67925"
                  fill="black"
                />
                <path
                  d="M48.7631 10.0605C48.7631 15.2509 44.4034 19.4949 38.9799 19.4949C33.5563 19.4949 29.1966 15.2509 29.1966 10.0605C29.1966 4.87 33.5563 0.626032 38.9799 0.626032C44.4034 0.626032 48.7631 4.87 48.7631 10.0605Z"
                  stroke="#D0D0CC"
                  stroke-width="1.25792"
                />
                <ellipse
                  cx="38.9337"
                  cy="10.0159"
                  rx="6.91078"
                  ry="6.67925"
                  fill="#6B6B6B"
                />
                <path
                  d="M75.2546 10.0605C75.2546 15.2509 70.8949 19.4949 65.4713 19.4949C60.0478 19.4949 55.688 15.2509 55.688 10.0605C55.688 4.87 60.0478 0.626032 65.4713 0.626032C70.8949 0.626032 75.2546 4.87 75.2546 10.0605Z"
                  stroke="#D0D0CC"
                  stroke-width="1.25792"
                />
                <ellipse
                  cx="65.4249"
                  cy="10.0159"
                  rx="6.91078"
                  ry="6.67925"
                  fill="#0B0D10"
                />
                <path
                  d="M102.898 10.0605C102.898 15.2509 98.5384 19.4949 93.1149 19.4949C87.6913 19.4949 83.3316 15.2509 83.3316 10.0605C83.3316 4.87 87.6913 0.626032 93.1149 0.626032C98.5384 0.626032 102.898 4.87 102.898 10.0605Z"
                  stroke="#D0D0CC"
                  stroke-width="1.25792"
                />
                <ellipse
                  cx="93.0685"
                  cy="10.0159"
                  rx="6.91078"
                  ry="6.67925"
                  fill="#91C6EB"
                />
                <path
                  d="M130.541 10.0605C130.541 15.2509 126.181 19.4949 120.757 19.4949C115.334 19.4949 110.974 15.2509 110.974 10.0605C110.974 4.87 115.334 0.626032 120.757 0.626032C126.181 0.626032 130.541 4.87 130.541 10.0605Z"
                  stroke="#D0D0CC"
                  stroke-width="1.25792"
                />
                <ellipse
                  cx="120.712"
                  cy="10.0159"
                  rx="6.91078"
                  ry="6.67925"
                  fill="#EBEBEB"
                />
              </svg>
              <div className="checkbtn">
                <button>check it out</button>
              </div>
            </div>
          </div>

          {response?.data?.data.map((item) => (
            <>
              <ProductCard item={item} key={item.id} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
