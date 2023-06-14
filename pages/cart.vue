<template>
   <main class="page cart-page">
        <div class="container">
            <div class="cart-page__wrap-content">
                <v-title type-title="h1" modifiers="title--h1">Your shopping cart</v-title>
                <div class="cart-page__table">
                    <ul class="cart-page__list-names list-reset">
                        <li class="cart-page__li-names">Product</li>
                        <li class="cart-page__li-names">Quantity</li>
                        <li class="cart-page__li-names">Total</li>
                    </ul>
                    <div class="cart-page__table-products">
                        <v-product-card-second />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup></script>