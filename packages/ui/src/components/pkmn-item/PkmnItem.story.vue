<script setup lang="ts">
import { reactive } from 'vue'
import PkmnItem from './PkmnItem.vue'

const state = reactive({
  internalName: 'ultraball',
  size: 24,
})
</script>
<template>
  <Story
    title="PkmnItem"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground">
      <PkmnItem v-bind="state" />
    </Variant>
  </Story>
</template>
