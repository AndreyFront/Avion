<template>
    <div class="products">
        <v-product-card
            v-for="card in cards"
            :id="card.id"
            :name="card.name"
            :price="card.price"
            :image="card.image"
        />
    </div>
</template>

<script setup>
    const props = defineProps({
        cards: {
            type: Array,
            require: true
        }
    })
</script>