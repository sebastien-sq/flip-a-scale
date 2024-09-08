import { Scale } from "@/utils/types";

    function orderScale(scale : Scale) {
      
      const assignOctaves = (notes: string[], startOctave = 4) => {
        const noteOrder = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];

        let currentOctave = startOctave;
        let lastNoteIndex = -1;
      
        return notes.map(note => {
          const noteIndex = noteOrder.indexOf(note);
          if (noteIndex === -1) {
            console.error("Note non reconnue:", note);
            return `${note}/${currentOctave}`;
          }
      
          // Si la nouvelle note est "avant" la précédente dans l'ordre des notes,
          // cela signifie qu'on est passé à l'octave suivante
          if (noteIndex <= lastNoteIndex) {
            currentOctave++;
          }
      
          lastNoteIndex = noteIndex;
          return `${note}/${currentOctave}`;
        });
      }
      const adjustOctave = (note: string, baseOctave = 4) => {
        const [noteName, octave] = note.split('/');
        let adjustedOctave = parseInt(octave);
      
        // Ajuster l'octave si la note est trop haute ou trop basse
        if (adjustedOctave > baseOctave + 1) {
          adjustedOctave = baseOctave + 1;
        } else if (adjustedOctave < baseOctave - 1) {
          adjustedOctave = baseOctave - 1;
        }
      
        return `${noteName}${adjustedOctave}`;
      }
     
      const notesWithOctaves = assignOctaves(scale.notes);      
      const adjustedNotes = notesWithOctaves.map(note => adjustOctave(note));
      return adjustedNotes;
      }
export default orderScale;