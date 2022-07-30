<script setup lang="ts">
const selected = ref({
  national_dex: 1,
  name: 'Bulbasaur',
})

const { data: pokedex } = await useAsyncData('species', () => queryContent('/species').findOne())

function selectSpecie(specie) {
  selected.value = specie
}
</script>
<template>
  <div class="mx-auto container">
    <h1 class="font-bold text-3xl mb-8">Pokedex</h1>
    <div class="flex">
      <!-- <pre>{{ pokedex.body }}</pre> -->
      <div class="w-1/3" v-if="selected">
        <div class="border border-gray-200 rounded flex flex-col items-center p-4">
          <PkmnSprite :national-dex="selected?.national_dex" size="200" class="mb-8" />
          <h2 class="font-bold text-2xl mb-8">{{ selected.name }}</h2>
        </div>
      </div>
      <div class="w-2/3 flex justify-between flex-wrap px-12">
        <div
          class="bg-white p-4 shadow rounded-full cursor-pointer mb-8 hover:(bg-yellow-100 shadow-lg -translate-y-2) transition-all duration-200"
          :key="specie.national_dex"
          v-for="specie in pokedex.body"
          @click="selectSpecie(specie)"
        >
          <PkmnIcon :national-dex="specie.national_dex" />
        </div>
      </div>
    </div>
  </div>
</template>
