import React from "react";
import { useRouter } from "next/router";
import useFetchMovieGenreResults from "../hooks/useFetchMovieGenreResults";
import Moviegenreresults from "../components/Moviegenreresults";
import useSelectedGenreInfoExtractor from "../hooks/useSelectedGenreInfoExtractor";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import useFetchTrendingCatagory from "../hooks/useFetchTrendingCatagory";
import useFetchTopRatedCatagory from "../hooks/useFetchTopRatedCatagory";

export default function genre() {
  const [myresultsfromhook, setMyresultsfromhook] = useState();
  const [myreturnedmovies, setMyreturnedmovies] = useState();

  const router = useRouter();
  const { genre } = router.query;

  //Not sure am I suffering from the same prerendeing issue. Also, why am I getting the " your code will break error when curly bracing including the return}

  // if (genre !== undefined) {

  if (genre == "Trending") {
    let mymovies = useFetchTrendingCatagory();

    return (
      <div>
        {/* <Navbar /> */}
        <div>{genre}</div>
        <Moviegenreresults movies={mymovies} />
      </div>
    );
  } else if (genre == "Top Rated") {
    let mymovies = useFetchTopRatedCatagory();

    return (
      <div>
        {/* <Navbar /> */}
        <div>{genre}</div>
        <Moviegenreresults movies={mymovies} />
      </div>
    );
  } else {
    let mymovies = useFetchMovieGenreResults(genre);

    return (
      <div>
        {/* <Navbar /> */}
        <div>{genre}</div>
        <Moviegenreresults movies={mymovies} />
      </div>
    );
  }

  // else{

  ///! Maybe use usestate?

  // console.log("LAASATSYAGSYAGHSIA", myresultsfromhook);

  // console.log("This is the genre from the genre page", genre);

  // const mymovies = useFetchMovieGenreResults(genre);

  // setMyreturnedmovies(mymovies);

  // console.log("Check if the movies returned are different", mymovies);

  // console.log("My genre selected is", genre);

  // return (
  //   <div>
  //     {/* <Navbar /> */}
  //     <div>{genre}</div>
  //     <Moviegenreresults movies={mymovies} />
  //   </div>
  // );
}
