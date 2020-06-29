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
        width: 100%;
        height: 100%;
    }
    .main {
        display: flex;
        flex: 1;
        position: relative;
        align-items: center;
        justify-content: center;
    }
</style>

<main class="container">
    <Header/>
    <div class="main">
        <Canvas/>
        <Cropper/>
    </div>
    <BaseToolbar/>
</main>