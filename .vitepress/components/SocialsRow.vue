<template>
    <div class="socials-row">
        <a class="group" href="mailto:juna@mse.gg">
            <Mail :size="24" /> 
            <span v-if="!iconsOnly">juna@mse.gg</span>
        </a>
        <a class="group" href="https://twitter.com/junausa">
            <TwitterIcon :size="24"></TwitterIcon>
            <span v-if="!iconsOnly">JunaUSA</span>
        </a>
        <a v-if="showME" class="group" href="https://twitter.com/MeleeEveryday">
            <TwitterIcon :size="24"></TwitterIcon>
            <span v-if="!iconsOnly">MeleeEveryday</span>
        </a>
        <a v-if="showME" class="group" href="https://www.twitch.tv/meleeeveryday">
            <TwitchIcon :size="24"></TwitchIcon>
            <span v-if="!iconsOnly">MeleeEveryday</span>
        </a>
        <a class="group" href="https://www.linkedin.com/in/arjunacapulong/">
            <LinkedinIcon :size="24"></LinkedinIcon>
            <span v-if="!iconsOnly">LinkedIn</span>
        </a>
    </div>
</template>

<script setup lang="ts">
import { LinkedinIcon, Mail, TwitchIcon, TwitterIcon } from 'lucide-vue-next'; // why are these deprecated?

const props = defineProps({
    showME: {
        type: Boolean,
        default: true
    },
    iconsOnly: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="css" scoped>
.socials-row {
    display: flex;
    column-gap: 2.5rem;
    row-gap: .35rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-weight: 700;
}

.group {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    gap: .5rem;
}
</style>