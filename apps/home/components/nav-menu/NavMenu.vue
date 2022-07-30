<script setup lang="ts">
const navigation = ref([
  {
    name: 'Home',
    icon: '/nav-icons/pokedex.png',
    path: '/',
  },
  {
    name: 'Items',
    icon: '/nav-icons/items.png',
    path: '/items',
  },
  {
    name: 'Pokemons',
    icon: '/nav-icons/pokemons.png',
    path: '/pokemons',
  },
  {
    name: 'Trainers',
    icon: '/nav-icons/trainers.png',
    path: '/trainers',
  },
])
</script>
<template>
  <nav
    class="w-full absolute bottom-0 border-t-1 border-gray-200 sm:( flex justify-center fixed bottom-a top-0 border-transparent)"
  >
    <ul class="bg-white p-4 flex justify-between shadow-lg sm:(mx-auto justify-center rounded-full w-a py-2)">
      <li v-for="{ name, icon, path } of navigation">
        <NuxtLink :to="path" class="cursor-pointer hover:scale-2 transition-all duration-200">
          <img class="w-16 h-16 sm:(w-12 h-12)" :src="icon" :alt="name" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
