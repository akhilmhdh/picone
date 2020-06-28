<script>
    import Cropper from 'svelte-easy-crop'
    import {Images} from '../Store/Image.js'

    let crop = { x: 0, y: 0 };
    let zoom = 1;
    let croppedDetails = null;

    const cropImage = ({x,y,height,width}) =>{
        const uploadedImage = new MarvinImage()
        uploadedImage.load($Images.upload,function(){
            const croppedImage = uploadedImage.clone()
            Marvin.crop(uploadedImage,croppedImage,x,y,width,height);
            Images.setMusical(croppedImage)
        })
    }

</script>

<style>
    .container{
        flex: 1;
        position: relative;
    }
    button{
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: 1rem;
        z-index: 1000;
        cursor: pointer;
        padding: 0.5rem 1rem;
        font-family: "harabara";
        letter-spacing: 2px;
        background-color:#393e46;
        color:#32e0c4;
        border:none;
        border-radius: 5px;
    }
</style>

<div class="container">
    {#if $Images.upload}
        <Cropper
        image={$Images.upload}
        bind:crop
        bind:zoom
        on:cropcomplete={e => {croppedDetails = e.detail.pixels}}
        />
    {/if}
    <button on:click={()=>{cropImage(croppedDetails)}}>
        Crop
    </button>
</div>
