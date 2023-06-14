import { defineStore } from 'pinia'
import useFetchApi from "@/composables/useFetchApi";

export const useCart = defineStore('cart', {
    state: () => ({
        cart: []
    }),
    actions: {
        GET_Products(product, quantitity) {
            const cartIndex = this.cart.findIndex(el => el.id === product.id)
            if (cartIndex === -1) {
                this.cart.push({...product, quantitity})
            }
        }
    },
    getters: {
        getCart: (state) => state.cart,
    }
})