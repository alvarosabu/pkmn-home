<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  internalName: {
    default: null,
    type: String,
  },
  size: {
    default: 24,
    type: Number,
  },
})

const item = computed(() => `/items/${props.internalName.toLowerCase().replace(/\s/g, '')}.png`)

const styles = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}))
</script>
<template>
  <img :src="item" :style="styles" />
</template>
