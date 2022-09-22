import React from "react";

export default async function fetchParistimeISG() {
  const response = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=Europe/Paris`
  );
  const currenttimeinparis = await response.json();

  return currenttimeinparis;
}
