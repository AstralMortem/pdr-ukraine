<script lang="ts" setup>
defineProps({
  src: String,
  size: {
    type: String,
    default: 'w-24 h-24',
  },
})
</script>

<template>
  <div class="avatar">
    <div class="rounded-full" :class="[$props.size]">
      <img :src="$props.src">
    </div>
  </div>
</template>

<style>

</style>
