<template>
    <header id="header-wrapper" :class="{ 'large': frontmatter.headerIsLarge }">
        <img class="bg-img" v-if="frontmatter.headerImg" :src="withBase(frontmatter.headerImg)" />
        <div class="text-container">
            <img class="pfp" v-if="frontmatter.headerPfp" :src="withBase(frontmatter.headerPfp)" />
            <div class="column">
                <img v-if="frontmatter.logo" :src="withBase(frontmatter.logo)" />
                <h1 v-if="frontmatter.header1" :class="{ 'sr-only': frontmatter.logo }">{{ frontmatter.header1 }}</h1>

                <hr v-if="frontmatter.header1 && (frontmatter.header2 || frontmatter.header3)" />
                <h2 v-if="frontmatter.header2">{{ frontmatter.header2 }}</h2>
                <div v-if="frontmatter.header3">{{ frontmatter.header3 }}</div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'

const { site, frontmatter } = useData();
</script>

<style lang="css" scoped>
#header-wrapper {
    width: 100%;
    height: 50vh;
    min-height: fit-content;
    max-height: 50rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25em;
    margin-bottom: 2rem;
    padding: 2rem 0;
    box-sizing: border-box;
}

#header-wrapper.large {
    height: 70vh;
}

#header-wrapper .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
    z-index: -1;
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 35%);
}

#header-wrapper .text-container {
    background-color: rgba(0, 0, 0, .5);
    backdrop-filter: blur(8px);
    padding: 1.5rem 2.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 3rem;
    border-radius: 8px;
    margin: 0 1rem;
    max-width: 45rem;
}

#header-wrapper .text-container .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .25rem;
}

#header-wrapper .text-container img {
    max-height: 12rem;
    max-width: 100%;
    width: auto;
    margin-bottom: 1rem;
}

hr {
    width: 100%;
}

h1,
h2,
h3 {
    margin: 0;
}

h2 {
    font-size: 1.8rem;
    line-height: 1.2;
}

@media only screen and (max-width: 600px) {
    #header-wrapper .text-container {
        backdrop-filter: none;
        background-color: rgba(0, 0, 0, .6);
        flex-direction: column;
        gap: 0;
    }
}
</style>