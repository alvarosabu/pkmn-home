<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  nationalDex: {
    default: 0,
    type: Number,
  },
  size: {
    default: 100,
    type: Number,
  },
  shiny: {
    default: false,
    type: Boolean,
  },
  form: {
    type: String,
  },
  egg: {
    default: false,
    type: Boolean,
  },
})

const paddedDex = computed(() =>
  props.nationalDex < 10
    ? `00${props.nationalDex}`
    : props.nationalDex < 100
    ? `0${props.nationalDex}`
    : props.nationalDex,
)

const sprite = computed(() => {
  let spriteIcon = paddedDex.value
  if (props.shiny) {
    spriteIcon += 's'
  }
  if (props.form) {
    spriteIcon += `_${props.form}`
  }
  if (props.egg) {
    spriteIcon = 'egg'
  }
  return `/pokemons/sprites/${spriteIcon}.png`
})

const styles = computed(() => ({
  width: `${props.size}px`,
  /*   height: `${props.size}px`, */
}))
</script>
<template>
  <img :src="sprite" :style="styles" />
</template>
