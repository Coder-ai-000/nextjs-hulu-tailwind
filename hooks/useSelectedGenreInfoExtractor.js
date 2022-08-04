import React from "react";
import useFetchNavBarCatagories from "./useFetchNavBarCatagories";

export default function useSelectedGenreInfoExtractor(genre) {
  console.log("Checking if its reading", genre);

  const mymoviegenreobjects = useFetchNavBarCatagories();

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
    console.log("This is avangers two name name", filtteredarray[0].name);

    return filtteredarray;
  }
}
