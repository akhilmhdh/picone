import { writable } from 'svelte/store';

const CreatePlayerStore = () =>{
    const { subscribe, set, update } = writable({state:false,BPM:80});
    return {
        subscribe,
        play:() => update(config => ({...config,state:true})),
        stop:() => update(config => ({...config,state:false})),
        toggle:() => update(config => ({...config,state:!config.state})),
        changeBPM:(val) => update(config => ({...config,BPM:val})),
    }
}

export const Player = CreatePlayerStore()