import React from "react";
import fetchParistimeISG from "../../hooks/SSRandSSG/ISR/fetchParistimeISG";

export async function getStaticProps() {
  // Fetch data from external API
  let mytime = await fetchParistimeISG();

  // console.log(
  //   "This is me testing my TOP RATED FETCH 4444444444444444444444444444444",
  //   data
  // );

  // Pass data to the page via props
  return { props: { mytime }, revalidate: 60 };
}
// revalidate: 1,

// Next.js will attempt to re-generate the page:
// - When a request comes in
// - At most once every 10 seconds
// In seconds

export default function paristimeisg({ mytime }) {
  console.log("This is my time", mytime);
  return (
    <div>
      Hello
      <h2>{mytime.milliSeconds}</h2>
    </div>
  );
}
