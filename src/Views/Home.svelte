<script>
    import Header from "../Components/Header.svelte"
    import BaseToolbar from '../Components/BaseToolbar.svelte'
    import Canvas from '../Components/Canvas.svelte'
    import Cropper from "../Components/Cropper.svelte"
</script>

<style>
    .container{
        display: flex;
        flex-direction: column;
    }
</style>

<Header/>
<div>
    <Canvas/>
    <Cropper/>
</div>
<BaseToolbar/>