<template>
    <div class="products">
        <v-product
            v-for="card in cards"
            :id="card.id"
            :link="card.link"
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