<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  nationalDex: {
    default: 0,
    type: Number,
  },
  size: {
    default: 64,
    type: Number,
  },
  shiny: {
    default: false,
    type: Boolean,
  },
  form: {
    default: null,
    type: String,
  },
  egg: {
    default: false,
    type: Boolean,
  },
  animated: {
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

const icon = computed(() => {
  let sprite = paddedDex.value
  if (props.shiny) {
    sprite += 's'
  }
  if (props.form) {
    sprite += `_${props.form}`
  }
  if (props.egg) {
    sprite = 'egg'
  }
  return `/pokemons/icons/icon${sprite}.png`
})

const styles = computed(() => ({
  backgroundImage: `url(${icon.value})`,
  backgroundSize: 'cover',
  width: `${props.size}px`,
  height: `${props.size}px`,
}))
</script>

<template>
  <div class="pkmn-icon" :class="{ animated: animated }" :style="styles" />
</template>

<style>
:root {
  --sprite-size: v-bind(size);
}
.pkmn-icon.animated {
  animation: moveX 1s steps(2) infinite;
}

@keyframes moveX {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: calc(var(--3252fa55-size) * 2px);
  }
}
</style>
