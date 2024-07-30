<script lang="ts" setup>
defineProps(['title'])
</script>

<template>
  <div class="card bg-base-300 card-compact">
    <div class="card-body prose">
      <span class="text-lg font-bold">{{ $props.title }}</span>
      <slot />
    </div>
  </div>
</template>

<style>

</style>
