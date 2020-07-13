<script>
    import {Images} from '../Store/Image.js'
    import Cropper from 'cropperjs';

    let crop = { x: 0, y: 0 };
    let zoom = 1;
    let croppedDetails = null;
    let files;
    let visible = true;
    let image;
    let cropper = null

    const cropImage = () => {
        const uploadedImage = new MarvinImage()
        uploadedImage.load($Images.upload, function(){
            const croppedImage = uploadedImage.clone()
            const {x,y,height,width}= cropper.getData([true])
            Marvin.crop(uploadedImage,croppedImage,x,y,width,height);
            Images.setMusical(croppedImage) 
        })
    } 

    const getCropper = (img) => {
        if(img){
            image.onload = () => {
                    cropper = new Cropper(image, {
                    initialAspectRatio: 1 / 1,
                    viewMode:1
                    });
                }
        }
    }

    $: getCropper($Images.upload)

    const loadFile = () => {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            if(cropper){
                cropper.destroy();
            }
            Images.setUpload(reader.result)
        }, false);

        if (files[0]) {
            reader.readAsDataURL(files[0]);
        }
    }

    const handleSideBar = () =>{
        visible = !visible
    }

</script>

<div class="container" class:visible>
        <img id="image" bind:this={image} src={$Images.upload}>
    {#if !$Images.upload}
        <div class="backdrop"/> 
    {/if} 
    <div class="btnContainer">
        {#if visible}
            <div>
                <button on:click={()=>{cropImage()}}>
                    Crop
                </button>
            </div>
            <div>
                <input id="file" type="file" bind:files  accept="image/gif, image/jpeg, image/png" on:change={loadFile}/>
                <label for="file">Choose a file</label>
            </div>
        {/if}
    </div>
    <button class="collapse" on:click={handleSideBar}>
        {#if visible}
            &gt;
        {:else}
            &lt;
        {/if}
    </button>
</div>

<style>
    .container{
        flex: 1;
        position: absolute;
        width: 0;
        opacity: 1;
        height: 100%;
        right: 0;
        top: 0;
        transition: 0.25s;
    }
    .visible{
        width: 50vw;
    }
    @media screen and (max-width:720px) {
        .visible{
            width: 90vw;
        }
    }
    img {
    max-width: 100%;
    display: block; /* This rule is very important, please don't ignore this */
    }
    .btnContainer{
        position: absolute;
        bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .backdrop{
        position: absolute;
        background: rgb(0,0,0,0.4);
        width: 100%;
        height: 100%;
    }
    input{
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        overflow: hidden;
        padding: 0;
        position: absolute !important;
        white-space: nowrap;
        width: 1px; 
    }
    button, input + label{
        z-index: 1000;
        cursor: pointer;
        padding: 0.5rem 1rem;
        font-family: "harabara";
        letter-spacing: 2px;
        background-color:#393e46;
        color:#32e0c4;
        border:none;
        border-radius: 5px;
        margin: 0;
    }
    .collapse{
        position: absolute;
        left:-1rem;
        bottom: 50%;
        font-weight: bold;
        font-family: "harabara";
        font-size: 1.5rem;
    }
</style>

