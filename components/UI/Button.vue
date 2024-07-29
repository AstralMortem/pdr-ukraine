<script lang="ts" setup>
const props = defineProps({
  label: String,
  trailingIcon: String,
  leadingIcon: String,
  loading: {
    type: Boolean,
    default: false,
  },
  variant: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  wide: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  type: {
    type: String,
    default: 'button',
  },

})

const compColor = computed(() => {
  switch (props.color) {
    case 'neutral': return 'btn-neutral'
    case 'primary': return 'btn-primary'
    case 'secondary': return 'btn-secondary'
    case 'accent': return 'btn-accent'
    case 'ghost': return 'btn-ghost'
    case 'link': return 'btn-link'
    case 'info': return 'btn-info'
    case 'success': return 'btn-success'
    case 'warning': return 'btn-warning'
    case 'error': return 'btn-error'
    default: return ''
  }
})

const compSize = computed(() => {
  switch (props.size) {
    case 'xs': return 'btn-xs'
    case 'sm': return 'btn-sm'
    case 'md': return 'btn-md'
    case 'lg': return 'btn-lg'
    default : return ''
  }
})

const compVariant = computed(() => {
  switch (props.variant) {
    case 'outline': return 'btn-outline'
    case 'glass': return 'glass'
    case 'circle': return 'btn-circle'
    case 'square': return 'btn-square'
    case 'rounded': return 'rounded-full'
    default: return ''
  }
})

const isWide = computed(() => props.wide ? 'btn-wide' : '')
const isBlock = computed(() => props.block ? 'btn-block' : '')
</script>

<template>
  <button :type="$props.type" class="btn flex flex-row justify-center items-center" :disabled="$props.disabled" :class="[compSize, compColor, compVariant, isWide, isBlock]">
    <div v-if="$props.leadingIcon || $props.loading" class="flex items-center">
      <span v-if="$props.loading" class="loading loading-spinner" />
      <UIIcon v-else :name="$props.leadingIcon" size="2em" />
    </div>

    <slot v-if="!$props.label" />
    <span v-else>{{ $props.label }}</span>

    <div v-if="$props.trailingIcon" class="flex items-center">
      <UIIcon :name="$props.trailingIcon" />
    </div>
  </button>
</template>

<style>

</style>
