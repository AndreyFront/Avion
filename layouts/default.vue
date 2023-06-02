<template>
    <div class="wrapper-page">
        <Notify v-if="needNotify" @isActive="methodNotify" ref="notify">
            <IconDelivery class="notify__icon" />
            <span class="notify__text">Free delivery on all orders over £50 with code easter checkout</span>
        </Notify>
        <Header ref="header" />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
    const needNotify = ref(true),
    header = ref(),
    notify = ref()

    // function methodNotify(isActive) {
    //     if (isActive) {
    //         header.value.$el.style.transform = `translateY(${notify.value.$el.offsetHeight}px)`
    //     } else {
    //         header.value.$el.style.transform = `translateY(0px)`
    //     }
    // }

    onMounted(() => {

    })
</script>