import { Scale, RootNote } from "../types";

export default function getRandomScale(rootNote: RootNote): Scale  {

  // Choisir une gamme aléatoire parmi les gammes disponibles pour cette note
  const randomIndex = Math.floor(Math.random() * rootNote.scales.length);
  console.log(rootNote.scales[randomIndex]);
  return rootNote.scales[randomIndex];
}
