<template>
    <div class="counter">
        <button type="button" class="counter__btn" @click="remove" :disabled="btnRemove">-</button>
        <input type="number" class="counter__input" :value="inputValue" :min="min" :max="max" :step="step" @change="validInput($event.target.value)">
        <button type="button" class="counter__btn" @click="add" :disabled="btnAdd">+</button>
    </div> 
</template>

<script setup>
    const emit = defineEmits(['quantity']),
    props = defineProps({
        value: {
            type: Number,
            default: 1, 
        },
        min: {
            type: Number,
            default: 1,
        },
        max: {
            type: Number,
            default: 100, 
        },
        step: {
            type: Number,
            default: 1, 
        },
    }),
    btnRemove = ref(false),
    btnAdd = ref(false),
    validInput = (value) => {
        const getInputValue = +value
        inputValue.value = +value
        switch (true) {
            case getInputValue <= props.min:
                inputValue.value = props.min
                btnRemove.value = true
                break
            case getInputValue >= props.max:
                inputValue.value = props.max
                btnAdd.value = true
                break
            default:
                btnRemove.value = false
                btnAdd.value = false
        }

        emit('quantity', inputValue.value)
    },
    remove = () => {
        inputValue.value--
        validInput(inputValue.value)
    },
    add = () => {
        inputValue.value++
        validInput(inputValue.value)
    }

    let inputValue = ref(props.value)
</script>