import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  srcDir: 'src',
  buildModules:['nuxt-windicss', '@pinia/nuxt',],
})
