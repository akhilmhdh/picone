<script>
    import {Images} from '../Store/Image.js'
    import ImageFormator from "../Classes/marvin.js"
    
    import { onMount } from 'svelte';
    let canvas;
    let ctx;
    onMount(()=>{
        ctx = canvas.getContext('2d');
    })
    $:{
        if($Images){
            const image = new ImageFormator()
            const virtualImage = (image) => {
                console.log("done")
            }
            image.getCornerDetection($Images,canvas,virtualImage)
        }
    }
</script>

<canvas
bind:this={canvas}
width="1000px"
height="1000px"
/>
