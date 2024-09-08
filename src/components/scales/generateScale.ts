import Vex from "vexflow";
import { Scale } from "@/utils/types";
import orderScale from "./orderScale";

function generateScale(scale: Scale) {
// Clear the output div first
const output = document.getElementById('output-scale');
if (output instanceof HTMLElement) {
    output.innerHTML = '';
}

const { Factory, EasyScore, System } = Vex.Flow;

const vf = new Factory({
  renderer: { elementId: 'output-scale', width: 300, height: 200 },
});

const score = vf.EasyScore();
const system = vf.System();

// Generate the notes of the scale
console.log(scale);
const notes = orderScale(scale).join(',')
console.log(notes)
const measureDuration = `${notes.length}/4 |`;

if(output && notes){
system
  .addStave({
    voices: [
      score.voice(score.notes(notes,{time: measureDuration})).setStrict(false)
    ],
  })
  .addClef('treble')

vf.draw();
}
}

export default generateScale;