<!-- https://ismail9k.github.io/vue3-carousel/configs.html -->
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true,
    default: () => [
      "https://static.bigbox.com.ar/uploads/activity/cb4e3bab-fb99-4b22-9e19-188bd8b46dc7.jpg",
      "https://static.bigbox.com.ar/uploads/activity/d3e6d6d6-b4e8-4390-96a6-ab7a4f64222a.jpg",
      "https://static.bigbox.com.ar/uploads/activity/b6984629-50ed-4177-a0a2-adf686c47714.jpg",
      "https://static.bigbox.com.ar/uploads/activity/db75022e-bc13-48e9-acff-c76643c2b400.JPG"
    ],
  },
  autoplay: {
    type: Number,
    default: 3000,
  },
  itemsToShow: {
    type: Number,
    default: 1,
  },
})


</script>
<template>
  <carousel :items-to-show="props.itemsToShow" :autoplay="props.autoplay" :pause-autoplay-on-hover="true">
    <slide v-for="(image, index) in props.images" :key="index">
      <img :src="image" :alt="`carousel at position: ${index + 1}`" class="rounded-md" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
<style>
button.carousel__prev {
  color: white;
  text-shadow: inset 0 0 0 2px gray;
}

button.carousel__next {
  color: white;
  text-shadow: inset 0 0 0 2px gray;
}

button.carousel__pagination-button::after,
button.carousel__pagination-button::after:hover {
  @apply bg-primary transition-all duration-150 ease-in-out
}

button.carousel__pagination-button--active::after,
button.carousel__pagination-button--active::after:hover {
  @apply bg-primary transition-all duration-150 ease-in-out
}

button.carousel__pagination-button::after {
  display: block;
  content: '';
  @apply bg-gray-200 rounded-full h-2 w-2
}

.carousel__pagination {
  @apply absolute bottom-4 left-0 right-0
}
</style>