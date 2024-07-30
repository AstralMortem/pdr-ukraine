<script lang="ts" setup>
defineProps(['id'])
</script>

<template>
  <NuxtLink :to="`/theory/road-signs/${$props.id}`" class="flex flex-col items-center gap-1 justify-center">
    <UIAvatar :src="`/img/signs/${$props.id}.png`" size="w-14" />
    <p>{{ $props.id }}</p>
  </NuxtLink>
</template>

<style>

</style>
