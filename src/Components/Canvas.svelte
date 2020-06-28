<script>
    import {Images} from '../Store/Image.js'
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
                image.draw(canvas)
                console.log(image.getWidth(),image.getHeight())
                chords = tone.parseChords(image)
            }
            image.getCornerDetection(canvas,getImage)
        }
    }
    
    const handleClick = () =>{
        BPM = setInterval(()=>{
                    tone.playChord(chords[cursor])
                    cursor >= chords.length? clearInterval(BPM) :cursor+=1
                },200)
    }
</script>

<style>
    .container{
        flex: 1;
    }
</style>

<div class="container">
    <canvas
    bind:this={canvas}
    />
</div>


<!-- <button on:click|once={handleClick}>Starte</button> -->
