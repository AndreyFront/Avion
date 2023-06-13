<template>
    <div class="mailing">
        <img src="@/assets/images/image-3.jpg" class="mailing__bg" alt="">
        <div class="container">
            <v-title type-title="h2" modifiers="title--h2" class="mailing__title">{{ data.title }}</v-title>
            <span class="mailing__subtitle">{{ data.subtitle }}</span>
            <ul class="mailing__list-advantages list-reset">
                <li 
                    v-for="advantage in data.advantages"
                    :key="advantage.id"
                    class="mailing__li-advantages"
                >
                    <IconCheckmarkFilled class="mailing__icon-advantages" />
                    <span class="mailing__name-advantages">{{ advantage.name }}</span>
                </li>
            </ul>
            <v-input-mailing @formData="getFormData" />
        </div>
    </div>
</template>

<script setup>
    import { useMailing } from '@/store/modules/mailing'

    const store = useMailing(),
    data = computed(() => {
        return store.getData
    })

    store.GET_Data()

    function getFormData(formData) {
        console.log(formData)
    }
</script>