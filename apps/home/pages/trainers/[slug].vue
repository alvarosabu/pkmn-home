<script setup>
const { path } = useRoute()
const { data: trainer } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .only(['name', 'descriptions', 'sprites', 'gender', 'region', 'home_town', 'eye_color', 'hair_color'])
    .findOne()
})
</script>
<template>
  <main class="container flex justify-between mx-auto sm:pt-20">
    <ContentDoc class="w-2/3 prose px-4" />
    <div class="w-1/3 bg-primary-500 p-4 rounded prose">
      <h2 class="font-bold text-white mb-8 important-mt-0">{{ trainer.name }}</h2>
      <div class="bg-white rounded p-4 mb-8">
        <PkmnTrainerSprite class="mx-auto" :internal-name="trainer.sprites[1].media" size="200" />
      </div>
      <ul class="bg-white rounded p-1 mb-8">
        <li class="flex flex-wrap w-full">
          <strong class="text-left bg-primary-300 text-white inline-block w-1/2 px-2">Gender</strong>
          <span class="inline-block w-1/2 px-2">{{ trainer.gender }}</span>
        </li>
        <li class="flex flex-wrap w-full">
          <strong class="text-left bg-primary-300 text-white inline-block w-1/2 px-2">Region</strong>
          <span class="inline-block w-1/2 px-2">{{ trainer.region }}</span>
        </li>
        <li class="flex flex-wrap w-full">
          <strong class="text-left bg-primary-300 text-white inline-block w-1/2 px-2">Home Town</strong>
          <span class="inline-block w-1/2 px-2">{{ trainer.home_town }}</span>
        </li>
      </ul>
    </div>
  </main>
</template>
