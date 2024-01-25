"use client";
import React from "react";
import "./StackCards.css";
import Image from "next/image";
import images from "@/constants/images";

const Stack_Card_Data = [
  {
    ID: 1,
    src: images.Stack_Card1,
    btn: "Flat 25% off",
  },
  {
    ID: 2,
    src: images.Stack_Card2,
    btn: "Flat 25% off",
  },
  {
    ID: 3,
    src: images.Stack_Card3,
    btn: "Flat 25% off",
  },
  {
    ID: 4,
    src: images.Stack_Card4,
    btn: "Flat 25% off",
  },
  {
    ID: 5,
    src: images.Stack_Card5,
    btn: "Flat 25% off",
  },
];

const StackCards = () => {
  return (
    <>
      <div className="stack_container">
        <div className="stack_left_content">
          <p>Explore our collections</p>
          <h3>
            Show me <b> Products that...</b>
          </h3>
          <button>View Products</button>
        </div>
        <div className="stack_right_content">
          <div className="stack_card_wrapper">
            {Stack_Card_Data.map((card) => (
              <div key={card.ID} className={`stack_card-${card.ID}`}>
                <Image src={card.src} alt="Stack_Card_Image" />
                <button>{card.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StackCards;
