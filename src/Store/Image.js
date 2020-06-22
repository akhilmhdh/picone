import { writable } from 'svelte/store';

const CreateImageStore = () =>{
    const { subscribe, set, update } = writable();
    return {
        subscribe,
        set:(image) => set(image)
    }
}

export const Images = CreateImageStore()