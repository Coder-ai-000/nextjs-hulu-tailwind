import { result } from "lodash";
import React from "react";
import Image from "next/dist/client/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import Movieprofile from "./Movieprofile";

export default function Thumbnail({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <div className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        {/* {movie.title} */}
        <Image
          layout="responsive"
          src={
            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
            `${BASE_URL}${movie.poster_path}`
          }
          height={1000}
          width={1920}
        />

        {/* Always wrap everything in some type of HTML element (div, P, etc). If everything in a section needs a special type of styling - good indecator to wrap them in a div. In addition/otherwise - group things togeather in a div that could logically be considered part of the same section/sub-section. In the below, everything under image should be in a div cause they all need a p-2 AKA some sort of styling. Look at sonny sangha*/}
        <div className="p-2">
          <p className="truncate max-w-md">{movie.overview}</p>
          <h2 className="mt-1 text-2x1 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {movie.title || movie.original_name}
          </h2>

          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {movie.media_type && `${movie.media_type} *`}
            {""}
            {movie.release_date || movie.first_air_date}
            {""}
            <ThumbUpIcon className="h-5 mx-2" />
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );

  return <Movieprofile selectedmovie={movie} />;
}
