import { defineStore } from 'pinia'
import useFetchApi from "@/composables/useFetchApi";

export const useMailing = defineStore('mailing', {
    state: () => ({
        data: {}
    }),
    actions: {
        async GET_Data() {
            try {
                const { data } = await useFetchApi('/api/mailing')
                this.data = data.value
            } catch (event) {
                console.log(event, 'error GET_Title - mailing)')
            }
        }
    },
    getters: {
        getData: (state) => state.data
    }
})