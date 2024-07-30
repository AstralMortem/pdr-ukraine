<script lang="ts" setup>
const props = defineProps(['id', 'title'])

const image = computed(() => `/img/markings/${props.id}.png`)
</script>

<template>
  <div class="flex flex-col justify-start items-start gap-2 mt-4">
    <div class="flex flex-row justify-start items-center gap-4 mb-4">
      <UIAvatar :src="image" size="w-40" />
      <div class="flex flex-col gap-2">
        <h2>{{ $props.title }}</h2>
        <p class="text-primary">
          Розмітка {{ $props.id }}
        </p>
      </div>
    </div>
    <slot />
  </div>
</template>

<style>

</style>
