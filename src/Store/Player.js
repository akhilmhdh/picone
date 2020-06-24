import { writable } from 'svelte/store';

const CreatePlayerStore = () =>{
    const { subscribe, set, update } = writable({state:false,BPM:80});
    return {
        subscribe,
        play:() => update(config => ({state:true,...config})),
        stop:() => update(config => ({state:false,...config})),
        changeBPM:(val) => update(config => ({BPM:val,...config})),
    }
}

export const Player = CreatePlayerStore()