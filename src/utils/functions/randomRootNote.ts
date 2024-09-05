import { Scale, RootNote } from "../types";
import naturalsData from "../../../public/data/naturals.json";
import sharpsData from "../../../public/data/sharps.json";
import flatsData from "../../../public/data/flats.json";

export default function randomRootNote(useFlats: boolean, useSharps: boolean) {
    const notesDatas: RootNote[] = naturalsData as RootNote[];

    if (useFlats) {
        notesDatas.push(...flatsData);
    }
    if(!useFlats){
        notesDatas.map((note) => {
            if(note.accidental === "flat"){
                notesDatas.splice(notesDatas.indexOf(note), 1);
            }
        })
    }
    if (useSharps) {
        notesDatas.push(...sharpsData);
    }
    if(!useSharps){
        notesDatas.map((note) => {
            if(note.accidental === "sharp"){
                notesDatas.splice(notesDatas.indexOf(note), 1);
            }
        })
    }

    const randomRootNote = notesDatas[Math.floor(Math.random() * (notesDatas.length))];
    return { randomRootNote, notesDatas };
}