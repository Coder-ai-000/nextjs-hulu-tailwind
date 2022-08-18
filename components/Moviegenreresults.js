import { object } from "joi";
import { isArray } from "lodash";
import React from "react";
import useFetchMovieGenreResults from "../hooks/useFetchMovieGenreResults";
import useSelectedGenreInfoExtractor from "../hooks/useSelectedGenreInfoExtractor";
import Thumbnail from "./Thumbnail";

export default function Moviegenreresults({ movies }) {
  // const myobjecthopefully = useFetchMovieGenreResults(genre);

  console.log("ARRRRRRRRRRRRRRRRIGAAAAAAAAATOOOOOOOOOO", movies);

  if (movies !== undefined) {
    var mappedvalues = Object.keys(movies).map((e) => movies[e]);

    const flatarrayofvalues = mappedvalues.flat();
    console.log("Finally flat", flatarrayofvalues);

    const filtteredarray = flatarrayofvalues.filter(
      (character) => character.poster_path == true
    );

    console.log(filtteredarray, "HURRRAH");

    console.log("Gondabonda", movies.results);

    movies.results.map((movie) => console.log("Jello"));

    const { results } = movies;
    console.log("naga", results);
  }

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {/* PUT IT IN */}
      {movies?.results?.map((movie) => (
        <div>
          <Thumbnail movie={movie} />
        </div>
      ))}
      {/* {console.log("My Obnjnjnjknjklkmkjnkjknjkn ject is", myobjecthopefully)} */}
    </div>
  );
}
