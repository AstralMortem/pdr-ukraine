<script lang="ts" setup>
import type { INavBarLink } from '~/types'

defineProps<INavBarLink>()
</script>

<template>
  <NuxtLink class="btn" active-class="btn-accent" :to="$props.path">
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <UIIcon :name="$props.icon" />
      <p>{{ $props.label }}</p>
    </div>
  </NuxtLink>
</template>

<style>

</style>
