import Vex from "vexflow";
import { Scale } from "@/utils/types";

function   generateScales(datas: Scale) {

// Clear the output div first
const output = document.getElementById('output');
if (output instanceof HTMLElement) {
    output.innerHTML = '';
}

const { Factory, EasyScore, System } = Vex.Flow;

const vf = new Factory({
  renderer: { elementId: 'output', width: 500, height: 200 },
});

const score = vf.EasyScore();
const system = vf.System();
// Generate the notes of the scale
console.log(datas);
const notes = datas.notes.map((note, index) => 
  index === 0 ? `${note}3/8` : `${note}4`
).join(',');

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

export default generateScales;