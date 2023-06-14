<template>
    <div class="product-card-second">
        <div class="product-card-second__wrap-info">
            <nuxt-link to="/" class="product-card-second__block-image">
                <img src="@/assets/images/products/product-4.jpg" class="product-card-second__image" alt="">
            </nuxt-link>
            <div class="product-card-second__block-info">
                <span class="product-card-second__name">Graystone vase</span>
                <span class="product-card-second__desc">A timeless ceramic vase with a tri color grey glaze.</span>
            </div>
        </div>
        <v-counter @quantity="getQuantity" />
        <span class="product-card-second__price">£85</span>
    </div>
</template>

<script setup>

    const getQuantity = (value) => {
        // console.log(value)
    }
</script>