<script lang="ts" setup>
defineProps(['to', 'title', 'icon'])
</script>

<template>
  <NuxtLink class="hover:bg-neutral w-full rounded-2xl px-3 py-1 flex gap-4 items-center justify-start hover:text-primary decoration-transparent hover:ring-primary ring-accent" :to="$props.to">
    <div class="ring-1 ring-inherit rounded-full flex items-center justify-center p-2">
      <UIIcon :name="$props.icon" size="2rem" color="text-inherit" />
    </div>
    <p class="text-xl">
      {{ $props.title }}
    </p>
  </NuxtLink>
</template>

<style>

</style>
