<script>
    import {Images} from '../Store/Image.js'

    let files
    
    const loadFile = () => {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
        // convert image file to base64 string
            Images.setUpload(reader.result)
        }, false);

        if (files[0]) {
            reader.readAsDataURL(files[0]);
        }
    }
</script>

<style>
   .container{
        height: 48px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color:#393e46
   }
</style>

<div class="container">
    <input type="file" bind:files  accept="image/gif, image/jpeg, image/png" on:change={loadFile}/>
</div>