import React from "react";
import { useRouter } from "next/router";
import useFetchMovieGenreResults from "../hooks/useFetchMovieGenreResults";
import Moviegenreresults from "../components/Moviegenreresults";
import useSelectedGenreInfoExtractor from "../hooks/useSelectedGenreInfoExtractor";

export default function genre() {
  const router = useRouter();
  const { genre } = router.query;

  //Not sure am I suffering from the same prerendeing issue. Also, why am I getting the " your code will break error when curly bracing including the return}

  if (genre !== undefined) {
    console.log("This is the genre from the genre page", genre);

    const id = useFetchMovieGenreResults(genre);

    console.log("this is teh return from the UseFetchGrereResults", id);

    // <Moviegenreresults genre={genre} id={id} />;
  }

  return <div>{genre}</div>;
}
