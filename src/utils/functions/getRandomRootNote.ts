import {  RootNote } from "@/utils/types";
import naturalsData from "../../../public/data/naturals.json";
import sharpsData from "../../../public/data/sharps.json";
import flatsData from "../../../public/data/flats.json";

export default function getRandomRootNote(
  useFlats: boolean,
  useSharps: boolean
) {
  let notesDatas: RootNote[] = [...naturalsData] as RootNote[];

  if (useFlats) {
    notesDatas.push(...flatsData);
  }

  if (useSharps) {
    notesDatas.push(...sharpsData);
  }

  notesDatas = notesDatas.filter(note => 
    (note.accidental === "flat" && useFlats) ||
    (note.accidental === "sharp" && useSharps) ||
    note.accidental === "natural"
  );


  const randomRootNote =
    notesDatas[Math.floor(Math.random() * notesDatas.length)];

    console.log(randomRootNote);  
  return {...randomRootNote};
}
