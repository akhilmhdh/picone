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
    })
    
    // $:{
    //     if($Images){
    //         const image = new ImageFormator()
    //         const getImage = (image) => {
    //             image.draw(canvas)
    //             chords = tone.parseChords(image)
    //         }
    //         image.getCornerDetection($Images,canvas,getImage)
            
    //     }
    // }
    
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
