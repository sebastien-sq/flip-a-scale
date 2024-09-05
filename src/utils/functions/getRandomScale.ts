import { Scale, RootNote } from "../types";

export default function getRandomScale(rootNote: RootNote, selectedDatas: RootNote[]): Scale | undefined {
  // Trouver l'objet correspondant à la rootNote dans scalesData
  const rootNoteData = selectedDatas.find(item => item.name === rootNote.name);
  
  if (!rootNoteData || !rootNoteData.scales || rootNoteData.scales.length === 0) {
    console.error(`No scales found for root note: ${rootNote.name}`);
    return undefined;
  }

  // Choisir une gamme aléatoire parmi les gammes disponibles pour cette note
  const randomIndex = Math.floor(Math.random() * rootNoteData.scales.length);
  return rootNoteData.scales[randomIndex];
}
