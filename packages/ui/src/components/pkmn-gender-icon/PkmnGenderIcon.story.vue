<script setup lang="ts">
import { reactive } from 'vue'
import PkmnGenderIcon from './PkmnGenderIcon.vue'
import { pkmnGender } from './const'

const state = reactive({
  gender: pkmnGender.MALE,
})
</script>
<template>
  <Story
    title="PkmnGenderIcon"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground">
      <PkmnGenderIcon :gender="state.gender" />

      <template #controls="{ state }">
        <HstText v-model="state.gender" title="Gender" />
      </template>
    </Variant>
  </Story>
</template>
