import { defineStore } from 'pinia'
import useFetchApi from "@/composables/useFetchApi";

export const useAdvantages = defineStore('advantages', {
    state: () => ({
        title: '',
        cards: []
    }),
    actions: {
        async GET_Title() {
            try {
                const { data } = await useFetchApi('/api/advantages')
                this.title = data.value.title
            } catch (event) {
                console.log(event, 'error GET_Title - advantages)')
            }
        },
        async GET_Cards() {
            try {
                const { data } = await useFetchApi('/api/advantages')
                this.cards = data.value.cards
            } catch (event) {
                console.log(event, 'error GET_Cards - advantages)')
            }
        }
    },
    getters: {
        getTitle: (state) => state.title,
        getCards: (state) => state.cards
    }
})