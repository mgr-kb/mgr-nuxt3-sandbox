<script setup lang="ts">
import { useUserStore } from '../store/useUser';
const { getUser, birthday } = useUserStore()
</script>

<template>
  <section class="flex flex-col justify-between">
    <h1 class="text-2xl">Pinia Sandbox</h1>
    <div class="mt-6">
      <section>
        <h2 class="text-xl">User</h2>
        <div class="border-t border-gray-200">
          <dl>
            <template v-for="([key, value], idx) in Object.entries(getUser)" :key="idx">
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">{{ key }}</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ value }}</dd>
              </div>
            </template>
          </dl>
        </div>
        <div class="mt-2">
          <button class="bg-green-500 text-white px-4 py-2 mr-2 rounded-xl" @click="birthday">誕生日</button>
        </div>
      </section>
    </div>
  </section>
</template>