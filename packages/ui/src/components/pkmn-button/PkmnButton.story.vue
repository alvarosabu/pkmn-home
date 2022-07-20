<script setup lang="ts">
import { reactive } from 'vue'
import PkmnButton from './PkmnButton.vue'

const state = reactive({
  disabled: false,
  label: 'Pokemon',
})
</script>
<template>
  <Story
    title="PkmnButton"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground">
      <PkmnButton :disabled="state.disabled" :label="state.label" />
    </Variant>
  </Story>
</template>
