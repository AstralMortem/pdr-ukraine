<script lang="ts" setup>
const props = defineProps({
  text: String,
  vertical: Boolean,
  position: {
    type: String,
    default: 'center',
  },
})

const orientation = computed(() => props.vertical ? 'divider-vertical' : '')
const position = computed(() => {
  switch (props.position) {
    case 'start': return 'divider-start'
    case 'end': return 'divider-end'
    case 'center': return ''
    default: return ''
  }
})

const color = computed(() => {
  switch (props.color) {
    case 'primary': return 'divider-primary'
    case 'accent': return 'divider-accent'
    case 'secondary': return 'divider-secondary'
    case 'info': return 'divider-info'
    case 'success': return 'divider-success'
    case 'warning': return 'divider-warning'
    case 'error': return 'divider-error'
    default: return ''
  }
})
</script>

<template>
  <div class="divider" :class="[orientation, position, color]">
    {{ $props.text }}
  </div>
</template>

<style>

</style>
