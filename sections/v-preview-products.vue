<template>
    <section class="preview-products">
        <div class="container">
            <v-title type-title="h2" modifiers="title--h2" class="preview-products__title">{{ info.title }}</v-title>
            <v-products :cards="cards" />
            <v-button 
                class="preview-products__btn"
                modifier="btn--size--bg btn--theme--secondary" 
                :link="info.btn.link" 
                :name="info.btn.name" 
                @clickButton="getDataButton"
            >
            </v-button>
        </div>
    </section>
</template>

<script setup>
    import { usePreviewProducts } from '@/store/modules/preview-products'

    const store = usePreviewProducts(),
    router = useRouter(),
    cards = computed(() => {
        return store.getCards
    }),
    info = computed(() => {
        return store.getInfo
    }),
    getDataButton = (data) => {
        if (data) {
            router.push({ path: data })
        }
    }

    store.GET_Cards()
    store.GET_Info()
</script>