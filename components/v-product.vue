<template>
    <nuxt-link class="product" :to="link">
        <div class="product__block-image">
            <img :src="image.src" class="product__image" :alt="image.alt">
        </div>
        <div class="product__block-info">
            <span class="product__name">{{ name }}</span>
            <span class="product__price">£{{ price }}</span>
        </div>
    </nuxt-link>
</template>

<script setup>
    const props = defineProps({
        price: Number,
        image: Object,
        link: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        }
    })
</script>