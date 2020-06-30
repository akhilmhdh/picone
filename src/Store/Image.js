import { writable } from 'svelte/store';

const CreateImageStore = () =>{
    const { subscribe, set, update } = writable({upload:null,musical:null,threshold:180});
    return {
        subscribe,
        setThreshold: (threshold) => update(state => ({...state,threshold})),
        setUpload: (image) => update(state => ({...state,upload:image})),
        setMusical: (image) => update(state => ({...state,musical:image}))
    }
}

export const Images = CreateImageStore()