import React from "react";
import Moviegenreresults from "../components/Moviegenreresults";
import useFetchNavBarCatagories from "./useFetchNavBarCatagories";
import useSelectedGenreInfoExtractor from "./useSelectedGenreInfoExtractor";
import { useEffect, useState } from "react";

//! Make a note below that hooks take in like functions, what is taken in is an argument, not a prop (whitch components take in and may need to be deconstructed for easy use)

export default function useFetchMovieGenreResults(genre) {
  const [mymoviegenreinfo, setMymoviegenreinfo] = useState({});

  console.log("Checking if its reading", genre);

  const mymoviegenreobjects = useFetchNavBarCatagories();
  // setMymoviegenreinfo(mymoviegenreobjects);
  console.log(mymoviegenreinfo);

  if (mymoviegenreobjects.genres.length > 0) {
    console.log(
      "This is what I get back from my UseNavBarCatagories hook",
      mymoviegenreobjects
    );

    ///***************************************************** */

    // const asArray = Object.entries(mymoviegenreobjects);
    // console.log(
    //   "This is me logging my object keys " + Object.keys(mymoviegenreobjects)
    // );

    // console.log(
    //   "This is me logging my object values " +
    //     Object.values(mymoviegenreobjects)
    // );

    ///***************************************************** */

    //! The bottom maps the key's values {genre[]}. Basically removing the outter object
    var mappedvalues = Object.keys(mymoviegenreobjects).map(
      (e) => mymoviegenreobjects[e]
    );

    console.log("The latest testinggggggggggggggggggg", mappedvalues);

    ///***************************************************** */

    // console.log("This is me logging my object in OG form", mymoviegenreobjects);

    // const valuesasArray = Object.entries(values);
    // console.log("These are my values as arrays", valuesasArray);
    // const filteringvaluesasArray = values.filter((num) => num !== 0);
    // console.log(
    //   "Leaving only my genre values in as array",
    //   filteringvaluesasArray
    // );

    // const justafiltertest = filterByPosition(filteringvaluesasArray, 3, 1);
    // console.log("ello", justafiltertest);

    ///***************************************************** */

    const flatarrayofvalues = mappedvalues.flat();
    console.log("Finally flat", flatarrayofvalues);

    const filtteredarray = flatarrayofvalues.filter(
      (character) => character.name === genre
    );

    console.log("This is avangers two ID", filtteredarray[0].id);

    //   useEffect(() => {
    //     async function APIrequests() {
    //       //if function in here for trending and popular vs genre search
    //       const response = await fetch(
    //         `https://api.themoviedb.org/3/discover/movie?api_key=f70b3ca617a5d8978429e375c55a4fa2&language=en-US&with_genres=${filtteredarray[0].id}`
    //       );
    //       const movies = await response.json();
    //       await setMymoviegenreinfo(movies);
    //       await console.log(movies);

    //       return mymoviesfetched; //!! Does not work here (always gives you the state before the one you clicked) because does API requests has async functions and does not return intime for the console to log anything
    //     }

    //     APIrequests();
    //   }, [filtteredarray[0].id]);
    // }

    // if (mymoviegenreinfo !== undefined) {

    return mymoviegenreinfo;
  }
}
