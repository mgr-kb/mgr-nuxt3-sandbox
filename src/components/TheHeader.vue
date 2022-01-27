<script setup lang="ts">
const listItems = ref([
  { name: 'Home', to: '/' },
  { name: 'pinia', to: '/pinia' },
])
</script>

<template>
  <header>
    <div class="flex justify-between bg-gray-700 py-4 px-6 text-size-lg">
      <nav>
        <ul class="flex items-center list-none">
          <li v-for="(item, index) in listItems" :key="index" class="mr-4">
            <nuxt-link :to="item.to" class="text-gray-500 hover:text-gray-400">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="flex items-center">
        <nuxt-link to="#" class="mr-4 text-gray-500 hover:text-gray-400">LOGIN</nuxt-link>
      </div>
    </div>
  </header>
</template>
