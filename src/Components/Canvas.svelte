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
        if($Images){
            const img = new Image();
            img.src = $Images;
            const widthToHeight = img.width / img.height;
            let newWidth = canvas.width;
            let newHeight = newWidth / widthToHeight;
            if (newHeight > canvas.height) {
                newHeight = canvas.height;
                newWidth = newHeight * wrh;
            }
            ctx.drawImage(img,0,0,newWidth,newHeight)
        }
    }
</script>

<canvas
bind:this={canvas}
width="500px"
height="500px"
/>