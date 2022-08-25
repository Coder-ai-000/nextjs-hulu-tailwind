import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function useFetchTrendingCatagory() {
  const [trending, setTrending] = useState();

  useEffect(() => {
    async function APIfetch() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=f70b3ca617a5d8978429e375c55a4fa2`
      );
      const fetchedtrending = await response.json();
      console.log(
        "This is me testing my TRENDING FETCH 555555555555555555555555555",
        fetchedtrending
      );
      setTrending(fetchedtrending);
    }
    APIfetch();
  }, []);

  return trending;
}
