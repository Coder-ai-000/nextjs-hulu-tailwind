import React from "react";

export default async function useFetchTopRatedCatagorySSG() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=f70b3ca617a5d8978429e375c55a4fa2&language=en-US&page=1`
  );
  const data = await res.json();
  //   console.log("THIS IS MY TEST HELOOOOOOOOOOOO3480280483204803280432", data);

  return data;
}
