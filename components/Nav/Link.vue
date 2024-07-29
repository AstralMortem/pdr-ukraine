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
  <NuxtLink class="link" active-class="link-primary" :to="$props.link.path">
    {{ $props.link.label }}
  </NuxtLink>
</template>

<style>

</style>
