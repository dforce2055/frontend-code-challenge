<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { ActivityWithDetails } from '../../types'
import { isAnImage } from '../../utils';

const props = defineProps({
  activity: {
    type: Object as () => ActivityWithDetails,
    required: true,
  },
})


const image = computed(() => {
  const image = props.activity.activity.image.find((img) => isAnImage(img))
  return image ?? ''
})


const onClickCard = () => {
  console.log('activity', props.activity)
}
</script>
<template>
  <div v-if="props.activity" :key="props.activity.id" class="group text-sm" @click="onClickCard">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 transition-all duration-150 group-hover:opacity-75 hover:cursor-pointer">
      <img :src="image" :alt="props.activity.title" class="h-full w-full object-cover object-center" />
    </div>
    <h3 class="mt-4 font-medium text-gray-900">{{ props.activity.title }}</h3>
    <p class="italic text-gray-500">{{ props.activity.activity.description }}</p>
    <p class="mt-2 font-medium text-gray-900">{{ props.activity.price }}</p>
  </div>
</template>
