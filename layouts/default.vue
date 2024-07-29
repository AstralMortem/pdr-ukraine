<script lang="ts" setup>
import type { INavBarLink } from '~/types'

const links = [{
  label: 'Дім',
  path: '/',
  icon: 'ph:house',
}, {
  label: 'Теорія ПДР',
  path: '/theory',
  icon: 'ph:book',
}] as INavBarLink[]
</script>

<template>
  <UIContainer>
    <NavBar :links="links" />
    <slot />
  </UIContainer>
</template>

<style></style>
