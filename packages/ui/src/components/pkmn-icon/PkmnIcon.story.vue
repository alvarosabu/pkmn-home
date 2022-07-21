<script setup lang="ts">
import { reactive } from 'vue'
import PkmnIcon from './PkmnIcon.vue'

const state = reactive({
  nationalDex: 1,
  shiny: false,
  form: null,
  egg: false,
  size: 100,
})
</script>
<template>
  <Story
    title="PkmnIcon"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground">
      <PkmnIcon v-bind="state" />
    </Variant>
  </Story>
</template>
