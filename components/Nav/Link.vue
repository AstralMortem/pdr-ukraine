<script lang="ts" setup>
import type { INavBarLink } from '~/types'

defineProps({
  link: {
    type: {} as PropType<INavBarLink>,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="$props.link.path" class="btn btn-md" active-class="btn-accent">
    {{ $props.link.label }}
  </NuxtLink>
</template>

<style>

</style>
