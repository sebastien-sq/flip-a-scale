import { Scale, RootNote } from "../../../utils/types";
import scalesData from "../../../../public/data/scales.json";

export default function randomRootNote() {
    const rootNote: RootNote[] = scalesData as RootNote[];
    const randomRootNote = rootNote[Math.floor(Math.random() * rootNote.length)];
    return randomRootNote;
}