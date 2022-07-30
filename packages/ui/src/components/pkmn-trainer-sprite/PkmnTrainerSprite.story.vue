<script setup lang="ts">
import { reactive } from 'vue'
import PkmnTrainerSprite from './PkmnTrainerSprite.vue'

const state = reactive({
  internalName: 'alvaro_i_young',
})
</script>
<template>
  <Story
    title="PkmnTrainerSprite"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground">
      <PkmnTrainerSprite v-bind="state" />
    </Variant>
  </Story>
</template>
