import React from "react";

export default async function fetchNavBarCatagoriesSSRandSSG() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=f70b3ca617a5d8978429e375c55a4fa2&language=en-US`
  );
  const fetchedgenres = await response.json();
  await fetchedgenres.genres.push({ name: "Trending" });
  await fetchedgenres.genres.push({ name: "Top Rated" });
  console.log(
    "THISSSSSSSSSSSSSSSSSSSSSSSSS IS MY FETCHHHEED GENRE",
    fetchedgenres
  );

  return fetchedgenres;
}
