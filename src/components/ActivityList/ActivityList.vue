<script setup lang="ts">
import { defineProps } from 'vue'
import type { ActivityWithDetails } from '../../types'
import ActivityCard from '../ActivityCard/ActivityCard.vue'

const props = defineProps({
  activities: {
    type: Array as () => ActivityWithDetails[],
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'click', activity: ActivityWithDetails): void
}>()


</script>
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        <ActivityCard v-for="activity in props.activities" :key="activity.id" :activity="activity"
          @click="emit('click', $event)" />
      </div>
    </div>
  </div>
</template>
