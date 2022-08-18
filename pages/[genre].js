import React from "react";
import { useRouter } from "next/router";
import useFetchMovieGenreResults from "../hooks/useFetchMovieGenreResults";
import Moviegenreresults from "../components/Moviegenreresults";
import useSelectedGenreInfoExtractor from "../hooks/useSelectedGenreInfoExtractor";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function genre() {
  const [myresultsfromhook, setMyresultsfromhook] = useState();

  const router = useRouter();
  const { genre } = router.query;

  //Not sure am I suffering from the same prerendeing issue. Also, why am I getting the " your code will break error when curly bracing including the return}

  // if (genre !== undefined) {
  console.log("LAASATSYAGSYAGHSIA", myresultsfromhook);

  console.log("This is the genre from the genre page", genre);

  const mymovies = useFetchMovieGenreResults(genre);

  console.log("Check if the movies returned are different", mymovies);

  console.log("My genre selected is", genre);
  // }

  return (
    <div>
      <Navbar />
      <div>{genre}</div>
      <Moviegenreresults movies={mymovies} />
    </div>
  );
}
