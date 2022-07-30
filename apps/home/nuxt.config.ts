import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['@pkmn-home/ui/styles'],
  buildModules: ['@unocss/nuxt'],
  content: {
    navigation: {
      fields: ['icon'],
    },
  },
  ssr: false,
  nitro: {
    publicAssets: [
      {
        dir: fileURLToPath(new URL('./node_modules/@pkmn-home/ui/public', import.meta.url)),
        /* dir: '/node_modules/@pkmn-home/ui/public', */
      },
    ],
  },
})
