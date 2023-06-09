// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    components: [
        '~/sections',
        '~/components',
        '~/icons',
        '~/ui',
    ],
    runtimeConfig: {
        apiSecret: './api',
        public: {
            apiBase: './api/index'
        }
    },
    css: [
        '@/assets/styles/main.scss'
    ],
    modules: [
        '@pinia/nuxt',
    ],
    pinia: {
        autoImports: [
            'defineStore'
        ]
    },
    build: {
        transpile: ['vee-validate']
    }
})
