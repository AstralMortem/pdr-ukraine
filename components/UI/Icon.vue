<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: '1rem',
  },
  color: {
    type: String,

  },
  asButton: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <Icon v-if="!$props.asButton" :name="$props.name" :size="$props.size" :class="[color]" />
  <UIButton v-else :trailing-icon="$props.name" size="sm" />
</template>

<style>

</style>
