<script>
    import {Images} from '../Store/Image.js'
    
    let files
    const loadFile = () => {
        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
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
		<img src="" alt="Image preview..." id="output">
    </div>
{/if}

<div>
    <input type="file" bind:files  accept="image/gif, image/jpeg, image/png" on:change={loadFile}/>
</div>