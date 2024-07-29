<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  variant: String,
  trailingIcon: String,
  leadingIcon: String,
  color: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  size: String,
})

const model = defineModel({ default: '' })

const variant = computed(() => {
  switch (props.variant) {
    case 'borderless': return ''
    case 'ghost': return 'input-ghost'

    default: return 'input-bordered'
  }
})

const color = computed(() => {
  switch (props.color) {
    case 'primary': return 'input-primary'
    case 'accent': return 'input-accent'
    case 'secondary': return 'input-secondary'
    case 'info': return 'input-info'
    case 'success': return 'input-success'
    case 'warning': return 'input-warning'
    case 'error': return 'input-error'
    default: return ''
  }
})

const size = computed(() => {
  switch (props.size) {
    case 'xs': return 'input-xs'
    case 'sm': return 'input-sm'
    case 'md': return 'input-md'
    case 'lg': return 'input-lg'
    default: return ''
  }
})
</script>

<template>
  <label for="inputField" class="input flex items-center gap-2" :class="[variant, color, size]">
    <UIIcon v-if="leadingIcon" :name="leadingIcon" />
    <slot v-else name="leading" />
    <input v-model="model" :type="$props.type" :placeholder="$props.placeholder" class="grow" :disabled="$props.disabled">
    <UIIcon v-if="trailingIcon" :name="trailingIcon" />
    <slot v-else name="trailing" />
  </label>
</template>

<style>

</style>
