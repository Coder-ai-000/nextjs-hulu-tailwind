import React from "react";
// import useFetchTrendingCatagorySSR from "../../hooks/SSRandSSG/useFetchTrendingCatagorySSR";
import fetchTrendingCatagorySSRandSSG from "../../hooks/SSRandSSG/fetchTrendingCatagorySSRandSSG";
import Moviegenreresults from "../../components/Moviegenreresults";
// import useFetchTopRatedCatagorySSR from "../../hooks/SSRandSSG/useFetchTopRatedCatagorySSR";
import fetchTopRatedCatagorySSRandSSG from "../../hooks/SSRandSSG/fetchTopRatedCatagorySSRandSSG";
// import useFetchMovieGenreResultsSSR from "../../hooks/SSRandSSG/useFetchMovieGenreResultsSSR";
import fetchMovieGenreResultsSSRandSSG from "../../hooks/SSRandSSG/fetchMovieGenreResultsSSRandSSG";
// import useFetchNavBarCatagoriesSSR from "../../hooks/SSRandSSG/useFetchNavBarCatagoriesSSR";
import fetchNavBarCatagoriesSSRandSSG from "../../hooks/SSRandSSG/fetchNavBarCatagoriesSSRandSSG";
// import useFetchParserforGenreResults from "../../hooks/SSRandSSG/useFetchParserforGenreResults";
import fetchParserforGenreResultsSSRandSSG from "../../hooks/SSRandSSG/fetchParserforGenreResultsSSRandSSG";
// import useLocalCompare from "../../hooks/SSRandSSG/useLocalCompare";
// import fetchTrendingCatagorySSRandSSG from "../../hooks/SSRandSSG/fetchTrendingCatagorySSRandSSG";
// import fetchTopRatedCatagorySSRandSSG from "../../hooks/SSRandSSG/fetchTopRatedCatagorySSRandSSG";
// import fetchNavBarCatagoriesSSRandSSG from "../../hooks/SSRandSSG/fetchNavBarCatagoriesSSRandSSG";
// import fetchParserforGenreResultsSSRandSSG from "../../hooks/SSRandSSG/fetchParserforGenreResultsSSRandSSG";
// import fetchMovieGenreResultsSSRandSSG from "../../hooks/SSRandSSG/fetchMovieGenreResultsSSRandSSG";
import compareAndExtractWithAPI from "../../hooks/SSRandSSG/compareAndExtractWithAPI";

//need an if statement when going to map for trending and top rated.
export async function getStaticPaths(context) {
  const mycatagories = await fetchNavBarCatagoriesSSRandSSG();
  const mycatagoriesgenres = await mycatagories.genres;

  console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOM", context);

  //   console.log("ONCE PIECE IS A GRAND EYE", mycatagories);
  //   console.log("JELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLo", mycatagoriesgenres);
  //   return {
  //     paths: mycatagoriesgenres.map((catagory) => [
  //       {
  //         params: {
  //           genre: catagory.name,
  //         },
  //       },
  //     ]),
  //     fallback: "blocking",
  //   };
  // }

  const mypaths = mycatagoriesgenres.map((mycata) => {
    return {
      params: {
        genre: mycata.name,
      },
    };
  });

  return {
    paths: mypaths,

    fallback: false, // can also be true or 'blocking'
    // fallback: blocking,
  };
}

export async function getStaticProps(context) {
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
    //!
    const bobby = compareAndExtractWithAPI(mygenrechosen);
    console.log("Thisss izzzzzzzzzzzzzzzzzzzzzzzz Bobby", bobby);

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
