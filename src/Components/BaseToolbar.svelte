<script>
    import {Player} from '../Store/Player.js'

    let BPM = 80

    const handleBPM = (evt) => {
        Player.changeBPM(evt.target.value)
    }

    const handleState = () => {
        Player.toggle()
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
    <input type="range" min="30" max="180" value={$Player.BPM} class="slider" on:click={handleBPM}>
    <button on:click={handleState}>
        {#if $Player.state}
            ||
        {:else}
            >
        {/if}
    </button>
    {$Player.BPM}
</div>