<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <main>
    <header>
      <div class="wrapper h-24 mt-4">
        <nav class="flex items-center justify-between w-6/12 mx-auto">
          <RouterLink to="/">
            <button type="button"
              class="rounded bg-primary px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Home</button>
          </RouterLink>
          <RouterLink to="/actividades"><button type="button"
              class="rounded bg-red-100 px-2 py-1 text-xs font-semibold text-red-900 shadow-sm hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Actividades</button>
          </RouterLink>
        </nav>
      </div>
    </header>
    <h1 class="text-red-500 text-3xl md:text-4xl lg:text-6xl mt-12 flex justify-center mx-auto">Frontend Code Challenge
    </h1>
  </main>
</template>
