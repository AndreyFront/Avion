export default defineEventHandler((event) => {
    return {
        title: 'What makes our brand different',
        cards: [
            {
                id: 1,
                icon: 'delivery',
                title: 'Next day as standard',
                subtitle: 'Order before 3pm and get your order the next day as standard'
            },
            {
                id: 2,
                icon: 'checkmark',
                title: 'Made by true artisans',
                subtitle: 'Handmade crafted goods made with real passion and craftmanship'
            },
            {
                id: 3,
                icon: 'card',
                title: 'Unbeatable prices',
                subtitle: 'For our materials and quality you won’t find better prices anywhere'
            },
            {
                id: 4,
                icon: 'sprout',
                title: 'Recycled packaging',
                subtitle: 'We use 100% recycled to ensure our footprint is more manageable'
            }
        ]
    }
})