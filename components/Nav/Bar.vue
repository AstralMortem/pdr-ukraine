<script lang="ts" setup>
import type { INavBarLink } from '~/types'

defineProps({
  links: Array<INavBarLink>,
})
</script>

<template>
  <div class="navbar">
    <div class="navbar-start">
      <UILogo />
    </div>
    <div class="navbar-end">
      <div class="flex flex-row justify-end items-center gap-3">
        <div class="md:flex flex-row justify-end items-center gap-2 hidden">
          <NavLink v-for="link in $props.links" :key="link.path" :link="link" />
        </div>
        <NavUser />
      </div>
    </div>
  </div>
</template>

<style>

</style>
