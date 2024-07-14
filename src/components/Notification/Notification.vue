<script setup lang="ts">
import { computed } from 'vue'
import { useNotificationsStore } from '../../store'

const store = useNotificationsStore()
const showNotification = computed(() => store.showNotification)
const notificationType = computed(() => store.notificationType)
const title = computed(() => store.title)
const description = computed(() => store.description)


const onClose = () => {
  store.hideNotification()
}


</script>
<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="showNotification"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <span v-if="notificationType === 'error'" :class="['h-6 w-6']" aria-hidden="true">⚠️</span>
                <span v-if="notificationType === 'success'" :class="['h-6 w-6']" aria-hidden="true">✅</span>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p :class="['text-sm font-medium text-gray-900']">{{ title }}</p>
                <p class="mt-1 text-sm text-gray-500">{{ description }}</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button type="button" @click="onClose"
                  class="inline-flex rounded-full bg-white text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Close</span>
                  <span class="h-5 w-5" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      viewBox="0 0 16 16">
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>