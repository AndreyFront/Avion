<template>
    <section class="advantages">
        <div class="container">
            <v-title type-title="h2" modifiers="title--h2" class="advantages__title">{{ title }}</v-title>
            <div class="advantages__wrap-cards">
                <v-info-card
                    v-for="card in cards"
                    :key="card.id"
                    :icon="card.icon"
                    :title="card.title"
                    :subtitle="card.subtitle"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useAdvantages } from '@/store/modules/advantages'

    const store = useAdvantages(),
    title = computed(() => {
        return store.getTitle
    }),
    cards = computed(() => {
        return store.getCards
    })

    store.GET_Title()
    store.GET_Cards()
    
</script>