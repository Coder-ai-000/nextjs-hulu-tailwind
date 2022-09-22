export default function useLocalCompare(a, b) {
  console.log("BUMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
  console.log("THISSSSSSSSSSSSSSSSS ISSSS A", a);
  console.log("THISSSSSSS ISSSSS B", b);
  if (!a.localeCompare(b, false, { sensitivity: "base" })) {
    console.log("THISSSSS ISSSSSS TRUEEEEEEE");
    return true;
  } else {
    console.log("THISSSSSSSSS is FALSEEEE!!!!!");
    return false;
  }
}
