import { defineStore } from 'pinia'
import useFetchApi from "@/composables/useFetchApi";

export const useProduct = defineStore('product', {
    state: () => ({
        data: {}
    }),
    actions: {
        async GET_Data(payload) {
            try {
                const { data } = await useFetchApi('/api/products')
                this.data = data.value.products.filter((item) => { return item.id === +payload })
            } catch (event) {
                console.log(event, 'error GET_Title - product)')
            }
        }
    },
    getters: {
        getData: (state) => state.data
    }
})