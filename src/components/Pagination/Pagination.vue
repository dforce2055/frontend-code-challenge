<script setup lang="ts">
import {
  ref, defineProps, computed, defineEmits, watch
} from 'vue'

const props = defineProps({
  itemsPerPage: {
    type: Number,
    required: false,
    default: 9
  },
  total: {
    type: Number,
    required: false,
    default: 10
  },
  currentPage: {
    type: Number,
    required: false,
    default: 1
  },
})


const emit = defineEmits<{
  (e: 'next', page: number): void
  (e: 'prev', page: number): void
  (e: 'select', page: number): void
}>()


const texts = computed(() => ({
  of: 'de',
  results: 'resultados',
}))


const SET_LENGTH = 7
const DIFF_SLIDER = 17

const limitLeft = ref(1)
const currentPage = ref(props.currentPage)
// const pages = computed(() => Math.ceil(props.total / props.itemsPerPage))


const currentSet = computed(() => {
  return Array.from({ length: SET_LENGTH }, (_, i) => i + limitLeft.value)
})

const limitRight = computed(() => {
  const diff = props.total - currentPage.value

  if (diff === 0) return props.total
  if (diff > DIFF_SLIDER) return currentSet.value[currentSet.value.length - 1] + DIFF_SLIDER
  if (currentSet.value[currentSet.value.length - 1] + diff > props.total) return props.total
  else return currentSet.value[currentSet.value.length - 1] + diff
})

const showDots = computed(() => {
  return (props.total - currentPage.value) > SET_LENGTH
})

const onPrev = () => {
  if (limitLeft.value > 1) {
    limitLeft.value--
    if (currentPage.value > limitLeft.value + SET_LENGTH - 1) {
      currentPage.value -= SET_LENGTH - 1
    }
    onSelectPage(currentPage.value)
    emit('prev', currentPage.value)
  }
}

const onNext = () => {
  if (limitLeft.value < props.total - 7) {
    limitLeft.value++

    if (currentPage.value < limitLeft.value) {
      currentPage.value = limitLeft.value
    }
  }
  if (currentPage.value < props.total) {
    onSelectPage(currentPage.value++)
  }
  emit('next', currentPage.value)
}

const onSelectPage = (page: number) => {
  if (page) {
    currentPage.value = page
    emit('select', currentPage.value)
  }
}

const onSelectLastItem = () => {
  if (currentPage.value <= (props.total - DIFF_SLIDER)) {
    currentPage.value = limitRight.value
    limitLeft.value = currentPage.value
  } else if (limitRight.value === props.total) {
    currentPage.value = limitRight.value
    limitLeft.value = currentPage.value - SET_LENGTH
  }
  onSelectPage(currentPage.value)
}


const onGoToPage = (page: number) => {
  if (page >= props.total) {
    currentPage.value = props.total
    limitLeft.value = props.total - SET_LENGTH
  }

  if (page < props.total - SET_LENGTH && page > 0) {
    currentPage.value = page
    limitLeft.value = page
  }
}

watch(() => props.currentPage, (value) => {
  onGoToPage(value)
})

</script>
<template>
  <div class="flex flex-col items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div class="flex flex-1 gap-10 justify-between sm:hidden">
      <a href="#"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        @click="onPrev">Previous</a>
      <a href="#"
        class="relative  inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        @click="onNext">Next</a>
    </div>
    <div class="flex flex-col">
      <div class="hidden w-full sm:flex sm:flex-1 sm:items-center sm:justify-center lg:flex-col">
        <div class="">
          <nav class="isolate inline-flex gap-2 rounded-md items-center justify-center" aria-label="Pagination">
            <a href="#"
              class="relative inline-flex items-center w-10 h-10 px-2 py-2 text-white text-lg focus:z-20 focus:outline-offset-0 rounded-full bg-primary hover:bg-primary-hover transition-colors duration-150 mr-5"
              @click="onPrev">
              <span class="sr-only">Previous</span>
              <span class="h-4  w-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path fill-rule="evenodd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
              </span>
            </a>

            <a v-for="(item, index) in currentSet" :key="index" href="#"
              :aria-current="item === currentPage ? 'page' : undefined" :class="['relative z-10 inline-flex items-center justify-center rounded-full min-w-10 h-10 text-lg font-normal p-2 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-150',
                item === currentPage ? 'bg-primary hover:bg-primary-hover focus-visible:outline-primary text-white' : 'text-black hover:bg-gray-100 focus-visible:outline-gray'
              ]" @click="onSelectPage(item)">
              {{ item }}
            </a>

            <transition name="fade">
              <span v-if="showDots"
                class="relative inline-flex items-center px-4 py-2 text-lg font-normal text-gray-700 ring-gray-300 focus:outline-offset-0">...</span>
            </transition>

            <a href="#"
              :class="['relative inline-flex items-center justify-center rounded-full min-w-10 h-10 text-lg font-normal p-2 text-black ', limitRight === currentPage ? 'bg-primary hover:bg-primary-hover text-white' : 'text-black hover:bg-gray-100']"
              @click="onSelectLastItem">{{
                limitRight }}</a>

            <a href="#"
              class="relative inline-flex items-center justify-center rounded-full w-9 h-9 px-2 py-2 text-white focus:z-20 focus:outline-offset-0 bg-primary hover:bg-primary-hover transition-colors duration-150 ml-5"
              @click="onNext">
              <span class="sr-only">Next</span>
              <span class="h-4 w-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
              </span>
            </a>
          </nav>
        </div>
      </div>
      <div class="flex justify-center h-10 items-end md:self-end">
        <p class="text-base text-gray-400">
          <span class="font-normal">{{ limitLeft }}-{{ limitRight }}</span>
          {{ ' ' }}
          {{ texts.of }}
          {{ ' ' }}
          <span class="font-normal">{{ props.total }}</span>
          {{ ' ' }}
          {{ texts.results }}
        </p>
      </div>

    </div>

  </div>
</template>