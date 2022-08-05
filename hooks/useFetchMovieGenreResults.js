import React from "react";
import Moviegenreresults from "../components/Moviegenreresults";
import useFetchNavBarCatagories from "./useFetchNavBarCatagories";
import useSelectedGenreInfoExtractor from "./useSelectedGenreInfoExtractor";
import { useEffect, useState } from "react";

//! Make a note below that hooks take in like functions, what is taken in is an argument, not a prop (whitch components take in and may need to be deconstructed for easy use)

export default function useFetchMovieGenreResults(genre) {
  const [mymoviegenreinfo, setMymoviegenreinfo] = useState();

  console.log("Checking if its reading", genre);

  const mymoviegenreobjects = useFetchNavBarCatagories();

  useEffect(() => {
    setMymoviegenreinfo(
      mymoviegenreobjects,
      console.log("This is my infoooooo from the setstae", mymoviegenreinfo)
    );
  }, [mymoviegenreobjects]);

  // console.log(
  //   "a check for lengthhhhhhhhhhhhhhhhhh",
  //   mymoviegenreinfo.genres.length
  // );

  //! Talk about using optional chaining

  if (mymoviegenreinfo?.genres?.length > 0) {
    //! The bottom maps the key's values {genre[]}. Basically removing the outter object
    var mappedvalues = Object.keys(mymoviegenreobjects).map(
      (e) => mymoviegenreobjects[e]
    );

    console.log("The latest testinggggggggggggggggggg", mappedvalues);

    const flatarrayofvalues = mappedvalues.flat();
    console.log("Finally flat", flatarrayofvalues);

    const filtteredarray = flatarrayofvalues.filter(
      (character) => character.name === genre
    );

    console.log("This is avangers two ID", filtteredarray[0].id);

    console.log("just a check", mymoviegenreinfo);
    console.log(
      "a check for lengthhhhhhhhhhhhhhhhhh",
      mymoviegenreinfo?.genres?.length
    );

    return mymoviegenreinfo;
  }
}
