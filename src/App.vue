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
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
