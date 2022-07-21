<script setup lang="ts">
import { reactive } from 'vue'
import PkmnSprite from './PkmnSprite.vue'

const state = reactive({
  nationalDex: 1,
  shiny: false,
  form: null,
  egg: false,
  size: 100,
  icon: false,
})
</script>
<template>
  <Story
    title="PkmnSprite"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground">
      <PkmnSprite v-bind="state" />
    </Variant>
  </Story>
</template>
