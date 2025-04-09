<template>
    <div>
        <div class="viewer">
            <img :src="props.images[imgIndex].url" :alt="props.images[imgIndex].alt ?? ''" />
            <button @click="prevImage" class="prev">
                <ArrowLeftCircle :size="48" />
            </button>
            <button @click="nextImage" class="next">
                <ArrowRightCircle :size="48" />
            </button>
        </div>
        <div class="page-count">
            <div v-for="(image, i) in images" class="dot" :class="{ active: i === imgIndex }" :key="i"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle } from 'lucide-vue-next';
import { PropType, ref } from 'vue';

const props = defineProps({
    images: {
        type: Array as PropType<Array<{ url: string, alt?: string }>>,
        required: true
    }
});

const imgIndex = ref(0);

function nextImage() {
    imgIndex.value = (imgIndex.value + 1) % props.images.length;
}

function prevImage() {
    imgIndex.value = (imgIndex.value - 1 + props.images.length) % props.images.length;
}
</script>

<style lang="css" scoped>

.viewer {
    aspect-ratio: 16 / 9;
    background-color: rgba(255, 255, 255, .05);
    border-radius: 8px;
    position: relative;
}

.viewer img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.viewer button {
    position: absolute;
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, .5));
    bottom: 50%;
    transform: translateY(50%);
    width: fit-content;
    height: fit-content;
}

.viewer button>* {
    place-self: center;
}

.viewer .prev {
    left: .5rem;
}

.viewer .next {
    right: .5rem;
}

.page-count {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    margin-top: .5rem;
}

.page-count .dot {
    width: 1rem;
    height: 1rem;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 50%;
    transition: background-color 0.15s;
}

.page-count .dot.active {
    background-color: white;
}
</style>