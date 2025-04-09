<template>
    <Nav v-if="page.filePath !== 'index.md'" />
    <Header v-if="frontmatter.header" />
    <div id="content">
        <Content />
    </div>
    <footer>
        <div class="footer-tag">
            Producing your winning moments since 2016
        </div>
        <SocialsRow style="font-weight: 400; font-size: .9em;" />
    </footer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import Header from "../components/Header.vue";
import Nav from '../components/Nav.vue';
import SocialsRow from '../components/SocialsRow.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, page, frontmatter } = useData();
</script>