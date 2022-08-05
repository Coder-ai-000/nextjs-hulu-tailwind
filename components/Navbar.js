import React from "react";
import useFetchNavBarCatagories from "../hooks/useFetchNavBarCatagories";
import Link from "next/link";

export default function Navbar() {
  const myfetchedgenres = useFetchNavBarCatagories();

  console.log("This is me checking my nav page", myfetchedgenres);

  //! Can also do like the below using Object.entires - makes it easier so you dont have to deep dive into the particular name of the expected object. You can just check the entires in your highest level wrapper object
  //   const result = Object.entries(myfetchedgenres).map(([key, value]) => {
  //     console.log("my object key check", key);
  //     console.log("my object value check", value);

  //     return { [key]: value };
  //   });

  return (
    <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide  hover:text-white active:text-red-500">
      {myfetchedgenres?.genres.map((elem) => (
        <Link href={`${elem.name}`}>
          <div>
            <h2
              key={elem.name}
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            >
              {elem.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
