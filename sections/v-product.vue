<template>
    <div class="product">
        <div class="container">
            <div class="product__block-image">
                <img :src="data?.image?.src" class="product__image" :alt="data?.image?.alt">
            </div>
            <div class="product__block-info">
                <div class="product__block-head">
                    <v-title type-title="h1" modifiers="title--h1" class="product__title">{{ data?.name }}</v-title>
                    <span class="product__price">£{{ data?.price }}</span>
                </div>
                <div class="product__block-desc">
                    <span class="product__info-title">Product description</span>
                    <span class="product__desc">{{ data?.description }}</span>
                </div>
                <div class="product__block-dimensions">
                    <span class="product__info-title">Dimensions</span>
                    <ul class="product__list-dimensions list-reset">
                        <li class="product__li-dimensions" v-for="dimension in data?.dimensions" :key="dimension.id">
                            <span class="product__name-dimensions">{{ dimension.name }}</span>
                            <span class="product__size-dimensions">{{ dimension.value }}cm</span>
                        </li>
                    </ul>
                </div>
                <div class="product__block-quantitity">
                    <span class="product__info-title">Quantitity</span>
                    <v-counter @quantity="getQuantity" />
                </div>
                <div class="product__block-btns">
                    <v-button modifier="btn--size--bg btn--theme--primary" name="Add to cart" @clickButton="getDataButton"></v-button>
                    <v-button modifier="btn--size--bg btn--theme--white" name="Save to favorites" @clickButton="getDataButton"></v-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useProduct } from '@/store/modules/product'

    const emit = defineEmits(['productData']),
    store = useProduct(),
    props = defineProps({
        id: {
            type: Number,
            required: true
        }
    }),
    data = computed(() => {
        emit('productData', store.getData[0])
        return store.getData[0]
    })

    store.GET_Data(props.id)

    function getDataButton() {}

    function getQuantity(quantity) {
        // console.log(quantity)
    }
</script>