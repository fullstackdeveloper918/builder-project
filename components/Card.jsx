import images from "@/constants/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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

const arr = [1111, 2222222, 33333333, 4444444, 555555, 666666, 7777777];

const Card = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <>
      {/* <div className="flex w-[100%] h-[100vh]"></div> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {users?.map((user) => {
          return (
            <>
              <div class="max-w-[350px] bg-white">
                <div className="w-[80%] bg-[#fff] border border-solid border-[#ccc] rounded-[30px] shadow border-gray-200">
                  <Image class="rounded-t-lg" src={images.shirt} alt="shirt" />
                </div>
                <div className="flex flex-col w-[70%] text-wrap">
                  <span class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                    {/* Tentree® Long Sleeve Classic Henley - Men&apos;s 😀😀😀🐝♻💚🐟 */}
                    {user?.company?.catchPhrase}
                  </span>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    as low as $ {user?.address?.zipcode}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
      ;
    </>
  );
};

export default Card;

// {arr.map((a, i) => {
//     return <h2 key={i}>{a}</h2>;
//   })}
