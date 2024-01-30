import React from "react";
import "./ProductCard.css";
import Dot from "../custom-colored-dot/Dot";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ item }) => {
  const router = useRouter();

  console.log(item, "item");

  return (
    <>
      <div
        className="collection_items"
        onClick={() => router.push(`products/${item?.id}`)}
      >
        <Image
          src={item?.image}
          width={278}
          height={311}
          alt="products_images"
        />
        <div className="product_card_content">
          <h4 className="title">{item?.product_title}</h4>
          <div className="small_text">as low as ${item?.unit_price || 0}</div>
          <div className="colors">
            {item.colours.split(",").map((c) => {
              return (
                <>
                  <Dot color={c} />
                </>
              );
            })}
          </div>
        </div>

        <div
          className="hidden_icons"
          onClick={() => router.push(`products/${item?.id}`)}
        >
          <button className="btn">View Product</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
