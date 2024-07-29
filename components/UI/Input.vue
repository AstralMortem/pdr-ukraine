<script lang="ts" setup>
import { useField } from 'vee-validate'

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
  label: String,
  name: String,
  value: String,
})

const model = defineModel({ default: '' })
const name = toRef(props, 'name')
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
})

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
  <label class="form-control w-full max-w-md">
    <div v-if="$props.label" class="label">
      <span class="label-text text-lg">{{ $props.label }}</span>
    </div>
    <label for="inputField" class="input flex items-center gap-2 w-full" :class="[variant, color, size]">
      <UIIcon v-if="leadingIcon" :name="leadingIcon" />
      <slot v-else name="leading" />
      <input v-if="$props.label" :id="name" :type="$props.type" :placeholder="$props.placeholder" class="grow" :disabled="$props.disabled" :value="inputValue" :name="name" @input="handleChange" @blur="handleBlur">
      <input v-else v-model="model" :type="$props.type" :placeholder="$props.placeholder" class="grow" :disabled="$props.disabled">
      <UIIcon v-if="trailingIcon" :name="trailingIcon" />
      <slot v-else name="trailing" />
    </label>
    <div v-show="errorMessage" class="label">
      <span class="label-text-alt text-error text-md">{{ errorMessage }}</span>
    </div>
  </label>
</template>

<style>

</style>
