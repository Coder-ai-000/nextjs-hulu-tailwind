import React from "react";
import localCompare from "./localCompare";

export default async function fetchParserforGenreResultsSSRandSSG(
  mymoviegenreinfo,
  genre
) {
  if (mymoviegenreinfo?.genres?.length > 0) {
    //! The bottom maps the key's values {genre[]}. Basically removing the outter object
    var mappedvalues = await Object.keys(mymoviegenreinfo).map(
      (e) => mymoviegenreinfo[e]
    );

    console.log("BELOOOOW IS MY ANSWERRR");
    const myname = localCompare("Bob", "Saleh");

    // console.log("JAJSAJJLKLASKOAKSA::LAOKASOAS0909090SJOASOAJS", myname);

    // console.log("THISSS ISS MY SEEECCCOOONNDDDDD VALUEEEEEEEEEE", genre);

    // console.log(
    //   "THIIIIIISSSSSSSSSSSSSSS ISSSSSSSSSSSSSSSS MYYYYYY FIRST VALUE",
    //   mymoviegenreinfo
    // );

    // console.log("IM SORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRY", mymoviegenreinfo);

    // console.log("The latest testinggggggggggggggggggg", mappedvalues);

    // console.log(
    //   "THIS IS MY TYPEEEEEEEEEEEEEEEEEEEEEEEEEEE OFFFFF^^^^^^^^^^^^^^^^^^^^",
    //   typeof genre
    // );/

    const flatarrayofvalues = await mappedvalues.flat();
    console.log("Finally flat", flatarrayofvalues);

    if (flatarrayofvalues !== null && genre !== null) {
      const filtteredarray = await flatarrayofvalues.filter(
        (placeholder) => {
          if (localCompare(genre, placeholder.name) == true) {
            console.log("HURRRRAYYYYY", placeholder.id, placeholder.name);
            return placeholder;
          }
          return false;
        }
        // placeholder.name == genre
        // useLocalCompare(placeholder.name, genre)
      );
      console.log("LAOKSAJDSNJDIFNJEOEKOSLO", filtteredarray);
      console.log("This is avangers two ID", filtteredarray[0]?.id);
      console.log(
        "THISSS ISS MY THIIIIIIIIIIIIIIIIIIIRD VALUEEEEEEEEEE",
        genre
      );

      // console.log("11111111111111LAOKSAJDSNJDIFNJEOEKOSLO", filtteredarray);
      // console.log("IM SORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRY", mymoviegenreinfo);
      // console.log(
      //   "WHO IS PRESSURING YOU NOWWWWWWWWWWWWWWWWWWWWWW?",
      //   mymoviegenreinfo
      // );

      console.log("This is avangers two ID", filtteredarray[0]?.id);

      console.log("just a check", mymoviegenreinfo);
      console.log(
        "a check for lengthhhhhhhhhhhhhhhhhh",
        mymoviegenreinfo?.genres?.length
      );
      return filtteredarray[0].id;
    }
  }
}

// need to do as ASYNC function because was in a useState in the clientSide render
