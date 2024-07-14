<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getActivities } from '../api'
import { useNotificationsStore, useAppStore } from '../store'
import type { ActivityWithDetails } from '../types'

import Pagination from '../components/Pagination/Pagination.vue'
import ActivityList from '../components/ActivityList/ActivityList.vue'

const LIMIT = 9
const appStore = useAppStore()
const notificationStore = useNotificationsStore()
const router = useRouter()
const route = useRoute()
const currentPage = ref<number>(1)
const loading = ref<boolean>(true)
const activities = ref<ActivityWithDetails[]>([])

const queryPage = computed(() => Number(route.query.page) || 1)
const total = computed(() => Math.ceil(appStore.activitiesTotal / LIMIT))

const onGetActivities = async (page: number, limit: number) => {
  try {
    loading.value = true
    activities.value = await getActivities({ page, limit })

  } catch (error: any) {
    console.error('Error:', error)
    notificationStore.setErrorNotification()
  } finally {
    loading.value = false
  }
}

const onChangeCurrentPage = (page: number) => {
  if (page === queryPage.value) return

  router.push({ query: { page: page } })
  onGetActivities(page, LIMIT)
  currentPage.value = page
}


watch(queryPage, (page) => {
  onChangeCurrentPage(page)
})

onBeforeMount(async () => {
  await onGetActivities(currentPage.value, LIMIT)
})

onMounted(() => {
  currentPage.value = queryPage.value
})
</script>
<template>
  <section>
    <section v-if="loading">Loading...</section>
    <section v-else>
      <ActivityList :activities="activities" />
    </section>
    <Pagination :class="[loading ? 'absolute bottom-6 left-0 right-0' : '']" :total="total" :current-page="currentPage"
      @select="onChangeCurrentPage" />
  </section>
</template>
