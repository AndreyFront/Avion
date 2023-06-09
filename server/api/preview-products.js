export default defineEventHandler((event) => {
    return {
        title: '',
        btn: {
            name: 'View collection',
            link: '/ui',
        },
        cards: [
            {
                id: 1,
                link: '#',
                name: 'The Lucy Lamp',
                price: 399,
                image: {
                    src: '/_nuxt/assets/images/products/product-1.jpg',
                    alt: 'The Lucy Lamp'
                }
            },
            {
                id: 2,
                link: '#',
                name: 'The Silky Vase',
                price: 125,
                image: {
                    src: '/_nuxt/assets/images/products/product-2.jpg',
                    alt: 'The Silky Vase'
                }
            },
            {
                id: 3,
                link: '#',
                name: 'Rustic Vase Set',
                price: 155,
                image: {
                    src: '/_nuxt/assets/images/products/product-3.jpg',
                    alt: 'Rustic Vase Set'
                }
            },
            {
                id: 4,
                link: '#',
                name: 'The Dandy chair',
                price: 250,
                image: {
                    src: '/_nuxt/assets/images/products/product-4.jpg',
                    alt: 'The Dandy chair'
                }
            },
        ]
    }
})