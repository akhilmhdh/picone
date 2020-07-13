import { writable } from 'svelte/store';

const CreatePlayerStore = () =>{
    const { subscribe, set, update } = writable({state:false,BPM:180,direction:'To Right ->'});
    return {
        subscribe,
        play: () => update(config => ({...config,state:true})),
        stop: () => update(config => ({...config,state:false})),
        toggle: () => update(config => ({...config,state:!config.state})),
        changeBPM: (val) => update(config => ({...config,BPM:val})),
        changeDirection: (direction) => update(config => ({...config,direction})),
    }
}

export const Player = CreatePlayerStore()