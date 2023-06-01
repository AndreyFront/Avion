// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        apiSecret: './api',
        public: {
            apiBase: './api/index'
        }
    },
    css: [
        '@/styles/main.scss'
    ],
    modules: [
        '@pinia/nuxt',
    ]
})
