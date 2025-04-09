<template>
    <nav id="top-nav">
        <a :href="withBase('/')" class="nav-link">
            <div>{{ site.title }}</div>
        </a>
        <template v-if="page.title">
            <div class="divider hide-mobile"></div>
            <div class="hide-mobile">{{ page.title }}</div>
        </template>
    </nav>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'

const { site, page, frontmatter } = useData();
</script>

<style lang="css" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    line-height: 1;
}

#top-nav {
    height: 4rem;
    background-color: rgba(0, 0, 0, .65);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    white-space: nowrap;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.4rem;
}

#top-nav a {
    color: white;
    text-decoration: none;
}

#top-nav a:hover {
    text-decoration: underline;
}

#top-nav .divider {
    width: 2px;
    min-width: 2px;
    height: 1.4rem;
    background-color: white;
    transform: rotate(15deg);
}


</style>