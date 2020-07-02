<script>
    import {Player} from '../Store/Player.js'
    import {Images} from '../Store/Image.js'

    const handleBPM = (evt) => {
        Player.changeBPM(evt.target.value)
    }

    const handleState = () => {
        Player.toggle()
    }

    const handleThreshold = (evt) => {
        Images.setThreshold(evt.target.value)
    }
</script>

<style>
   .container{
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color:#393e46
   }
</style>

<div class="container">
    <input type="range" min="30" max="350" value={$Player.BPM} class="slider" on:click={handleBPM}>
    <button on:click={handleState}>
        {#if $Player.state}
            ||
        {:else}
            >
        {/if}
    </button>
    <input type="range" min="50" max="225" value={$Images.threshold} class="slider" on:click={handleThreshold}>
    {$Images.threshold}
</div>