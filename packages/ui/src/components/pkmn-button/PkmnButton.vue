<script setup lang="ts">
defineProps({
  link: {
    type: String,
  },
  disabled: Boolean,
  label: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '_blank',
  },
})
</script>
<template>
  <component
    :is="link ? 'a' : 'button'"
    :disabled="disabled"
    :href="link || undefined"
    :target="link ? target : undefined"
    class="pkmn-button"
  >
    <slot name="default">
      {{ label }}
    </slot>
  </component>
</template>
<style>
.pkmn-button {
  @apply bg-primary-800 text-white border-4 border-transparent hover:(bg-primary-900 border-gray-200);
  @apply inline-block rounded-full py-1.5 px-5;
  @apply font-sans font-semibold;
  @apply transition-all duration-300 disabled:opacity-20 cursor-pointer decoration-none;
}
</style>
