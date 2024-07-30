<script lang="ts" setup>
import type { INavBarLink } from '~/types'

defineProps({
  links: Array<INavBarLink>,
})
</script>

<template>
  <div class="navbar ">
    <div class="navbar-start">
      <UILogo />
    </div>
    <div class="navbar-center md:flex flex-row justify-end items-center gap-2 hidden">
      <NavLink v-for="link in $props.links" :key="link.path" :link="link" />
    </div>
    <div class="navbar-end flex flex-row justify-end items-center gap-2">
      <NavUser />
    </div>
  </div>
  <div class="navbar fixed bottom-0 left-0 md:hidden gap-2 flex flex-row justify-between items-center z-50">
    <NavBottomLink v-for="link in links" :key="link.path" :icon="link.icon" :label="link.label" :path="link.path" />
  </div>
</template>

<style>

</style>
