<script setup lang="ts">
import { defineProps, onBeforeMount, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const loading = ref<boolean>(true)


onBeforeMount(async () => {
  // TODO: Call API with id
  console.log('Call API with id:', props.id)
})
</script>
<template>
  <section>
    <h1>Activity detail</h1>
    <h2>Activity: {{ props.id }}</h2>
  </section>
</template>
