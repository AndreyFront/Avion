<template>
    <header class="header">
        <div class="container">
            <v-logo />
            <nav class="header__nav">
                <ul class="header__nav-list list-reset">
                    <li class="header__nav-li">
                        <nuxt-link to="" class="header__nav-link">About us</nuxt-link>
                    </li>
                    <li class="header__nav-li">
                        <nuxt-link to="" class="header__nav-link">Plant pots</nuxt-link>
                    </li>
                    <li class="header__nav-li">
                        <nuxt-link to="" class="header__nav-link">Ceramics</nuxt-link>
                    </li>
                    <li class="header__nav-li">
                        <nuxt-link to="" class="header__nav-link">Tables</nuxt-link>
                    </li>
                    <li class="header__nav-li">
                        <nuxt-link to="" class="header__nav-link">Chairs</nuxt-link>
                    </li>
                    <li class="header__nav-li">
                        <nuxt-link to="" class="header__nav-link">Crockery</nuxt-link>
                    </li>
                    <li class="header__nav-li">
                        <nuxt-link to="" class="header__nav-link">Tableware</nuxt-link>
                    </li>
                    <li class="header__nav-li">
                        <nuxt-link to="" class="header__nav-link">Cutlery</nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="header__block-links">
                <nuxt-link to="" class="header__link">
                    <IconSearch class="header__link-icon" />
                </nuxt-link>
                <nuxt-link to="" class="header__link">
                    <IconCart class="header__link-icon" />
                    <span v-if="storeCart.getCart.length">{{ storeCart.getCart.length }}</span>
                </nuxt-link>
                <nuxt-link to="" class="header__link">
                    <IconUserAvatar class="header__link-icon" />
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { useCart } from '@/store/modules/cart'

    const storeCart = useCart()
</script>