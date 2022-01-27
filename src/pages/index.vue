<script setup lang="ts">
import { useUserStore } from '../store/useUser';
const { getUser } = useUserStore()
</script>

<template>
  <section class="flex flex-col justify-between">
    <h1 class="text-2xl">Nuxt3 Sandbox</h1>
    <div class="mt-6">
      <Counter />
    </div>
    <div class="mt-6">
      <PostsTest />
    </div>
    <div class="mt-6">
      <p>
        ユーザーの年齢は {{ getUser.age }}歳
      </p>
    </div>
  </section>
</template>