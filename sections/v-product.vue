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
                        <li class="product__li-dimensions" v-for="dimension in data?.dimensions" :key="dimension?.id">
                            <span class="product__name-dimensions">{{ dimension?.name }}</span>
                            <span class="product__size-dimensions">{{ dimension?.value }}cm</span>
                        </li>
                    </ul>
                </div>
                <div class="product__block-quantitity">
                    <span class="product__info-title">Quantitity</span>
                    <v-counter @quantity="getQuantity" />
                </div>
                <div class="product__block-btns">
                    <v-button modifier="btn--size--bg btn--theme--primary" name="Add to cart" @click="addCart" @clickButton="getDataButton"></v-button>
                    <v-button modifier="btn--size--bg btn--theme--white" name="Save to favorites" @clickButton="getDataButton"></v-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useProduct } from '@/store/modules/product'
    import { useCart } from '@/store/modules/cart'

    const emit = defineEmits(['productData']),
    storeProduct = useProduct(),
    storeCart = useCart(),
    props = defineProps({
        id: {
            type: String,
            required: true
        }
    }),
    data = computed(() => {
        emit('productData', storeProduct.getData[0])
        return storeProduct.getData[0]
    }),
    quantity = ref(1)

    storeProduct.GET_Data(props.id)

    function addCart() {
        storeCart.GET_Products(storeProduct.getData[0], quantity.value)
    }

    function getDataButton() {}

    function getQuantity(valueQuantity) {
        quantity.value = valueQuantity
    }
</script>