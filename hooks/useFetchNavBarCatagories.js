import React from "react";
import { useState, useEffect } from "react";

export default function useFetchNavBarCatagories() {
  const [navgenres, setnavgenres] = useState({ genres: [] });

  useEffect(() => {
    async function APIfetch() {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f70b3ca617a5d8978429e375c55a4fa2&language=en-US`
      );
      const fetchedgenres = await response.json();
      await fetchedgenres.genres.push(
        ({ name: "Trending" }, { name: "Top Rated" })
      );
      console.log("This is me testing my fetch", fetchedgenres);
      setnavgenres(fetchedgenres);
    }
    APIfetch();
    console.log("This is my final state array", navgenres);
    // const mystatecheck = genres.genres.map((elem) => console.log(elem));
  }, []);

  //   console.log(navgenres.keys());

  const mystatecheck = navgenres.genres.map((elem) => console.log(elem));

  //! Can also do like the below using Object.entires - makes it easier so you dont have to deep dive into the particular name of the expected object. You can just check the entires in your highest level wrapper object
  //   const result = Object.entries(navgenres).map(([key, value]) => {
  //     console.log("my object key check", key);
  //     console.log("my object value check", value);

  //     return { [key]: value };
  //   });

  return navgenres;
}
