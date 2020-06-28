<script>
    import Cropper from 'svelte-easy-crop'
    import {Images} from '../Store/Image.js'

    let crop = { x: 0, y: 0 };
    let zoom = 1;
</script>

<style>
    .container{
        flex: 1;
        position: relative;
    }
</style>

<div class="container">
    {#if $Images.upload}
        <Cropper
        image={$Images.upload}
        bind:crop
        bind:zoom
        on:cropcomplete={e => console.log(e.detail)}
        />
    {/if}
</div>
