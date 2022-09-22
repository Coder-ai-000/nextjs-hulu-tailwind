import React from "react";

export default async function useFetchMovieGenreResultsSSR(
  mymoviegenreinfofinal
) {
  if (mymoviegenreinfofinal !== undefined) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f70b3ca617a5d8978429e375c55a4fa2&language=en-US&with_genres=${mymoviegenreinfofinal}`
    );
    const newfetchedgenres = await response.json();
    console.log("This is me testing my fetch", newfetchedgenres);

    return newfetchedgenres;
  }
}
