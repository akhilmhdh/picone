<script>
    import Cropper from 'svelte-easy-crop'
    import {Images} from '../Store/Image.js'

    let crop = { x: 0, y: 0 };
    let zoom = 1;
</script>

{#if $Images.upload}
        <div>
            <Cropper
            image={$Images.upload}
            bind:crop
            bind:zoom
            on:cropcomplete={e => console.log(e.detail)}
            />
        </div>
{/if}