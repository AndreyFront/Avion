<template>
    <div class="wrapper-page">
        <v-notify v-if="needNotify" @isActive="toggleNotify" ref="notify">
            <IconDelivery class="notify__icon" />
            <span class="notify__text">Free delivery on all orders over £50 with code easter checkout</span>
        </v-notify>
        <v-header ref="header" />
        <slot />
        <v-footer />
    </div>
</template>

<script setup>
    const router = useRouter(),
    needNotify = ref(true),
    header = ref(),
    notify = ref(),
    toggleNotify = ref((isActive) => {
        if (notify.value && header.value) {
            if (isActive) {
                header.value.$el.style.transform = `translateY(${notify.value.$el.offsetHeight}px)`
            } else {
                header.value.$el.style.transform = `translateY(0px)`
            }
        }
    })

    onMounted(() => {
        const page = document.querySelector('.page')
        page.style.paddingTop = `${header.value.$el.offsetHeight}px`
    })
</script>