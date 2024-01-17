import images from "@/constants/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  console.log(users, "usersusers");
  return (
    <>
      <div className="flex w-[100%] h-[100vh]">
        {users
          ?.map((user) => {
            return (
              <>
                <div class="max-w-[350px] bg-white">
                  <div className="w-[80%] bg-[#fff] border border-solid border-[#ccc] rounded-[30px] shadow border-gray-200">
                    <Image
                      class="rounded-t-lg"
                      src={images.shirt}
                      alt="shirt"
                    />
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
          })
          .slice(0, 5)}
      </div>
    </>
  );
};

export default Card;
