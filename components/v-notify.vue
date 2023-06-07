<template>
    <div class="notify" :class="{ 'active': active }"> 
        <button class="notify__btn-close" @click="active = false">
            <IconClose class="notify__btn-close-icon"/>
        </button>
        <slot></slot>
    </div>
</template>

<script setup>
    const emit = defineEmits(['isActive']),
    active = ref(false)

    // setTimeout(() => {
    //     active.value = true
    // }, 1000)

    watchEffect(() => {
        emit('isActive', active.value)
    })
</script>