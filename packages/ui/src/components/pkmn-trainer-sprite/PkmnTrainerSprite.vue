<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  internalName: {
    default: null,
    type: String,
  },
  size: {
    default: 200,
    type: Number,
  },
})

const trainer = computed(() => `/trainers/sprites/${props.internalName.toLowerCase().replace(/\s/g, '')}.png`)

const styles = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}))
</script>
<template>
  <img :src="trainer" :style="styles" />
</template>
