<template>
    <section class="little-info">
        <div class="container">
            <div class="little-info__wrap-info">
                <div class="little-info__block-info">
                    <v-title type-title="h2" modifiers="title--h2" class="little-info__title">{{ data?.title }}</v-title>
                    <span class="little-info__desc">{{ data?.desc }}</span>
                </div>
                <v-button modifier="btn--size--bg btn--theme--opaque" :link="data?.button?.link" :name="data?.button?.name" @clickButton="getDataButton"></v-button>
            </div>
            <div class="little-info__wrap-image">
                <img :src="data?.image?.src" class="little-info__image" :alt="data?.image?.alt">
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useLittleInfo } from '@/store/modules/little-info'

    const store = useLittleInfo(),
    data = computed(() => {
        return store.getData
    })

    store.GET_Data()
</script>