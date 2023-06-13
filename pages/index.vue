<template>
    <main class="page main-page">
        <v-performance />
        <v-advantages />
        <v-preview-products 
            :button="previewProductsButton"
        />
        <v-little-info />
        <v-mailing />
    </main>
</template>

<script setup>
    const previewProductsButton = {
        link: '/ui',
        name: 'View collection'
    }
</script>