<template>
    <section class="performance">
        <img src="@/assets/images/image-1.jpg" class="performance__bg" alt="">
        <div class="container">
            <div class="performance__block-info">
                <div class="performance__inner-info">
                    <v-title type-title="h2" modifiers="title--h2">Luxury homeware for people who love timeless design quality</v-title>
                    <v-text type-text="span" modifier="large" class="performance__subtitle">Shop the new Spring 2022 collection today</v-text>
                </div>
                <v-button modifier="btn--size--bg btn--theme--secondary" link="/ui" name="View collection" @clickButton="getDataButton"></v-button>
            </div>
        </div>
    </section>
</template>

<script setup>
    const router = useRouter()

    function getDataButton(data) {
        if (data) {
            router.push({ path: data })
        }
    }
</script>