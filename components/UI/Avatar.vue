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
    <div class="rounded-full flex justify-center items-center" :class="[$props.size]">
      <img :src="$props.src" class="m-0 p-0">
    </div>
  </div>
</template>

<style>

</style>
