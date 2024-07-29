<script lang="ts" setup>
import type { INavBarLink } from '~/types'

const links = [{
  label: 'link',
  path: '/',
  icon: '',
}] as INavBarLink[]
</script>

<template>
  <div class="flex flex-col justify-start items-start w-screen h-full">
    <NavBar :links="links" />
    <slot />
  </div>
</template>

<style></style>
