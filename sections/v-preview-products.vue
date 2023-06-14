<template>
    <section class="preview-products">
        <div class="container">
            <v-title type-title="h2" modifiers="title--h2" class="preview-products__title">{{ title }}</v-title>
            <v-products :cards="cards" />
            <v-button 
                class="preview-products__btn"
                modifier="btn--size--bg btn--theme--secondary" 
                :link="button.link" 
                :name="button.name" 
                @clickButton="getDataButton"
            >
            </v-button>
        </div>
    </section>
</template>

<script setup>
    import { usePreviewProducts } from '@/store/modules/preview-products'

    const store = usePreviewProducts(),
    props = defineProps({
        title: String,
        button: Object,
        params: {
            type: Object,
            default: undefined
        }
    }),
    router = useRouter(),
    cards = computed(() => {
        return store.getCards
    }),
    getDataButton = (data) => {
        if (data) {
            router.push({ path: data })
        }
    }

    store.GET_Cards(props.params)

    onUpdated(() => {
        store.GET_Cards(props.params)
    })
</script>