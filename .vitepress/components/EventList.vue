<template>
    <div class="event-list">
        <a v-for="event in eventsList" class="button event" :href="event.link">
            <img :src="event.image" v-if="event.image" />
            <div>{{ event.name }}</div>
        </a>
        
        <div v-if="events.length > MAX_EVENTS_TO_SHOW" class="button" @click="showingAll = !showingAll">
            <template v-if="showingAll">
                <ArrowUp /> Show Less
            </template>
            <template v-else>
                <ArrowDown /> Show All
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown, ArrowUp } from 'lucide-vue-next';
import { computed, PropType, ref } from 'vue';

const MAX_EVENTS_TO_SHOW = 5;

const props = defineProps({
    events: {
        type: Array as PropType<Array<{
            name: string,
            link: string,
            image?: string
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
    display: flex;
    align-items: center;
    gap: 2rem;
    filter: drop-shadow(0 0 0px black);
}

.button:hover {
    background-color: white;
    color: black;
}

.button:hover img {
    filter: drop-shadow(0 0 12px black);
}

.event {
    font-size: 1.65em;
    min-height: 7.25rem;
}

.event img {
    height: 5rem;
    width: auto;
    max-width: 15rem;
    object-fit: contain;
}

@media only screen and (max-width: 600px) {
    .button {
        gap: 1.5rem;
        padding: 1rem 1rem;
    }

    .event img {
        max-width: 6rem;
    }
}
</style>