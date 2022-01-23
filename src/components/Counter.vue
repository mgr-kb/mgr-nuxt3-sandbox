<script setup lang="ts">
import useCounter from '../composables/useCounter';
const { count, increment, decrement } = useCounter()
</script>

<template>
  <section>
    <h2 class="text-xl">Counter</h2>
    <p class="text-red-500">count: {{ count }}</p>
    <button class="bg-green-500 text-white px-4 py-2 rounded-xl" @click="increment">Increment</button>
    <button class="bg-red-500 text-white px-4 py-2 rounded-xl" @click="decrement">Decrement</button>
  </section>
</template>