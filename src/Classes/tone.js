import * as Tone from "tone";

const keys = ["C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0",
        "C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0",
        "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
        "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
        "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
        "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
        "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
        "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
        "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
        "C8", "C#8", "D8", "D#8", "E8", "F8", "F#8", "G8", "G#8", "A8", "A#8", "B8",
        "C9", "C#9", "D9", "D#9", "E9", "F9", "F#9", "G9"]

const dur = ["1m","2n","2t","4n","4t","8n","8t","16n","16t","32n","32t","64n","64t"]

export default class Music{
    constructor(){
        this.chords = []
        this.synth = null
    }

    async init(){
        this.synth = new Tone.PolySynth(4, Tone.Synth, {
			oscillator : {
				type : 'triangle'
			}
        }).toMaster();
        this.synth.set('detune', -1200);
        await Tone.start();
    }

    parseChords(image){
        this.chords=[]
        const height = image.getHeight()
        const width = image.getWidth()

        for(var x=0; x<width; x++){
            let chord = {}
            let chordLength = 0
            for(var y=height-1; y>=0; y--){
                var red = image.getIntComponent0(x,y);
                if(red !== 255){
                    const value = keys[128-Math.round((128 * y)/ height)]
                    value in chord?chord[value]+=1:chord[value]=1
                    chordLength+=1
                }
            }
            this.chords.push({chordLength,chord})
        }
        
        return this.chords
    }

    async playChord(chord){
        if(!this.synth) {
			await this.init();
        }
        for(const key in chord.chord){
            this.chordLength>4?
            this.synth.triggerAttackRelease([key],dur[Math.floor(chord.chord[key]/chord.chordLength)]):
            this.synth.triggerAttackRelease([key],"4n")
        }
    }
}