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
    <UIBreadCrumb />
    <div class="w-full h-full mt-3">
      <slot />
    </div>
  </UIContainer>
</template>

<style></style>
