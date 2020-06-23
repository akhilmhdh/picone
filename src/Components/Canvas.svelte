<script>
    import {Images} from '../Store/Image.js' 
    import { onMount } from 'svelte';
    let canvas;
    let ctx;
    onMount(()=>{
        ctx = canvas.getContext('2d');
    })
    $:{
        if($Images){
            const image = new MarvinImage();
            image.load($Images, imageLoaded);
             function imageLoaded(){
                const imageScaled = new MarvinImage();

                var imageOut = new MarvinImage(image.getWidth(), image.getHeight());
                const scale = Math.min(canvas.width / image.getWidth(), canvas.height / image.getHeight())
                const x =  (canvas.width / 2) - (image.getWidth() / 2) * scale;
                const y = (canvas.height / 2) - (image.getHeight() / 2) * scale;
  
                // Edge Detection (Prewitt approach)
                Marvin.prewitt(image, imageOut);
                // Invert color
                Marvin.invertColors(imageOut, imageOut);
                // Threshold
                Marvin.thresholding(imageOut, imageOut, 220);
                Marvin.scale(imageOut,imageScaled,image.getWidth() * scale, image.getHeight() * scale)

                imageScaled.draw(canvas,x,y); 
            }
        }
    }
</script>

<canvas
bind:this={canvas}
width="500px"
height="500px"
/>
