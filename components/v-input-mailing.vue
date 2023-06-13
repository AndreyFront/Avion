<template>
    <form class="input-mailing" action="/" autocomplete="off" novalidate @submit.prevent="submitForm">
        <input 
            type="email" 
            class="input-mailing__input" 
            :class="{ 'input-mailing__input--error': v$.email.$error }"
            placeholder="your@email.com" 
            v-model="formData.email" 
            ref="input"   
        >
        <!-- <span v-for="error of v$.$errors" :key="error.$uid">{{ error.$message }}</span> -->
        <v-button 
            modifier="btn--size--bg btn--theme--primary" 
            class="input-mailing__btn" 
            type="submit" 
            name="Sign up"
            @clickButton="getDataButton"
        ></v-button>
    </form>
</template>

<script setup>
    import { required, email, helpers } from '@vuelidate/validators'
    import { useVuelidate } from '@vuelidate/core'

    const emit = defineEmits(['formData']),
    formData = reactive({
        email: '',
    }),
    input = ref(),
    rules = computed(() => {
        return {
            email: { 
                required: helpers.withMessage('Обязательно поле', required),
                email: helpers.withMessage('Введите верный email', email),
            },
        }
    }),
    v$ = useVuelidate(rules, formData)

    function submitForm() {
        v$.value.$validate()
        if (!v$.value.$error) {
            emit('formData', formData)
        }
    }

    function getDataButton() {}
</script>