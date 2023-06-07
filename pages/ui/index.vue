<template>
    <main class="page main-page">
        <div class="container">
            <div class="ui">
                <div class="ui__wrap-icons">
                    <IconLogo />
                    <IconCart />
                    <IconClose />
                    <IconDelivery />
                    <IconFacebook />
                    <IconInstagram />
                    <IconLinkedin />
                    <IconPinterest />
                    <IconSkype />
                    <IconTwitter />
                    <IconSearch />
                    <IconUserAvatar />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @import '../../assets/styles/vars';

    .ui {
        &__wrap-icons {
            padding: 100px 40px;
            background-color: $gray;
        }
    }
</style>