import React from "react";
// import useFetchTrendingCatagorySSR from "../../hooks/SSR/useFetchTrendingCatagorySSR";
import fetchTrendingCatagorySSRandSSG from "../../hooks/SSRandSSG/fetchTrendingCatagorySSRandSSG";
import Moviegenreresults from "../../components/Moviegenreresults";
// import useFetchTopRatedCatagorySSR from "../../hooks/SSR/useFetchTopRatedCatagorySSR";
import fetchTopRatedCatagorySSRandSSG from "../../hooks/SSRandSSG/fetchTopRatedCatagorySSRandSSG";
// import useFetchMovieGenreResultsSSR from "../../hooks/SSR/useFetchMovieGenreResultsSSR";
import fetchMovieGenreResultsSSRandSSG from "../../hooks/SSRandSSG/fetchMovieGenreResultsSSRandSSG";
// import useFetchNavBarCatagoriesSSR from "../../hooks/SSR/useFetchNavBarCatagoriesSSR";
import fetchNavBarCatagoriesSSRandSSG from "../../hooks/SSRandSSG/fetchNavBarCatagoriesSSRandSSG";
// import useFetchParserforGenreResults from "../../hooks/SSR/useFetchParserforGenreResults";
import fetchParserforGenreResultsSSRandSSG from "../../hooks/SSRandSSG/fetchParserforGenreResultsSSRandSSG";
// import useLocalCompare from "../../hooks/SSR/useLocalCompare";
import localCompare from "../../hooks/SSRandSSG/localCompare";
import compareAndExtractWithAPI from "../../hooks/SSRandSSG/compareAndExtractWithAPI";

export async function getServerSideProps(context) {
  // Fetch data from external API

  console.log("MYYYYY NAMMMEEEE ISSSS SALLLEEHHHHHH");

  if (context.params.genre == "Trending") {
    const mydata = fetchTrendingCatagorySSRandSSG();
    console.log(
      "THIS IS MY TEST HELOOOOOOOOOOOO3480280483204803280432",
      context
    );

    return {
      props: {
        mydataz: await mydata,
      },
    };
  } else if (context.params.genre == "Top Rated") {
    const mydata = fetchTopRatedCatagorySSRandSSG();
    console.log(
      "THIS IS MY TEST HELOOOOOOOOOOOO3480280483204803280432",
      mydata
    );

    return {
      props: {
        mydataz: await mydata,
      },
    };
  } else if (context.params.genre !== null) {
    const mygenrechosen = context.params.genre;

    // localCompare("Saleh", "saleh");
    // const bobby = compareAndExtractWithAPI(mygenrechosen);
    // console.log("Thisss izzzzzzzzzzzzzzzzzzzzzzzz Bobby", bobby);

    const mycatagories = await fetchNavBarCatagoriesSSRandSSG();
    const myparseddata = await fetchParserforGenreResultsSSRandSSG(
      mycatagories,
      mygenrechosen
    );
    const myresultdataafterparsing = await fetchMovieGenreResultsSSRandSSG(
      myparseddata
    );
    //   console.log("THIS IS MY TEST HELOOOOOOOOOOOO3480280483204803280432", mydata);

    return {
      props: {
        mydataz: await myresultdataafterparsing,
      },
    };
  }
}

function genre({ mydataz }) {
  return (
    <div>
      {/* {console.log(props)} */}
      {/* <Navbar /> */}
      <div>Hello</div>
      <Moviegenreresults movies={mydataz} />
    </div>
  );
}

export default genre;
