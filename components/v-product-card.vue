<template>
    <nuxt-link class="product-card" :to="`/product/${id}`">
        <div class="product-card__block-image">
            <img :src="image.src" class="product-card__image" :alt="image.alt">
        </div>
        <div class="product-card__block-info">
            <span class="product-card__name">{{ name }}</span>
            <span class="product-card__price">£{{ price }}</span>
        </div>
    </nuxt-link>
</template>

<script setup>
    const props = defineProps({
        price: Number,
        image: Object,
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    })
</script>