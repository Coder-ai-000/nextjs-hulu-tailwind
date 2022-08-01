import React from "react";
import useFetchMovieGenreResults from "../hooks/useFetchMovieGenreResults";

export default function Moviegenreresults({ genre, id }) {
  const myobjecthopefully = useFetchMovieGenreResults(genre);

  return (
    <div>
      {genre} {id} {console.log(myobjecthopefully)}
      <div>{console.log("My Object is", myobjecthopefully)}</div>
    </div>
  );
}
