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
    let prevState;
    const tone = new Tone()

    onMount(()=>{
        tone.init()
        ctx = canvas.getContext('2d'); 
        ctx.fillStyle = 'white';
        canvas.style.width ='100%';
        canvas.style.height='100%';
        // ...then set the internal size to match
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    })

    const image2tone = (image2tone) =>{
        if(image2tone){
            const image = new ImageFormator(image2tone)
            const getImage = (image) => {
                chords = tone.parseChords(image)
                prevState = ctx.getImageData(0,0,canvas.width,canvas.height);
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            image.getCornerDetection(canvas,getImage,$Images.threshold)
        }
    }
    
    const handlePlayer = (state) =>{
        if(state){
            BPM = setInterval(()=>{
                    ctx.putImageData(prevState,0,0);
                    ctx.beginPath();
                    ctx.moveTo(cursor,0);
                    ctx.lineTo(cursor,canvas.height);
                    ctx.strokeStyle = "blue";
                    ctx.stroke();

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

    $: image2tone($Images.musical)
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
