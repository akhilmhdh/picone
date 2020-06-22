<script>
    import {Images} from '../Store/Image.js' 
    import { onMount } from 'svelte';
    let img;
    let canvas;
	let ctx;
    onMount(()=>{
        ctx = canvas.getContext('2d');
    })
    $:{
        if(ctx && Image){
            const img = new Image();
            img.src=$Images;
            ctx.drawImage(img);
        }
    }
</script>

<canvas
bind:this={canvas}
width="200px"
height="200px"
/>