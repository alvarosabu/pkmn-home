import PkmnUI from '@pkmn-home/ui'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(PkmnUI)
  console.log('PkmnUI installed', nuxtApp)
})
