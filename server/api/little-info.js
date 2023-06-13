export default defineEventHandler((event) => {
    return {
        title: 'It started with a small idea',
        desc: 'A global brand with local beginnings, our story begain in a small studio in South London in early 2014',
        button: {
            name: 'View collection',
            link: '/ui'
        },
        image: {
            src: '/_nuxt/assets/images/image-2.jpg',
            alt: 'It started with a small idea'
        }
    }
})