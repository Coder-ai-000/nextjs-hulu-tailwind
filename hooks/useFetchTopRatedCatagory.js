import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function useFetchTopRatedCatagory() {
  const [toprated, setToprated] = useState();

  useEffect(() => {
    async function APIfetch() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=f70b3ca617a5d8978429e375c55a4fa2&language=en-US&page=1`
      );
      const fetchedtoprated = await response.json();
      console.log(
        "This is me testing my TOP RATED FETCH 4444444444444444444444444444444",
        fetchedtoprated
      );

      setToprated(fetchedtoprated);
    }
    APIfetch();
  }, []);
  return toprated;
}
