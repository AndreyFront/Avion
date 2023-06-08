<template>
    <div class="info-card">
        <IconDelivery v-if="icon === 'delivery'" class="info-card__icon"/>
        <IconCheckmark v-else-if="icon === 'checkmark'" class="info-card__icon"/>
        <IconCard v-else-if="icon === 'card'" class="info-card__icon"/>
        <IconSprout v-else-if="icon === 'sprout'" class="info-card__icon"/>
        <v-title type-title="h4" modifiers="title--h4">Next day as standard</v-title>
        <v-text type-text="span" modifier="medium">Order before 3pm and get your order the next day as standard</v-text>
    </div>
</template>

<script setup>
    const props = defineProps({
        icon: String,
        title: String,
        subtitle: String
    })    
</script>