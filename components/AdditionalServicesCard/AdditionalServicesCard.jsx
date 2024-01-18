import React from "react";
import "./index.css";
import Image from "next/image";
import graphicImg from "../../assets/graphicImg.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const additionalServicesArray = [
  {
    heading: "Graphic design",
    route: graphicImg,
    desc: `Graphic design service is available upon request. If you don’t
    have your artwork ready for imprint, or need help adapting the
    file to the correct format in .ai or .eps, click on the checkbox
    “contact me about artwork” in the product page.`,
    id: 1,
  },
  {
    heading: "gfvujrtgb design",
    route: graphicImg,
    desc: `Graphic design service is available upon request. If you don’t
    have your artwork ready for imprint, or need help adapting the
    file to the correct format in .ai or .eps, click on the checkbox
    “contact me about artwork” in the product page.`,
    id: 1,
  },
  {
    heading: "Graphic design",
    route: graphicImg,
    desc: `Graphic design service is available upon request. If you don’t
    have your artwork ready for imprint, or need help adapting the
    file to the correct format in .ai or .eps, click on the checkbox
    “contact me about artwork” in the product page.`,
    id: 1,
  },
];
const AdditionalServicesCard = () => {
  return (
    <div className="container">
      {additionalServicesArray?.map((item, id) => {
        return (
          <div className="card" key={item.id}>
            <div className="card_content_container">
              <div>
                <Image
                  src={item.route}
                  alt="graphic design"
                  className="image"
                  width={100}
                  height={100}
                />
              </div>
              <div className="heading">{item.heading}</div>
              <div className="desc">{item.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdditionalServicesCard;
