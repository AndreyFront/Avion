<template>
    <main class="page product-page">
        <v-product 
            :id="route.params.id"
            @productData="getProductData"
        />
        <v-preview-products 
            title="You might also love these"
            :button="buttonPreviewProducts"
            :params="paramsPreviewProducts"
        />
        <v-advantages />
        <v-mailing />
    </main>
</template>

<script setup>
    const route = useRoute(),
    buttonPreviewProducts = ref({
        link: '/ui',
        name: 'View collection'
    }),
    paramsPreviewProducts = ref({
        category: ''
    }),
    getProductData = (data) => {
        paramsPreviewProducts.value.category = data.category
    }
</script>