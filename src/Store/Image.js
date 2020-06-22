import { writable } from 'svelte/store';

const CreateImageStore = () =>{
    const { subscribe, set, update } = writable(0);
    return {
        subscribe,
        set:(image) => set(image)
    }
}

export const Images = CreateImageStore()