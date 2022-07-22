<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>
<template>
  <nav
    class="w-full absolute bottom-0 border-t-1 border-gray-200 sm:( flex justify-center fixed bottom-a top-0 border-transparent)"
  >
    <ul class="bg-white p-4 flex justify-between shadow-lg sm:(mx-auto justify-center rounded-full w-a py-2)">
      <li v-for="{ title, icon, _path } of navigation">
        <NuxtLink :to="_path" class="cursor-pointer">
          <img class="w-16 h-16 sm:(w-12 h-12)" :src="icon" :alt="title" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
