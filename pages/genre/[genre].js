import React from "react";
import { useRouter } from "next/router";
import useFetchMovieGenreResults from "../../hooks/useFetchMovieGenreResults";
// import Moviegenreresults from "../components/Moviegenreresults";
import Moviegenreresults from "C:/Users/Secondone/Desktop/nodework/built in mods/nextjs-hulu-tailwind/components/Moviegenreresults.js";
import { useState } from "react";
// import useFetchTrendingCatagory from "../hooks/useFetchTrendingCatagory";
import useFetchTrendingCatagory from "../../hooks/useFetchTrendingCatagory";
// import useFetchTopRatedCatagory from "../hooks/useFetchTopRatedCatagory";
import useFetchTopRatedCatagory from "../../hooks/useFetchTopRatedCatagory";
import useFetchAllCatagoryAndAdditionsClientSideRender from "../../hooks/useFetchAllCatagoryAndAdditionsClientSideRender";
import compareAndExtractWithAPI from "../../hooks/SSRandSSG/compareAndExtractWithAPI";
import useCompareAndExtractWithAPI from "../../hooks/SSRandSSG/useCompareAndExtractWithAPI";

const useMovies = (genre) => {
  return useFetchAllCatagoryAndAdditionsClientSideRender(genre);
};

const useMyextract = (genre) => {
  return useCompareAndExtractWithAPI(genre);
};

// const useMovies = (genre) => {
//   switch (genre) {
//     case "Trending":
//       return useFetchTrendingCatagory();
//     case 'Top Rated"':
//       return useFetchTopRatedCatagory();
//     default:
//       return useFetchMovieGenreResults(genre);
//   }
// };

export default function Genre() {
  const router = useRouter();
  const { genre } = router.query;
  //! saleh = compareAndExtractWithAPI(genre);
  const mymovies = useMovies(genre);
  // const atest = useFetchAllCatagoryAndAdditionsClientSideRender(genre);
  // const mynewextarct = useMyextract(genre);

  // console.log("THIZZZZZ Is MY GENREEEE", genre);

  // const letsee = compareAndExtractWithAPI(genre);
  // console.log("LETTTTSSSS SEEEEE", letsee);

  return (
    <div>
      {/* <Navbar /> */}
      <div>{genre}</div>
      <Moviegenreresults movies={mymovies} />
    </div>
  );
}
