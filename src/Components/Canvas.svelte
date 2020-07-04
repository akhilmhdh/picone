<script>
    import {Images} from '../Store/Image.js'
    import {Player} from "../Store/Player.js"

    import ImageFormator from "../Classes/marvin.js"
    import Tone from "../Classes/tone.js"

    import { onMount } from 'svelte';

    let canvas;
    let ctx;
    let chords;
    let cursor = 0;
    let BPM;
    const tone = new Tone()

    onMount(()=>{
        tone.init()
        ctx = canvas.getContext('2d'); 
        canvas.style.width ='100%';
        canvas.style.height='100%';
        // ...then set the internal size to match
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    })
    
    $:{
        if($Images.musical){
            const image = new ImageFormator($Images.musical)
            const getImage = (image) => {
                chords = tone.parseChords(image)
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            image.getCornerDetection(canvas,getImage,$Images.threshold)
        }
    }
    
    const handlePlayer = (state) =>{
        if(state){
            BPM = setInterval(()=>{
                    tone.playChord(chords[cursor])
                    if(cursor >= chords.length){ 
                        clearInterval(BPM);
                        Player.stop();
                        cursor = 0;
                    }
                    else{
                        cursor+=1
                    }
                },
                60 * 1000 / $Player.BPM)
        }
        else{
            clearInterval(BPM)
        }
    }

    $: handlePlayer($Player.state)
    
</script>

<style>
    .container{
        width: 75vh;
        height: 75vh;
        max-width: 600px;
        max-height: 600px;
    }
</style>

<div class="container">
    <canvas
    bind:this={canvas}
    />
</div>


<!-- <button on:click|once={handleClick}>Starte</button> -->
