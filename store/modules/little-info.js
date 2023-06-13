import { defineStore } from 'pinia'
import useFetchApi from "@/composables/useFetchApi";

export const useLittleInfo = defineStore('little-info', {
    state: () => ({
        data: {}
    }),
    actions: {
        async GET_Data() {
            try {
                const { data } = await useFetchApi('/api/little-info')
                this.data = data.value
            } catch (event) {
                console.log(event, 'error GET_Title - little-info)')
            }
        }
    },
    getters: {
        getData: (state) => state.data
    }
})