export default defineEventHandler((event) => {
    return {
        title: 'Join the club and get the benefits',
        subtitle: 'Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more',
        advantages: [
            {
                id: 1,
                name: 'Exclusive offers'
            },
            {
                id: 2,
                name: 'Free events'
            },
            {
                id: 3,
                name: 'Large discounts'
            },
        ],
        background: {
            src: '/_nuxt/assets/images/image-3.jpg',
            alt: 'Join the club and get the benefits'
        }
    }
})