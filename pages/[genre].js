import React from "react";
import { useRouter } from "next/router";
import useFetchMovieGenreResults from "../hooks/useFetchMovieGenreResults";
import Moviegenreresults from "../components/Moviegenreresults";

export default function genre() {
  const router = useRouter();
  const { genre } = router.query;

  const id = useFetchMovieGenreResults(genre);

  <Moviegenreresults genre={genre} id={id} />;

  return <div>{genre}</div>;
}
