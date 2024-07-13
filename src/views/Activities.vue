<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getActivities } from '../api'
import Pagination from '../components/Pagination/Pagination.vue'
import type { ActivityWithDetails } from '../types'

const LIMIT = 10
const router = useRouter()
const route = useRoute()
const currentPage = ref<number>(1)
const loading = ref<boolean>(true)
const activities = ref<ActivityWithDetails[]>([])
const queryPage = computed(() => Number(route.query.page) || 1)

const onGetActivities = async (page: number, limit: number) => {
  try {
    loading.value = true
    activities.value = await getActivities({ page, limit })
  } catch (error: any) {
    // TODO: Handle error
    console.error('Error:', error)
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
    <h1>Activities</h1>
    <section v-if="loading">Loading...</section>
    <section v-else>
      <ul>
        <li v-for="activity in activities" :key="activity.id">
          {{ activity.title }}
        </li>
      </ul>
    </section>
    <Pagination class="absolute bottom-20 left-0 right-0" :total="200" :current-page="currentPage"
      @select="onChangeCurrentPage" />
  </section>
</template>
