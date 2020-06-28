<script>
    import {Images} from '../Store/Image.js'
    import Cropper from 'svelte-easy-crop'
    
    let files
    let crop = { x: 0, y: 0 }
    let zoom = 1
    const loadFile = () => {
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
        // convert image file to base64 string
        Images.set(reader.result)

        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
</script>

<style>
    #output {
        height: 200px;
    }
</style>

{#if files && files[0]}
        <div>
            <Cropper
            image={$Images}
            bind:crop
            bind:zoom
            on:cropcomplete={e => console.log(e.detail)}
            />
        </div>
{/if}

<div>
    <input type="file" bind:files  accept="image/gif, image/jpeg, image/png" on:change={loadFile}/>
</div>