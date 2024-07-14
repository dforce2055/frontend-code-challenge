<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { ActivityWithDetails } from '../../types'
import ActivityCard from '../ActivityCard/ActivityCard.vue'

const props = defineProps({
  activities: {
    type: Array as () => ActivityWithDetails[],
    required: true
  },
  gridLength: {
    type: Number,
    default: 3
  }
})

const emit = defineEmits<{
  (e: 'click', activity: ActivityWithDetails): void
}>()

const gridClasses = computed(() => {
  let classes = 'sm:grid-cols-2 lg:grid-cols-3 '
  if (props.gridLength === 2) classes = 'sm:grid-cols-1 lg:grid-cols-2'
  if (props.gridLength === 3) classes = 'sm:grid-cols-2 lg:grid-cols-3'
  if (props.gridLength === 4) classes = 'sm:grid-cols-3 lg:grid-cols-4'

  return classes
})
</script>
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div :class="['grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8', gridClasses]">
        <ActivityCard
          v-for="activity in props.activities"
          :key="activity.id"
          :activity="activity"
          @click="emit('click', $event)"
        />
      </div>
    </div>
  </div>
</template>
