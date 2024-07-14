<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import { fetchResults } from './api'
import { useAppStore } from './store'

import Notification from './components/Notification/Notification.vue'

const store = useAppStore()

onBeforeMount(async () => {
  const activities = await fetchResults()
  store.setActivitiesTotal(activities.length)
})
</script>

<template>
  <Notification />
  <RouterView />
</template>
