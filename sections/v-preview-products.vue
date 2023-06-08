<template>
    <section class="preview-products">
        <div class="container">
            <v-title type-title="h2" modifiers="title--h2" class="advantages__title">{{ info.title }}</v-title>
            <v-products :cards="cards" />

        </div>
    </section>
</template>

<script setup>
    import { usePreviewProducts } from '@/store/modules/preview-products'

    const store = usePreviewProducts(),
    cards = computed(() => {
        return store.getCards
    }),
    info = computed(() => {
        return store.getInfo
    })

    store.GET_Cards()
    store.GET_Info()
</script>