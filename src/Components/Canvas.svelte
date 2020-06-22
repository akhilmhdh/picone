<script>
    import { onMount } from 'svelte';
    let canvas;
    onMount(()=>{
        const ctx = canvas.getContext('2d');
    })
</script>

<canvas
bind:this={canvas}
width="200px"
height="200px"
/>