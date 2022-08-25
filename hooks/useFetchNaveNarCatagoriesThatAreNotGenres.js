import React from "react";
import { useState, useEffect } from "react";

export default function useFetchNaveNarCatagoriesThatAreNotGenres() {
  const [trending, setTrending] = useState();
  const [toprated, setToprated] = useState();
  const [trendingandtopratedcombined, setTrendingandtopratedcombined] =
    useState([]);

  useEffect(() => {
    async function APIfetch() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=f70b3ca617a5d8978429e375c55a4fa2`
      );
      const fetchedtrending = await response.json();
      setTrending(fetchedtrending);
      setTrendingandtopratedcombined([fetchedtrending]);
      console.log(
        "This is me testing my TRENDING FETCH 555555555555555555555555555",
        fetchedtrending
      );
    }
    APIfetch();
  }, []);

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
      console.log(
        "This is trendingandtopratedcombined before the change has only TRENDING IN IT NOW q7q7q7q7q77q7q7q7q7q7q77q7q",
        trendingandtopratedcombined
      );
      setToprated(fetchedtoprated);
      setTrendingandtopratedcombined([trending, fetchedtoprated]);
    }
    APIfetch();
  }, [trending]);

  // useEffect(() => {
  //   setTrendingandtopratedcombined([...trendingandtopratedcombined, toprated]);
  // }, [trending, toprated]);

  // console.log(
  //   "THIS IS ME TESTING MY COMBINED STATE 00000000000",
  //   trendingandtopratedcombined
  // );

  console.log(
    "This is my test for combing stuff 2222222222222222",
    trendingandtopratedcombined
  );

  // return trendingandtopratedcombined;
}
