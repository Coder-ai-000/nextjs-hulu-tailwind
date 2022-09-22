import React from "react";
import fetchNavBarCatagoriesSSRandSSG from "./fetchNavBarCatagoriesSSRandSSG";
import localCompare from "./localCompare";

export default async function compareAndExtractWithAPI(suppliedgenre) {
  const mygenres = await fetchNavBarCatagoriesSSRandSSG();
  console.log("HERE IS THE RESULT OF CONSOLELOGGING", mygenres);

  const mygenresobjectflattenedtoarray = await mygenres.genres.flat();

  const filtteredarray = await mygenresobjectflattenedtoarray.filter(
    (placeholder) => {
      console.log("This is the supplied genre", suppliedgenre);
      console.log("This is the placeholders name value", placeholder.name);
      if (localCompare(suppliedgenre, placeholder.name) == true) {
        console.log("HURRRRAYYYYY", placeholder.id, placeholder.name);
        return placeholder;
      }
      return false;
    }
  );

  let myreturnedobject = await filtteredarray[0].name;

  console.log("LETTS SEE IF THIS WORRKKKSS", myreturnedobject);

  return myreturnedobject;
}
