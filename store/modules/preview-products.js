import { defineStore } from 'pinia'
import useFetchApi from "@/composables/useFetchApi";

export const usePreviewProducts = defineStore('preview-products', {
    state: () => ({
        cards: [],
        info: {}
    }),
    actions: {
        async GET_Cards() {
            try {
                const { data } = await useFetchApi('/api/preview-products')
                this.cards = data.value.cards
            } catch (event) {
                console.log(event, 'error GET_Cards - preview-products)')
            }
        },
        async GET_Info() {
            try {
                const { data } = await useFetchApi('/api/preview-products')
                this.info.title = data.value.title
                this.info.btn = data.value.btn
            } catch (event) {
                console.log(event, 'error GET_Info - preview-products)')
            }
        },
    },
    getters: {
        getCards: (state) => state.cards,
        getInfo: (state) => state.info
    }
})