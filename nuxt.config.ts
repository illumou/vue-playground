// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    routeRules: {
        '*': { ssr: false},
    },
    app: {
        head: {
            charset: 'utf-16',
            title: 'Vue-Playground',
            link: [{
                rel: 'icon',
                type: 'image/png',
                href: '/favicon.ico',
                color: '#FFFFFF'
            }]
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
