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
  >
    <slot name="default">
      {{ label }}
    </slot>
  </component>
</template>
