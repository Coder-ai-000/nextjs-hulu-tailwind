import React from "react";

async function useFetchTrendingCatagorySSG() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=f70b3ca617a5d8978429e375c55a4fa2`
  );
  const fetchedtrending = await response.json();

  return fetchedtrending;
}

export default useFetchTrendingCatagorySSG;

//use shorthand RFCE for default
