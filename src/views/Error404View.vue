<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onContactSupport = () => {
  console.log('Contact support')
}

const onGoBackHome = () => {
  router.push({ name: 'home' })
}
</script>
<template>
  <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-primary">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          @click="onGoBackHome"
          >Go back home</a
        >
        <a
          href="mailto:support@bigbox.com.ar"
          class="text-sm font-semibold text-gray-900"
          @click="onContactSupport"
          >Contact support <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
  </main>
</template>
