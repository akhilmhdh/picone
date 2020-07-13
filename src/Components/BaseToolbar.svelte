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

    const handleSelectChange = (val) => {
        Player.changeDirection(val)
    }
</script>

<style>
   .container{
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0.5rem 1rem;
        background-color:#393e46
   }
    input[type=range]{
        -webkit-appearance: none;  /* Override default CSS styles */
        appearance: none;
        height: 4px;
        border-radius: 5px;
        background: #eeeeee;
        outline: none;
        transition: opacity 0.2s;
        padding: 0;
        margin: 0;
    }
    input[type=range]::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #32e0c4;
    cursor: pointer;
    border: none;
  }
  input[type=range]::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #32e0c4;
    cursor: pointer;
    border: none;
  }
  button{
        cursor: pointer;
        width: 2.5rem;
        height: 2.5rem;
        font-family: "harabara";
        font-weight: 900;
        letter-spacing: 2px;
        background-color:#32e0c4;
        color:#393e46;
        border:none;
        border-radius: 50%;
        margin: 0;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    label{
        color:#eeeeee;
        font-family: "harabara";
        letter-spacing: 2px;
        margin-right: 0.5rem;
    }
</style>

<div class="container">
    <div>
        <label for="slider">{$Player.BPM}</label>
        <input type="range" min="30" max="350" value={$Player.BPM} id="slider" on:click={handleBPM}>
    </div>
    <div>
        <button on:click={handleState}>
            {#if $Player.state}
                ||
            {:else}
                >
            {/if}
        </button>
    </div>
    <div>
        <label for="slider">{$Images.threshold}</label>
        <input type="range" min="50" max="225" value={$Images.threshold} id="slider" on:click={handleThreshold}>
    </div>
    <div>
        <select value={$Player.direction} onchange={handleSelectChange}>
            <option value="To Top ↑">To Top ↑</option>
            <option value="To Right →" default>To Right →</option>
            <option value="To Left ←">To Left ←</option>
            <option value="To Bottom ↓">To Bottom ↓</option>
        </select>
    </div>
</div>