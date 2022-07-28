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

      <template #controls="{ state }">
        <HstSelect v-model="state.variant" title="Variant" :options="['awiwi', 'composable']" />
      </template>
    </Variant>
    <Variant title="disabled">
      <PkmnButton :disabled="true" :label="state.label" />
    </Variant>
  </Story>
</template>
