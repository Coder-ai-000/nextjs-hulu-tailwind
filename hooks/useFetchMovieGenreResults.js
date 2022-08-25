import React from "react";
import useFetchNavBarCatagories from "./useFetchNavBarCatagories";
import { useEffect, useState } from "react";

//! Make a note below that hooks take in like functions, what is taken in is an argument, not a prop (whitch components take in and may need to be deconstructed for easy use)

export default function useFetchMovieGenreResults(genre) {
  const [mymoviegenreinfo, setMymoviegenreinfo] = useState();

  const [mymoviegenreinfofinal, setMymoviegenreinfofinal] = useState();
  const [allmoviespartofselectedgenre, setAllmoviespartofselectedgenre] =
    useState();
  // const [mypassedingenre, setMypassedingenre] = useState();

  const mymoviegenreobjects = useFetchNavBarCatagories();

  console.log("Checking if its reading", genre);

  useEffect(() => {
    setMymoviegenreinfo(mymoviegenreobjects);
  }, [mymoviegenreobjects]);

  //! Talk about using optional chaining

  console.log("Jellllllllllllllllllllo", mymoviegenreinfo);

  useEffect(() => {
    console.log("TESSSSSSSSSSSSTING MY EFFECT");
    if (mymoviegenreinfo?.genres?.length > 0) {
      //! The bottom maps the key's values {genre[]}. Basically removing the outter object
      var mappedvalues = Object.keys(mymoviegenreobjects).map(
        (e) => mymoviegenreobjects[e]
      );

      console.log("The latest testinggggggggggggggggggg", mappedvalues);

      const flatarrayofvalues = mappedvalues.flat();
      console.log("Finally flat", flatarrayofvalues);

      const filtteredarray = flatarrayofvalues.filter(
        (placeholder) => placeholder.name === genre
      );

      console.log("This is avangers two ID", filtteredarray[0].id);

      console.log("just a check", mymoviegenreinfo);
      console.log(
        "a check for lengthhhhhhhhhhhhhhhhhh",
        mymoviegenreinfo?.genres?.length
      );
      setMymoviegenreinfofinal(filtteredarray[0].id);

      // return mymoviegenreinfo;
    }
  }, [mymoviegenreinfo, genre]);

  useEffect(() => {
    console.log(
      "THIS IS ME TESTING MY THIRD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
      mymoviegenreinfofinal
    );
  }, [mymoviegenreinfofinal]);

  useEffect(() => {
    async function APIfetch() {
      if (mymoviegenreinfofinal !== undefined) {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=f70b3ca617a5d8978429e375c55a4fa2&language=en-US&with_genres=${mymoviegenreinfofinal}`
        );
        const newfetchedgenres = await response.json();
        console.log("This is me testing my fetch", newfetchedgenres);
        setAllmoviespartofselectedgenre(newfetchedgenres);
      }
    }
    APIfetch();
    // const mystatecheck = genres.genres.map((elem) => console.log(elem));
  }, [mymoviegenreinfofinal]);

  console.log(
    "HEEEEEEEEEEEEEEREEEEEEEEEEEE WEEEEEE GOOOO",
    allmoviespartofselectedgenre
  );

  return allmoviespartofselectedgenre;
}
