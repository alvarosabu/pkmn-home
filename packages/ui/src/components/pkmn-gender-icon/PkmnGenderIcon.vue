<script setup lang="ts">
import { computed } from 'vue'
import { pkmnGender, PkmnGender } from './const'

const props = withDefaults(
  defineProps<{
    gender?: PkmnGender
  }>(),
  {
    gender: pkmnGender.NONE,
  },
)

const getClasses = computed(() => {
  if (props.gender === pkmnGender.MALE) {
    return 'text-male i-mdi-gender-male'
  } else if (props.gender === pkmnGender.FEMALE) {
    return 'text-female i-mdi-gender-female'
  } else {
    return ''
  }
})
</script>
<template>
  <i :class="getClasses"></i>
</template>
