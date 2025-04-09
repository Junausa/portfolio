import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Juna",
    description: "Event Producer | Los Angeles, CA",
    base: "/",
    head: [
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
        ],
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
        ],
        [
            'link',
        { rel: 'icon', href: '/favicon.png' }
        ]
    ]
})
