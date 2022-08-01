import { object } from "joi";
import React from "react";
import useFetchNavBarCatagories from "./useFetchNavBarCatagories";

export default function useFetchMovieGenreResults(x) {
  //warnning here this fetch does not have trending and top rated
  const mymoviegenreobjects = useFetchNavBarCatagories();

  function filterByPosition(array, number, position) {
    return array.filter((innerArray) => innerArray[position - 1] !== number);
  }

  const asArray = Object.entries(mymoviegenreobjects);
  console.log(
    "This is me logging my object keys " + Object.keys(mymoviegenreobjects)
  );

  console.log(
    "This is me logging my object values " + Object.values(mymoviegenreobjects)
  );

  var values = Object.keys(mymoviegenreobjects).map(
    (e) => mymoviegenreobjects[e]
  );

  console.log("The latest test", values);

  console.log("This is me logging my object in OG form", mymoviegenreobjects);
  console.log("This is me logging my object as an array", asArray);
  console.log("The latest test", values);

  // const valuesasArray = Object.entries(values);
  // console.log("These are my values as arrays", valuesasArray);
  const filteringvaluesasArray = values.filter((num) => num !== 0);
  // console.log(
  //   "Leaving only my genre values in as array",
  //   filteringvaluesasArray
  // );

  const justafiltertest = filterByPosition(filteringvaluesasArray, 3, 1);
  console.log("ello", justafiltertest);

  const flatNumbers = justafiltertest.flat(2);
  console.log("Finally flat", flatNumbers);

  const avengers = flatNumbers.filter(
    (character) => character.name === "Adventure"
  );

  const avengerstwo = avengers[0];

  // console.log("This is avengers", avengers);
  // console.log("hello trying bracket notation", avengers);

  // const avengerstwo = avengers[0]

  // console.log("This is avengerstwo", avengerstwo);

  // Object.entries(avengers);

  // var keyz = Object.values(avengers);
  // console.log("maoi", keyz);

  //   console.log(Object.values("This is my keys", asArray));

  //   const chosengenre = mymoviegenreobjects.filter(
  //     (mygenre) => (mygenre.name = x.name)
  //   );

  //   console.log(filtered);

  console.log("This is avangers two", avengerstwo);

  //WHAT I WANT TO DO IS PUT AVANGERS.ID into a variable called ID and AVENGERS.NAME into a variable called name//

  return avengerstwo;
}
