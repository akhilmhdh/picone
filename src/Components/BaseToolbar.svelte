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
   
</style>

<div>
    <input type="file" bind:files  accept="image/gif, image/jpeg, image/png" on:change={loadFile}/>
</div>