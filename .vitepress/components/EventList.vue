<template>
    <div class="event-list">
        <div class="event-grid">
            <a v-for="event in eventsList" class="button event" :href="withBase(event.link)">
                <div v-if="event.banner" class="banner"
                    :style="`background-image: url(\'${withBase(event.banner)}\');`" />
                <img class="logo" :src="withBase(event.logo)" v-if="event.logo" />
                <div :class="{ 'sr-only': event.logo }">{{ event.name }}</div>
            </a>
        </div>

        <div v-if="events.length > MAX_EVENTS_TO_SHOW" class="button show-more" @click="showingAll = !showingAll">
            <template v-if="showingAll">
                <ArrowUp :size="32" /> Show Less
            </template>
            <template v-else>
                <ArrowDown :size="32" /> Show All
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown, ArrowUp } from 'lucide-vue-next';
import { computed, PropType, ref } from 'vue';
import { withBase } from 'vitepress';

const MAX_EVENTS_TO_SHOW = 6;

const props = defineProps({
    events: {
        type: Array as PropType<Array<{
            name: string,
            link: string,
            logo?: string,
            banner?: string
        }>>,
        required: true
    }
});

const showingAll = ref<boolean>(false);

const eventsList = computed(() => {
    return showingAll.value ? props.events : props.events.slice(0, MAX_EVENTS_TO_SHOW);
});
</script>

<style lang="css" scoped>
.event-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1;
}

.event-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.button {
    background-color: rgba(255, 255, 255, .05);
    padding: 1rem 2rem;
    border: 1px solid white;
    border-radius: 8px;
    transition: background-color 0.15s, color 0.15s, filter 0.15s;
    cursor: pointer;
    font-size: 1.4em;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    user-select: none;
    text-decoration: none;
    filter: drop-shadow(0 0 0px black);
    position: relative;
}

.button:hover {
    background-color: rgba(255, 255, 255, .3);
}

.event {
    font-size: 1.65em;
    min-height: 7.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 13rem;
    overflow: hidden;
}

.event .logo {
    height: 5rem;
    width: auto;
    max-width: 15rem;
    object-fit: contain;
}

.event .banner {
    height: 16rem;
    width: 100%;
    position: absolute;
    top: 0;
    mask: linear-gradient(to top, transparent 0%, black 8rem);
    background-size: cover;
    background-position: center;
    z-index: -1;
}

.show-more {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

@media only screen and (max-width: 600px) {
    .event-grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .button {
        gap: 1.5rem;
        padding: 1rem 1rem;
    }

    .event {
        padding-top: 13rem;
    }

    .event img {
        max-width: 6rem;
    }
}
</style>