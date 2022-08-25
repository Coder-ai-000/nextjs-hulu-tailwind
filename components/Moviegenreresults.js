import React from "react";
import Thumbnail from "./Thumbnail";

export default function Moviegenreresults({ movies }) {
  console.log("ARRRRRRRRRRRRRRRRIGAAAAAAAAATOOOOOOOOOO", movies);

  if (movies !== undefined) {
    var mappedvalues = Object.keys(movies).map((e) => movies[e]);

    console.log("This is my mapped values....................", mappedvalues);

    const flatarrayofvalues = mappedvalues.flat();
    console.log("Finally flat", flatarrayofvalues);

    const filtteredarray = flatarrayofvalues.filter(
      (movie) => movie.poster_path == true
    );

    console.log("Gondabonda", movies.results);

    // movies.results.map((movie) => console.log(movie.name));

    //Can deconstruct results from movies object because movies is the object
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
