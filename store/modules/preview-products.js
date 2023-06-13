import { defineStore } from 'pinia'
import useFetchApi from "@/composables/useFetchApi";

export const usePreviewProducts = defineStore('preview-products', {
    state: () => ({
        cards: [],
    }),
    actions: {
        async GET_Cards(params) {
            try {
                const { data } = await useFetchApi('/api/products')
                if (params) {
                    this.cards = data.value.products.filter((param) => { return param.category === params.category })
                } else {
                    this.cards = data.value.products
                }
            } catch (event) {
                console.log(event, 'error GET_Cards - preview-products)')
            }
        },
    },
    getters: {
        getCards: (state) => state.cards,
    }
})