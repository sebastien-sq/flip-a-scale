export default function randomRootNote() {
    const rootNote = [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
    ];
    const randomRootNote = rootNote[Math.floor(Math.random() * rootNote.length)];
    return randomRootNote;
}