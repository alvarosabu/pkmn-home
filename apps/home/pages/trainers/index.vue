<script setup lang="ts">
const { data: trainers } = await useAsyncData('trainers', () => queryContent('/trainers').find())
</script>
<template>
  <div class="mx-auto container">
    <h1 class="font-bold text-3xl mb-8">Trainers</h1>
    <!--     <pre>{{ trainers }}</pre> -->
    <div class="grid flex justify-between flex-wrap">
      <NuxtLink
        class="bg-white p-4 shadow rounded cursor-pointer mb-8 hover:(bg-yellow-100 shadow-lg -translate-y-2) transition-all duration-200"
        v-for="trainer in trainers"
        :to="trainer._path"
      >
        <PkmnTrainerSprite :internal-name="trainer.sprites[1].media" size="200" />
      </NuxtLink>
    </div>
  </div>
</template>
